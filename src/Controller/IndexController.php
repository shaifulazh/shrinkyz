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
use App\Entity\Subcategory;
use App\Entity\Subtwocategory;
use App\Entity\VisitorOfPage;
use App\Form\TestType;
use DoctrineExtensions\Query\Mysql\Now;
use Knp\Component\Pager\PaginatorInterface;

// email controler delete this just for testing
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Validator\Constraints\Ip;

class IndexController extends AbstractController
{
    private $paginator;
    private $session;

    public function __construct(PaginatorInterface $paginator,SessionInterface  $session)

    {
        $this->paginator = $paginator;
        $this->session = $session;
    }

    public function get_client_ip() {
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if(isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }




    
    /**
     * @Route("/", name="app_home")
     */
    public function index(Request $request)
    {
   
        // return $this->redirectToRoute('dashboard');
        //remove above line for prod $user = file_get_contents('http://ipinfo.io/'. $_SERVER['REMOTE_ADDR']. '?token=ec19519fb4a63d');

            //this function to register every person who visited homepage using database
            try {

                dump($this->get_client_ip());
                $user = $this->getDoctrine()->getRepository(VisitorOfPage::class)->findOneBy(['ip'=> $request->getClientIp()]);
                if(!$user){
                    $newuser = new VisitorOfPage;
                    $data = file_get_contents('https://geolocation-db.com/json/'. $this->getParameter('geotoken') .'/'. $request->getClientIp() );
                    $json = json_decode($data, true);
                    if ( $json['IPv4']){
             
                        $newuser->setIp($request->getClientIp());
                    }
                    else{
                        $newuser->setIp($request->getClientIp());
                    }
                    // $newuser->createdAt();
                    $newuser->setCountry($json['country_name']);
                    $newuser->setState($json['state']);
                    $newuser->setLongitute($json['longitude']);
                    $newuser->setLatitude($json['latitude']);
                    $newuser->setPostal($json['postal']);
                    $newuser->setCity($json['city']);
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($newuser);
                    $em->flush();

                }else{
                    $user->updatedAt();
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($user);
                    $em->flush(); 
                }

                
                
            } catch (\Throwable $th) {
                //throw $th;
                // dump($th);
            }

       

        $repository = $this->getDoctrine()->getRepository(ProductModel::class)->findBy([], ['view' => 'DESC']);

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
        // $repository = $this->getDoctrine()->getRepository(ProductModel::class)->findBy(['category' => $id]);
        
        if(is_numeric($id))
        {
            
            $category = $this->getDoctrine()->getRepository(Category::class)->find($id);
            $repository = $this->getDoctrine()->getRepository(ProductModel::class)->findCategoryById($id);
            $subcategory = $this->getDoctrine()->getRepository(Subcategory::class)->findByCategory($id);
           

            
            // dump($subtwocategory);
            
            
            $pagination = $this->paginator->paginate(
                $repository, /* query NOT result */
                $request->query->getInt('page', 1),
                8 /*limit per page*/
            );
            return $this->render('index/index.html.twig',[
                'products' => $pagination,
                'category' => $category , 
                'subcategories'=> $subcategory ,
                'active' => $id,
                ]);
            }
            
        }
        
        /**
         * @Route("/subtwo/{id}", name="subtwocategories_link")
         */
        
        public function subtwolink($id, Request $request)
        {
            if(is_numeric($id)){

                $repository = $this->getDoctrine()->getRepository(ProductModel::class)->findBySubtwocategoryId($id);
                $cat = $this->getDoctrine()->getRepository(Category::class)->findOneBySubtwocategoryId($id);
                // dump($cat);
                
                
            }
            $pagination = $this->paginator->paginate(
                $repository, /* query NOT result */
                $request->query->getInt('page', 1),
                8 /*limit per page*/
            );
            return $this->render('index/subtwocategory.html.twig',[
                'products' => $pagination,
                'active' => $cat->getId(),
             
                ]);
            
        }

        /**
         * @Route("/subcat/{id}", name="subcategories_link")
         */
        
        public function subcatlink($id, Request $request)
        {
            if(is_numeric($id)){
                
                $repository = $this->getDoctrine()->getRepository(ProductModel::class)->findBySubcategoryId($id);
                $subtwocategory = $this->getDoctrine()->getRepository(Subtwocategory::class)->findBySubCategory($id);
                $cat = $this->getDoctrine()->getRepository(Category::class)->findOneBySubcategoryId($id);
                

                
            }
            $pagination = $this->paginator->paginate(
                $repository, /* query NOT result */
                $request->query->getInt('page', 1),
                8 /*limit per page*/
            );
            return $this->render('index/subcategory.html.twig',[
                'products' => $pagination,
                'subtwocategories'=> $subtwocategory ,
                'active' => $cat->getId(),
                ]);
            
        }
        
        
        
    /**
     * @Route("/view/{id}", name="app_view")
     */

    public function viewProduct($id)
    {
        $repository = $this->getDoctrine()->getRepository(ProductModel::class)->find($id);
        $repository->addView();
        $this->getDoctrine()->getManager()->persist($repository);
        $this->getDoctrine()->getManager()->flush();

        return $this->render('index/view.html.twig', ['product' => $repository]);
    }


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
    public function cookietest(Request $request)
    {

        $form = $this->createForm(TestType::class);


        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

        }


        $tests = $form->get('newPassword')->getData();

       

        return $this->render('v2/test.html.twig',['form' => $form->createView() , 'test' => $tests]);
    }

}
