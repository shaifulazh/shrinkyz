<?php

namespace App\Controller;

use App\DomainModel\CartOperation;
use App\DomainModel\PosLajuClient;
use App\Entity\AddressModel;
use App\Entity\CartModel;
use App\Entity\CheckOutData;
use App\Entity\ProductModel;
use App\Form\AddressModelType;
use App\Form\PaymentType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Annotation\Route;

class ShippingController extends AbstractController
{
    private $cartOperation;
    private $posLajuClient;
    public function __construct(CartOperation $cartOperation,PosLajuClient $posLajuClient)
    {
        $this->cartOperation = $cartOperation;
        $this->posLajuClient = $posLajuClient;
    }

    /**
     * @Route("/shrinkyz", name="chekingout")
     * 
     */

    public function user_is_cheking_out(Request $request){

        $carts = $this->cartOperation->getProductFromCart($this->getUser());
        if (!$carts) {

            return $this->redirectToRoute('view_cart');
        }

        $address = $this->getDoctrine()->getRepository(AddressModel::class)->findOneByUser($this->getUser()->getId());

        if(!$address)
        {
            $address = new AddressModel();
        }

        $form = $this->createForm(AddressModelType::class,$address);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $data = $form->getData();

            $address->setCountry($data->getCountrydata()->getCountryname());

            $address->setUser($this->getUser());

            $this->getDoctrine()->getManager()->persist($address);

            $this->getDoctrine()->getManager()->flush();
        
            return $this->redirectToRoute('customer_pay');

        }

        return $this->render('/orders/index.html.twig', ['form' => $form->createView()]);

    }

    /**
     * @Route("/custpay", name="customer_pay")
     */

    public function customer_doing_payment(Request $request, Session $session){
        $carts = $this->cartOperation->getProductFromCart($this->getUser());
        if (!$carts) {
            return $this->redirectToRoute('view_cart');
        }
        $em = $this->getDoctrine()->getManager();

        $address = $em->getRepository(AddressModel::class)->findOneBy(['user'=> $this->getUser()]);
        $countrycode = $address->getCountryData()->getCountrycode();

        $weight = $this->count_weight_package($carts);
        if ($weight>2)
            {
                $this->addFlash('warning', 'Too heavy to post');
                return $this->redirectToRoute('chekingout');
            }
        if($countrycode === 'MY')
        {

            $postcode = $address->getPostcode();
            
            try {

                $response = $this->posLajuClient->fetchPriceCheck('MY',$postcode,$weight);

                $object = json_decode($response);

                if(!$object)
                {
                    $this->addFlash('warning', 'Pos laju is offline!!');
                    return $this->redirectToRoute('chekingout');
                }

                $shippingprice = $object->data->prices[0]->normal_price;


            } catch (\Throwable $th) {
                $this->addFlash('warning', 'Postcode not Valid');
                return $this->redirectToRoute('chekingout');
            }

        }

        else{
            
            switch ($weight) {
                case $weight < 0.250:
                    $shippingprice = $address->getCountrydata()->getSmallpacket250g();
                    break;

                case  $weight < 0.5 :
                    $shippingprice = $address->getCountrydata()->getSmallpacket500g();
                    break;

                case $weight < 1:
                    $shippingprice = $address->getCountrydata()->getSmallpacket1kg();

                    break;
                case $weight < 1.5:
                    $shippingprice = $address->getCountrydata()->getSmallpacket1500g();
                    break;

                case $weight < 2:
                    $shippingprice = $address->getCountrydata()->getSmallpacket2g();
                    break;
            }
           
        }


        $shippingprice = $shippingprice + $shippingprice*3.9/100 + 2; //3.9% paypal fee + 2 flat fee


        $checkout = $em->getRepository(CheckOutData::class)->findOneBy(['user'=>$this->getUser()]);

        if(!$checkout)
        {

            $checkout= new CheckOutData;
        }
       
        $checkout->setUser($this->getUser());

        $checkout->setShipping($shippingprice);

        $totalprice = $this->get_total_from_cart($carts);

        $checkout->setTotal($totalprice);

        $checkout->setFinaltotal($totalprice + $shippingprice);

        $em->persist($checkout);

        $em->flush();

        $referenceId = uniqid();

        $payment = [
           
                'shipping' => $shippingprice,
                'total' => $totalprice,
                'finaltotal' => ($totalprice + $shippingprice),
                'reference_id'=> $referenceId
           
        ];

        $session->set('payment', $payment);


        

        return $this->render('/orders/payment.html.twig', [
            'products' => $carts , 
            'shippingprice' => $shippingprice, 
            ]);

    }

    public function count_weight_package($carts)
    {
        $quantity = 0;
        foreach ($carts as $cart) {

            $quantity = $quantity + $cart->getQty();
        }
        $weight_distribution_per_item = 0.01;//in kg

        $weight = $quantity * $weight_distribution_per_item;

        return $weight;

    }

    public function get_total_from_cart($carts)
    {
        
            $total = 0;
            foreach ($carts as $cart) {

               $total = $total +  ($cart->getProduct()->getProductPrice() * $cart->getQty());
            }
            return $total;
       
    }
}