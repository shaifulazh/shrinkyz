<?php

namespace App\Controller;

use App\DomainModel\CountryData;
use App\DomainModel\EmailOperation;
use App\DomainModel\PosLajuClient;
use App\DomainModel\SerializerOperation;
use App\Entity\CartModel;
use App\Entity\Category;
use App\Entity\Country;
use App\Entity\OrderDetails;
use App\Entity\OrderJson;
use App\Entity\OrderModel;
use App\Entity\ProductModel;
use App\Entity\User;
use App\Kernel;
use Doctrine\ORM\EntityManagerInterface;
use PhpParser\Node\Stmt\Foreach_;
use stdClass;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;

use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ArrayDenormalizer;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\NameConverter\AdvancedNameConverterInterface;


class TestController extends AbstractController
{
  private $countryData;
  public function __construct(CountryData $countryData)
  {
    $this->countryData = $countryData;
  }


  public function cookietest(Request $request)
  {
    return null;


    $em = $this->getDoctrine()->getManager();

    $country = $em->getRepository(Country::class)->findAll();

    $data = [

      'Algeria', 'Azores', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Chad', 'Cyprus', 'Denmark', 'Egypt', 'Estonia', 'Faroe Islands',
      'Fiji', 'Finland', 'France', 'Germany', 'Hungary', 'Iran', 'Jordan',
      'Kosovo', 'Kuwait', 'Latvia', 'Lebanon', 'Lesotho', 'Libya', 'Lithuania', 'Macedonia', 'Madeira (Portugal)', 'Malta', 'Mauritius', 'Moldova',
      'Montenegro', 'Morocco', 'Namibia', 'North Korea', 'Norway', 'Palau', 'Poland', 'Portugal', 'Puerto Rico', 'Romania', 'Serbia', 'Slovenia',
      'South Africa', 'Spain', 'Sudan', 'Swaziland',
      'Sweden', 'Switzerland', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Uganda', 'Ukraine', 'Wallis and Futuna Islands', 'Zambia'
    ];
    dump(count($data));
    $i = 0;
    //  foreach ($country as $c ) {
    //   foreach ($data as $each ) {

    //     if($c->getCountryname() === $each){

    //       $c->setParcel1kg(123.50);
    //       $c->setParcelext500g(21.50);
    //       $em->persist($c);
    //       $em->flush();
    //       dump($c);
    //       $i++;
    //     }
    //   }
    //  }

    foreach ($country as $c) {

      if ($c->getParcel1kg() === null) {
        $c->setParcel1kg(143.50);
        $c->setParcelext500g(25.50);
        $em->persist($c);
        $em->flush();
        dump($c);
        $i++;
      }
    }


    dump($i);
    return $this->render('v2/test.html.twig');
  }


  public function labasudatukar()
  {
    $test = file_get_contents($this->getParameter('localdir') . '/country.csv');
    $array = array_map("str_getcsv", explode("\n", $test));

    foreach ($array as $key => $value) {
      $countrylist[] = [
        'countryname' => $value[0],
        'countrycode' => $value[1]
      ];
    }

    $em = $this->getDoctrine()->getManager();

    $database_country = $em->getRepository(Country::class)->findBy([], ['countryname' => 'ASC']);

    foreach ($database_country  as $one_country) {
      foreach ($countrylist as $key => $value) {
        if ($one_country->getCountrycode() == $value['countrycode']) {
          $country[] = $one_country;
        }
      }
    }

    $json = json_encode($database_country);

    dd((json_encode($json)));

    // foreach ($database_country as $countryone) {
    //   $sorted[] = [
    //     'countryname' => $countryone->getCountryname(),
    //     'countrycode' => $countryone->getCountrycode()
    //   ];
    // }





    // foreach ($countrylist as $key => $value) {
    //   $list2[] = $value['countrycode'] ;
    // }
    // foreach ($country as $key => $value) {
    //   $list3[] = $value['countrycode'] ;
    // }

    // dd(array_diff($list2,$list3),$countrylist[37],$countrylist[172]);

    $encoders = [new XmlEncoder(), new JsonEncoder()];
    $normalizers = [new ObjectNormalizer()];

    $serializer = new Serializer($normalizers, $encoders);

    $jsonContent = $serializer->serialize($country, 'json');
    file_put_contents($this->getParameter('localdir') . '/country_paypal.json', $jsonContent);
    dd($jsonContent);
  }

