<?php

namespace App\Controller;

use App\DomainModel\CartOperation;
use App\Entity\AddressModel;
use App\Entity\CartModel;
use App\Form\AddressModelType;
use App\Form\PaymentType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProcessOrderController extends AbstractController
{
    private $cartOperation;
    public function __construct(CartOperation $cartOperation)
    {
        $this->cartOperation = $cartOperation;
    }

    /**
     * @Route("/shrinkyz", name="chekingout")
     * 
     */

    public function user_is_cheking_out(Request $request){

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

    public function customer_doing_payment(Request $request){
        $carts = $this->cartOperation->getProductFromCart($this->getUser());
        if (!$carts) {

            return $this->redirectToRoute('view_cart');
        }



        
        



        return $this->render('/orders/payment.html.twig', ['products' => $carts]);

    }
}