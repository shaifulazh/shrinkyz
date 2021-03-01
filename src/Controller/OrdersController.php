<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\OrderDetails;
use App\Entity\OrderModel;
use App\Entity\CartModel;
use App\Entity\AddressModel;
use App\Entity\PaypalModel;
use App\Form\AddressModelType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use App\Form\PaymentType;
use App\Entity\ProductModel;
use Hoa\Compiler\Visitor\Dump;
use App\Controller\PaypalController;
use App\DomainModel\EmailOperation;
use App\DomainModel\PaypalOperation;
use App\Entity\CheckOutData;
use App\Entity\User;
use SebastianBergmann\CodeCoverage\Report\Xml\Totals;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Generator\UrlGenerator;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class OrdersController extends AbstractController
{
    private $paypal;
    private $email;
    public function __construct(PaypalOperation $paypal, EmailOperation $email)
    {
        $this->paypal = $paypal;

        $this->email = $email;
    }

    public function miniCart()
    {
        $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);

        return $this->render('/orders/minicart.html.twig', ['carts' => $carts]);
    }

    /**
     * @Route("/orders/confirm", name="confirm_order")
     */

    public function confirmOrder_create_order(Session $session, Request $r)
    {

        $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);
        if (empty($carts)) {
            $this->addFlash('warning', 'Cart Empty');
            return $this->redirectToRoute('view_cart');
        }

        //check stock

        $notEnoughStock = 0;
        //check cart if stock is enough
        foreach ($carts as $cart) {
            if (($cart->getProduct()->getProductStock() - $cart->getQty()) < 0) {
                $notEnoughStock += 1;
            }
        }

        if ($notEnoughStock !== 0) {
            $this->addFlash('warning', 'Sorry we dont have enough Stock');
            return $this->redirectToRoute('view_cart');
        }

        //total 
        $data = $this->getDoctrine()->getRepository(CheckOutData::class)->findOneBy(['user' => $this->getUser()]);
        $total = $data->getFinaltotal();
        $returnUrl = $this->generateUrl('register_order', [], UrlGenerator::ABSOLUTE_URL);
        $cancelUrl = $this->generateUrl('cancel_order', [], UrlGenerator::ABSOLUTE_URL);

        $payment = $session->get('payment');


        $url = [
            'return' => $returnUrl,
            'cancel' => $cancelUrl
        ];

        $responsed = $this->paypal->paymentexecute($this->getUser(), $payment, $url);


        $arr = $responsed->result;

        $obj = (object)$arr;

        if ($obj->purchase_units[0]->reference_id !== $payment['reference_id']) {
            $this->addFlash('warning', 'not valid transaction');
            return $this->redirectToRoute('customer_pay');
        }

        $paypalid = $obj->id;
        $links = $obj->links;

        foreach ($links as $link) {

            if ($link->rel == 'approve') {
                $approve = $link->href;
            }

            if ($link->rel == 'capture') {
                $capture = $link->href;
            }
        }

        // $this->createOrder($session->get('paymentType'), $session->get('address'), $paypalid);

        $paypalReg = new PaypalModel;
        $em = $this->getDoctrine()->getManager();
        $paypalReg->setPaypalid($paypalid);
        $paypalReg->setUserid($this->getUser()->getId());
        $paypalReg->setHref($capture);
        $em->persist($paypalReg);
        $em->flush();

        return $this->redirect($approve, 301); // capture href paypal approve

        // 1/7/2021 -> paypal intergration need capture page and update status page , add paypal detail in ordermodel

    }

    /**
     * @Route("/orders/register", name="register_order")
     */

    public function registerOrder(Session $session, Request $request, MailerInterface $mailer)
    {
        $paymentSession = $session->get('payment');

        $session->clear();

        $token = $request->query->get('token'); //capture paypal order-id
        if ($token) {
            $paypal = $this->paypal->captureOrder($token);
        } else {
            $this->addFlash('warning', 'prohibited area');
            return $this->redirectToRoute('chekingout');
        }

        $paypaldata = $this->getDoctrine()->getRepository(PaypalModel::class)->findOneBy(['paypalid' => $token]);
        if (!$paypaldata) {
            $this->addFlash('warning', 'Not valid');
            return $this->redirectToRoute('chekingout');
        }

        if ($paypal === null) {
            $this->addFlash('warning', 'error transaction');
            return $this->redirectToRoute('chekingout');
        }
        $arr = $paypal->result;
        $obj = (object)$arr;
        $paypalid = $obj->id;
        $status = $obj->status;



        $purchase_units = $obj->purchase_units;
        $amount = $purchase_units[0]->amount;
        $value = $amount->value;
        $currency = $amount->currency_code;
        $payment = $purchase_units[0]->payments;
        $captures = $payment->captures;

        $seller_receivable_breakdown = $captures[0]->seller_receivable_breakdown;
        $paypalfee = $seller_receivable_breakdown->paypal_fee;
        $grossAmount = $seller_receivable_breakdown->gross_amount;
        $netAmount = $seller_receivable_breakdown->net_amount;
        $valuefee = $paypalfee->value;

        $datepay = $obj->update_time;
        $date =  date('Y-m-d H:i:s', strtotime($datepay));
        $paymentDate = date_create_from_format('Y-m-d H:i:s', $date);


        $links = $captures[0]->links;

        foreach ($links as $link) {

            if ($link->rel == 'refund') {
                $refundhref = $link->href;
            }
        }

        if ($purchase_units[0]->reference_id !== $paymentSession['reference_id']) {
            $this->addFlash('warning', 'Invalid Order');
            return $this->redirectToRoute('chekingout');
        }


        if ($paypalid === $token) {

            $address = $this->getDoctrine()->getRepository(AddressModel::class)->findOneByUser($this->getUser());
            $order = $this->createOrder('paypal', $address, $token, $paymentSession);

            $em = $this->getDoctrine()->getManager();
            $paypaldata->setStatus($status);
            $paypaldata->setAmountCurrency($amount->currency_code);
            $paypaldata->setAmount($value);
            $paypaldata->setCurrency($currency);
            $paypaldata->setPaypalFeeCurrency($paypalfee->currency_code);
            $paypaldata->setPaypalfee($valuefee);
            $paypaldata->setRefundhref($refundhref);
            $paypaldata->setGrossAmountCurrency($grossAmount->currency_code);
            $paypaldata->setGrossAmount(floatval($grossAmount->value));
            $paypaldata->setNetAmountCurrency($netAmount->currency_code);
            $paypaldata->setNetAmount(floatval($netAmount->value));
            $paypaldata->setPaymentDate($paymentDate);
            $em->persist($paypaldata);
            $em->flush();




            $this->email->sendEmailConfirmOrder($this->getUser(), $order);

            $admins = $em->getRepository(User::class)->findByRole('ROLE_ADMIN');

            foreach ($admins as $admin) {

                $this->email->sendAdminPaymentOrder($admin, $order, $this->getUser());
            }
        }


        return $this->render('orders/ThankYou.html.twig', ['order' => $order]);
    }

    /**
     * @Route("/orders/cancel", name="cancel_order")
     */

    public function cancelOrder(Session $session, Request $request)
    {
        $token = $request->query->get('token');
        $paypal = $this->getDoctrine()->getRepository(PaypalModel::class)->findOneBy(['paypalid' => $token]);
        $em = $this->getDoctrine()->getManager();
        // $em->remove($paypal); remove paypal id than has been cancel out by user but this is dangerous

        $paypal->setStatus("CANCEL");
        $em->flush();
        return $this->redirectToRoute('customer_pay');
    }


    //function to create an order to database
    private function createOrder($paymentMethod, $address, $token, $payment)
    {


        $user = $this->getUser();
        $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);
        $em = $this->getDoctrine()->getManager();
        // $em->persist($address);
        // $em->flush();
        $total = 0;
        $order = new OrderModel();
        $order->setStatus('PROCESSING');
        $order->setAddress($address);
        $order->setUser($user);
        $order->setReferenceId($payment['reference_id']);
        $order->setPaymentMethod($paymentMethod);
        $order->setShipping($payment['shipping']);
        $order->setSubtotal($payment['total']);
        $order->setAmount($payment['finaltotal']);
        $order->setTotal($total);

        $paypal = $this->getDoctrine()->getRepository(PaypalModel::class)->findOneBy(['paypalid' => $token]);
        $order->setPaypal($paypal);
        $em->persist($order);
        $em->flush();
        foreach ($carts as $cart) {
            //stock recount
            $product = $cart->getProduct();
            $stockleft = $product->getProductStock() - $cart->getQty();
            $product->setProductStock($stockleft);
            $em->persist($product);
            $orderDetails = new OrderDetails();
            $orderDetails->setProductName(($cart->getProduct())->getProductName());
            $orderDetails->setProductImage(($cart->getProduct())->getPictures()[0]->getFilename());
            $orderDetails->setProductPrice(($cart->getProduct())->getProductPrice());
            $orderDetails->setQty($cart->getQty());
            $orderDetails->setOrders($order);
            $em->persist($orderDetails);
            //removing cart
            $em->remove($cart);
            $em->flush();
            $total = $total + ($cart->getProduct()->getProductPrice() * $cart->getQty());
        }

        $order->setTotal($total);
        $em->persist($order);
        $em->flush();





        return $order;
    }

    /**
     * @Route("/orders", name="user_orders")
     */

    public function userOrder()
    {
        $user = $this->getUser();
        $order = $this->getDoctrine()->getRepository(OrderModel::class)->findBy(['user' => $user], ['createdAt' => 'DESC']);

        return $this->render('user/order.html.twig', ['orders' => $order]);
    }
}