  /**
   * @Route("/orderview", name="coutny")
   */
  public function order_display()
  {

    $user = $this->getUser();

    $order = $this->getDoctrine()->getRepository(OrderModel::class)->findOneBy(['user' => $user]);

    $orderdetails = $this->getDoctrine()->getRepository(OrderDetails::class)->findBy(['orders' => $order]);

    $admin = $this->getDoctrine()->getRepository(User::class)->findByRole('ROLE_ADMIN');

    dump($orderdetails);

    return $this->render('orders/complete_order.html.twig', [
      'order' => $order,
      'orderdetails' => $orderdetails,
      'address' => $order->getAddress(),
      'paypal' => $order->getPaypal()

    ]);
  }



  /**
   * @Route("/testa", name="testa")
   */
  public function testa(EmailOperation $email, EntityManagerInterface $EntiyManager)
  {
    $s = '2021-02-28T14:46:36Z';
    $date = date('Y-m-d H:i:s', strtotime($s));
    $d = date_create_from_format('Y-m-d H:i:s', $date);

    $user = $this->getUser();

    $order = $this->getDoctrine()->getRepository(OrderModel::class)->findOneBy(['user' => $user]);

    $roles = "ROLE_ADMIN";
    $query =  $EntiyManager->createQuery('
        SELECT 
        a.id,a.email,a.createdAt,a.roles,a.firstname,a.lastname
        FROM App\Entity\User a WHERE a.roles like :roles 
        ORDER BY a.createdAt DESC');
    $query->setParameters(array(
      'roles' => '%' . $roles . '%'

    ));

    $admins = $query->getResult();
    $test = $this->getDoctrine()->getRepository(User::class)->findByRole($roles);
    dd($test);

    foreach ($admins as $admin) {
      $email->sendAdminPaymentOrder($admin, $order, $user);
    }





    return $this->render('email/test.html.twig', ['time' => $d]);
  }


  /**
   * @Route("/findcart", name="tetes")
   */

  public function sdlfjkhasd()
  {
    $encoder = new JsonEncoder();
    $defaultContext = [
      AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
        return $object->getId();
      },
    ];
    $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

    $serializer = new Serializer([$normalizer], [$encoder]);

    $carts = $this->getDoctrine()->getRepository(CartModel::class)->findBy(['customer' => $this->getUser()]);
    foreach ($carts as $key) {
      $serial = new SerializerOperation;
      $prod = $key->getProduct();
      $details = $prod->getProductDetailss();
      $array[] = [
        'details' => $serial->details_toArray($details)
      ];
      $categories = $prod->getCategories();
      $array[] =[
        'categories' => $serial->categories_toArray($categories)
    ];

      $subcategories = $prod->getSubcategories();
      $array[] = [
        'subcategories' =>
        $serial->subcategories_toArray($subcategories)
      ];


      $subtwocategories = $prod->getSubtwocategories();
      $array[] = [
        'subtwocategories' =>
        $serial->subtwocategoris_toArray($subtwocategories)
      ];
      $arr[] = $array;
      unset($array);
    }
    // $jsondata = new OrderJson;
    // $jsondata->setData($array);
    // $em = $this->getDoctrine()->getManager();
    // $em->persist($jsondata);
    // $em->flush();
    // dd($jsondata);

    // unset($array);
    dd($arr);

  }

   /**
   * @Route("/jsondata", methods="GET")
   */
  public function jsonsdatassssss (){
    $em = $this->getDoctrine()->getManager();

    

    $data = $em->getRepository(User::class)->findByRole('ROLE_ADMIN');
    foreach($data as $ss){
      dd($ss->getEmail());
    }
    $serial = new SerializerOperation;

    $a = $serial->user_toArray($data);
    
    $response = new JsonResponse();
    $b = [
      'data'=> $a
    ];

    return $response->setData($b);
    
  }

}
