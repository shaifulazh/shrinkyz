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
use SebastianBergmann\CodeCoverage\Report\Xml\Totals;
use Symfony\Component\Routing\Generator\UrlGenerator;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class OrdersController extends AbstractController
{
    /**
     * @Route("/orders/checkout", name="check_out")
     */
    public function checkOut(Request $request, Session $session)
    {
        $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);
        if (empty($carts)) {
            return $this->redirectToRoute('view_cart');
        }

        if ($session->get('address')) {
            $address = $session->get('address');
        } else {
            $address = new AddressModel();
        }


        $form = $this->createForm(AddressModelType::class, $address);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $session->set('address', $address);
            return $this->redirectToRoute('check_payment');
        }




        return $this->render('/orders/index.html.twig', ['form' => $form->createView()]);
    }
    /**
     * @Route("/orders/payment", name="check_payment")
     */
    public function checkPayment(Request $request, Session $session)
    {
        $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);
        if (empty($carts)) {
            return $this->redirectToRoute('view_cart');
        }


        $form = $this->createForm(PaymentType::class);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $session->set('paymentType', $data['payment_type']);

            return $this->redirectToRoute('check_complete');
        }




        return $this->render('/orders/payment.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/orders/complete", name="check_complete")
     */

    public function completeOrder(Session $session)
    {

        if ($session->get('paymentType') == null) {

            return $this->redirectToRoute('check_out');
        }
        $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);
        if (empty($carts)) {
            return $this->redirectToRoute('view_cart');
        }

        $paymentType = $session->get('paymentType');
        $address =  $session->get('address');


        return $this->render('/orders/complete.html.twig', ['carts' => $carts, 'payment' => $paymentType, 'address' => $address]);
    }



    public function miniCart()
    {
        $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);

        return $this->render('/orders/minicart.html.twig', ['carts' => $carts]);
    }

    /**
     * @Route("/orders/confirm", name="confirm_order")
     */

    public function confirmOrder(Session $session, Request $r)
    {

        if ($session->get('paymentType') == 'PAYPAL') {

            $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);
            if (empty($carts)) {
                return $this->redirectToRoute('view_cart');
            }
            $total = 0;
            foreach ($carts as $cart) {
                $total = $total + ($cart->getProduct()->getProductPrice() * $cart->getQty());
            }

            $returnUrl = $this->generateUrl('register_order', [], UrlGenerator::ABSOLUTE_URL);
            $cancelUrl = $this->generateUrl('cancel_order', [], UrlGenerator::ABSOLUTE_URL);

            $paypal = new PaypalController;
            $responsed = $paypal->paymentexecute($total, $cancelUrl, $returnUrl);
            // $results = json_encode($responsed->result, JSON_PRETTY_PRINT);

            $arr = $responsed->result;


            $obj = (object)$arr;

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


            if ($paypalid != null) {

                // $this->createOrder($session->get('paymentType'), $session->get('address'), $paypalid);

                $paypalReg = new PaypalModel;
                $em = $this->getDoctrine()->getManager();
                $paypalReg->setPaypalid($paypalid);
                $paypalReg->setUserid($this->getUser()->getId());
                $paypalReg->setHref($capture);
                $em->persist($paypalReg);
                $em->flush();
            }

            return $this->redirect($approve, 301); // capture href paypal approve

            // 1/7/2021 -> paypal intergration need capture page and update status page , add paypal detail in ordermodel



            // return $this->render('orders/paypal.html.twig', ['paypal' => $paypalid]);
        }



        return $this->redirectToRoute('register_order');




        // $session->remove('paymentType');
        // $session->remove('address');
    }

    /**
     * @Route("/orders/register", name="register_order")
     */

    public function registerOrder(Session $session, Request $request)
    {
        $token = $request->query->get('token'); //capture paypal order-id

        $pp = new PaypalController;
        $paypal = $pp->captureOrder($token);

        $arr = $paypal->result;
        $obj = (object)$arr;
        $paypalid = $obj->id;
        $status = $obj->status;

        // print("<pre>" . print_r($obj, true) . "</pre>");
        $purchase_units = $obj->purchase_units;
        // $purchase_units = (object)$pu;
        $amount = $purchase_units[0]->amount;
        $value = $amount->value;
        $currency = $amount->currency_code;
        $payment = $purchase_units[0]->payments;
        $captures = $payment->captures;

        $seller_receivable_breakdown = $captures[0]->seller_receivable_breakdown;
        $paypalfee = $seller_receivable_breakdown->paypal_fee;
        $valuefee = $paypalfee->value;



        $links = $captures[0]->links;

        foreach ($links as $link) {

            if ($link->rel == 'refund') {
                $refundhref = $link->href;
            }
        }
        if ($paypalid == $token) {

            $order = $this->createOrder($session->get('paymentType'), $session->get('address'), $token);
            $paypal = $this->getDoctrine()->getRepository(PaypalModel::class)->findOneBy(['paypalid' => $token]);
            $em = $this->getDoctrine()->getManager();
            $paypal->setStatus($status);
            $paypal->setAmount($value);
            $paypal->setCurrency($currency);
            $paypal->setPaypalfee($valuefee);
            $paypal->setRefundhref($refundhref);
            $em->flush();
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
        return $this->redirectToRoute('check_complete');
    }






    // {

    //     $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);
    //     if (empty($carts)) {
    //         return $this->redirectToRoute('view_cart');
    //     }
    //     $order = $this->createOrder($session->get('paymentType'), $session->get('address'));


    // }
    //function to create an order to database
    private function createOrder($paymentMethod, $address, $token)
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
        $order->setPaymentMethod($paymentMethod);
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
            $orderDetails->setProductImage(($cart->getProduct())->getProductImage());
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
