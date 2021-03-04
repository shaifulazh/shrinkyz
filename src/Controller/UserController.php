<?php

namespace App\Controller;

use App\DomainModel\AddProductToCart;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use App\Entity\ProductModel;
use App\Entity\CartModel;
use App\Form\ProductModelType;
use App\Entity\OrderDetails;
use App\Entity\OrderModel;
use App\Entity\User;
use App\Form\ChangePassType;
use App\Form\RequestProductType;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use App\Security\EmailVerifier;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class UserController extends AbstractController
{

    private $addProductToCart;
    public function __construct(AddProductToCart $addProductToCart)
    {
        $this->addProductToCart = $addProductToCart;
    }


    /**
     * @Route("/cart/{id}", name="add_cart")
     * Method({"POST","GET"})
     */
    public function addCart($id)
    {

        $this->denyAccessUnlessGranted('ROLE_USER');

        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $product = $em->getRepository(ProductModel::class)->find($id);

        $this->addProductToCart->execute($product,$user);
        return $this->redirectToRoute('view_cart');


        $carts = $em->getRepository(CartModel::class)->findby(['customer' => $user]);
        $i = 0;
        foreach ($carts as $cart) {

            if ($cart->getProduct() === $product) {
                $qty = $cart->getQty();
                $cart->setQty($qty + 1);
                $em->persist($cart);
                $em->flush();
                return $this->redirectToRoute('view_cart');

                $i++;
            }
        }
        if ($i === 0) {
            $newCart = new CartModel();
            $newCart->setQty(1);
            $newCart->setCustomer($user);
            $newCart->setProduct($product);
            $em->persist($newCart);
            $em->flush();

            return $this->redirectToRoute('view_cart');
        }
    }

    /**
     * @Route("/viewcart" , name="view_cart")
     */
    public function cartView(Request $request)
    {

        
        $user = $this->getUser();
        $carts = $this->getDoctrine()->getRepository(CartModel::class)->findby(['customer' => $user]);
        $i = 0;
        $form[] = null;
        foreach ($carts as $cart) {

            $form[$i] = $this->createFormBuilder()
                ->add('update', IntegerType::class)
                ->add('save', SubmitType::class)
                ->getForm()->createView();
            $i++;
        }



        return $this->render('user/cart.html.twig', ['products' => $carts, 'form' => $form]);
    }

    /**
     * @Route("/cartremove/{id}" , name="remove_cart")
     */
    public function remove($id)
    {

        $em = $this->getDoctrine()->getManager();
        $carts = $em->getRepository(CartModel::class)->findby(['customer' => $this->getUser()]);
        foreach ($carts as $cart) {

            if ($cart->getProduct()->getId() == $id) {
                $em->remove($cart);
                $em->flush();
            }
        }
        return $this->redirectToRoute('view_cart');
    }

    /**
     * @Route("/update/{id}" , name="update_cart")
     */
    public function updateCart($id, Request $request)
    {
        $form = $request->query->get('form');
        $update = $form['update'];
        $em = $this->getDoctrine()->getManager();
        $carts = $em->getRepository(CartModel::class)->findby(['customer' => $this->getUser()]);
        foreach ($carts as $cart) {

            if ($cart->getProduct()->getId() == $id) {
                if ($update < 1) {
                    $em->remove($cart);
                    $em->flush();
                } else {
                    $cart->setQty($update);
                    $em->persist($cart);
                    $em->flush();
                }
            }
        }
        return $this->redirectToRoute('view_cart');
    }
    //this is for cart

    /**
     * @Route("/x" , name="x_cart")
     */
    public function cartNote()
    {
        $cart = $this->getDoctrine()->getRepository(CartModel::class)->findby(['customer' => $this->getUser()]);
        $s = count($cart);
        return $this->render('notice.html.twig', ['super' => $s]);
    }

    /**
     * @Route("/orders", name="orders")
     */
    public function placeOrder()
    {
        $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);

        if (empty($carts)) {
            $this->addFlash('warning', 'Cart Empty');
            return $this->redirectToRoute('view_cart');
        }

        $notEnoughStock = 0;
        //check cart if stock is enough
        foreach ($carts as $cart) {
            if (($cart->getProduct()->getProductStock() - $cart->getQty()) < 0) {
                $notEnoughStock += 1;
            }
        }

        if ($notEnoughStock === 0) {
            return $this->redirectToRoute('check_out');
        } else {
            $this->addFlash('warning', 'Sorry we dont have enough Stock');
            return $this->redirectToRoute('view_cart');
        }
        $this->addFlash('warning', 'Something went wrong');
        return $this->redirectToRoute('view_cart');
    }


    /**
     * @Route("/profile" , name="user_profile")
     */
    public function userProfile()
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $user = $this->getUser();
        return $this->render('user/profile.html.twig', ['user' => $user]);
    }


    /**
     * @Route("/new_verification" , name="new_verification")
     */
    public function userVerificationProfile(EmailVerifier $emailVerifier)
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $user = $this->getUser();

        if($user->isVerified())
        {

            return $this->render('user/profile.html.twig', ['user' => $user]);
        }
        else{

            $emailVerifier->sendEmailConfirmation('app_verify_email', $user,
            (new TemplatedEmail())
                ->from(new Address($this->getParameter('webemail'), $this->getParameter('webemailname')))
                ->to($user->getEmail())
                ->subject('Please Confirm your Email')
                ->htmlTemplate('registration/confirmation_email.html.twig')
            );
            
            $this->addFlash('success', 'U have Register Success. A link has been sent to your '. $user->getEmail() .'. Please Verified Your email to confirm registration. Link will expired in 30 minutes.');
                
            return $this->render('user/profile.html.twig', ['user' => $user]);

        }



    }

    /**
     * @Route("/edit_profile" , name="edit_profile")
     */
    public function editProfile(Request $request)
    {
        $form = $this->createFormBuilder()
        ->add('firstname')
        ->add('lastname')
        ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser()->getId());
            $data = $form->getData();
            $user->setFirstname($data['firstname']);
            $user->setLastname($data['lastname']);
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();
            // dump($user);

            return $this->redirectToRoute('user_profile');
        }

        return $this->render('user/editProfile.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/password_change" , name="edit_password")
     */

    public function changeUserPasswordProfile(Request $request, UserPasswordEncoderInterface $passenc){

        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $form = $this->createForm(ChangePassType::class);


        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $test =  $passenc->isPasswordValid($this->getUser(),$form->get('oldPassword')->getData() );
            if($test){
                $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser()->getId());
                $newpassword = $passenc->encodePassword(
                    $user,
                    $form->get('newPassword')->getData()
                );
                $user->setPassword($newpassword);
                $em = $this->getDoctrine()->getManager();
                $em->persist($user);
                $em->flush();
                $this->addFlash('success', 'Password Change. Next Login Require new password');
                return $this->redirectToRoute('user_profile');
            }
            $this->addFlash('warning', 'Old password does not match');
        }
        return $this->render('user/changepwd.html.twig', ['form' => $form->createView()]);

    }

    /**
     * @Route("/requestprod" , name="req_prod")
     */

     public function request_product(Request $request, MailerInterface $mailer )
        {
        $form = $this->createForm(RequestProductType::class);
         
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            
            $email = $form->get('email')->getData();

            $product = $this->getDoctrine()->getRepository(ProductModel::class)->find($form->get('product')->getData());

            
            $email = (new Email())
                ->from($this->getParameter('webemail'))
                ->to($this->getParameter('requestemail'))
                ->subject('Special Request For Shrinkyz')
                ->html('<p>There is new Request from customer !!</p><p> Email : ' .$email .' </p> <p> Requested product : 
                    '. $product->getProductName() .' </p> 
                    <p>Notes : this is automated mail, do not reply</p>');
            try {
                //code...
                $this->mailer->send($email);
            } catch (\Throwable $th) {
                
            }
            

            }

        return $this->render('request_product/email_request.html.twig',['form'=> $form->createView()]);
     }


    
}
