<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\ProductModel;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Category;
use App\Entity\OrderModel;
use App\Entity\User;
use Hoa\Compiler\Visitor\Dump;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\ImageFile;
use Knp\Component\Pager\PaginatorInterface;

// email controler delete this just for testing
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class IndexController extends AbstractController
{
    private $paginator;
    private $session;

    public function __construct(PaginatorInterface $paginator,SessionInterface  $session)

    {
        $this->paginator = $paginator;
        $this->session = $session;
    }
    /**
     * @Route("/", name="index")
     */
    public function index(Request $request)
    {

        // react dev
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
        //remove above line for prod

        $repository = $this->getDoctrine()->getRepository(ProductModel::class)->findBy([], ['product_name' => 'ASC']);

        $pagination = $this->paginator->paginate(
            $repository, /* query NOT result */
            $request->query->getInt('page', 1),
            8 /*limit per page*/
        );

        return $this->render('index/index.html.twig', [
            'products' => $pagination, 'category' => null, 'active' => null
        ]);

    }

    /**
     * @Route("/about", name="about")
     */
    public function about()
    {
        return $this->render('index/about.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {

        return $this->render('index/contact.html.twig');
    }

    /**
     * @Route("/maintenance", name="maintenance")
     */
    public function baru()
    {

        //  $param = $this->getParameter('data');

        return $this->render('v2/index.html.twig');
    }




    /**
     * @Route("/sdbr", name="side_bar")
     */

    public function sidebars($active = 0)
    {
        $categories = $this->getDoctrine()->getRepository(Category::class)->findAll();
        return $this->render('index/sidebar.html.twig', ['categories' => $categories , 'active' => $active ]);
    }

    /**
     * @Route("/category/{id}", name="link_category")
     */

    public function linkCategory($id, Request $request)
    {
        $repository = $this->getDoctrine()->getRepository(ProductModel::class)->findBy(['category' => $id]);
        $category = $this->getDoctrine()->getRepository(Category::class)->find($id);

        $pagination = $this->paginator->paginate(
            $repository, /* query NOT result */
            $request->query->getInt('page', 1),
            8 /*limit per page*/
        );
        return $this->render('index/index.html.twig', ['products' => $pagination, 'category' => $category , 'active' => $id]);
    }
    /**
     * @Route("/view/{id}", name="app_view")
     */

    public function viewProduct($id)
    {
        $repository = $this->getDoctrine()->getRepository(ProductModel::class)->find($id);

        return $this->render('index/view.html.twig', ['product' => $repository]);
    }


    /**
     * @Route("/email", name="email_me")
     */

     public function emailme(MailerInterface $mailer)
     {

        return null;
        $sendmail = (new Email())
        ->from('replacetr@gmail.com')
        ->to('shaifulazhartalib@gmail.com')
        ->subject('Registration Complete')
        ->html('
   
        <p> Dear valued Customer,,<p/>
        
        <p>Thank you for registering for an account at Shrinkyz.com. Before we can</p>
        <p>activate your account one last step must be taken to complete your</p> 
        <p>registration. </p>
        </br>
        <p>To confirm your registration, please visit this URL:</p>
        <p><a href="#">http://shrinkyz.com/FMfcgxwLsJvLLTNmSGcTClnZdwQjMplg</a></p>
        <p>Note: This email is auto-post mail. Please do not reply.></p>

        ');
    try {
        //code...
        $mailer->send($sendmail);
        return $this->render('request_product/request.html.twig',['message' => 'sucess']);



    } catch (\Throwable $th) {
        return $this->render('request_product/request.html.twig',['message' => 'fail']);
    }

   
    }


    // ->html('
   
    // <p> Welcome,<p/>
    
    // <p>Thank you for registering your email account with us. You ID is CustomerID and email customer@cust.com.</p>
    // <p>To unsubscribe your email please use this link <a href="# ">https://www.shrinyz.com/unsubscribe/user?87d607af26cd51bb887a2414b </a>.</p> 
    // <p>You can access your account area to view orders and change your detail and more at: <a href="# ">https://www.shrinkyz.com/user/profile </a> </p>
    // <p>We look forward to seeing you soon.</p>
    // <p>Note: This email is auto-post mail. Please do not reply</p>
    // <p><a href="# ">Unsubscribe</a></p>

    
    // </p>');

    /**
     * @Route("/test", name="tes")
     */
    public function cookietest()
    {

        // $this->session->set('foo', [
        //                              'name' => 'rotan',
        //                              'kambing' => 'babu'
                                   
        //                                 ] );
        // $test = $this->session->get('foo');
        // $test = $this->session->getId('foo');5118cccedd16639cd30d53de23acfb19

        $tests =$this->session->get('_csrf_token');

        // foreach ($tests as $csrt)
        // {
        //     if($csrt == '_csrf/form'){
        //         $test = $csrt;

        //     }
        // }

        return $this->render('v2/test.html.twig', ['test'=> $tests]);
    }

}
