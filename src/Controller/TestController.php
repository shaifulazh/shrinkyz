<?php

namespace App\Controller;

use App\DomainModel\CountryData;
use App\DomainModel\PosLajuClient;
use App\Entity\Country;
use stdClass;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;

use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ArrayDenormalizer;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;


class TestController extends AbstractController
{
    private $countryData;
    private $posLajuClient;
    public function __construct(CountryData $countryData, PosLajuClient $posLajuClient)
    {
      $this->countryData=$countryData;
      $this->posLajuClient = $posLajuClient;

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
     $i=0;
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
    
    foreach ($country as $c ) {
      
          if($c->getParcel1kg() === null){
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

     /**
     * @Route("/country", name="coutny")
     */
    public function labasudatukar()
    {
      $test = file_get_contents($this->getParameter('localdir') . '/country.csv');
      $array = array_map("str_getcsv", explode("\n", $test));
      
      foreach ($array as $key => $value) {
         $countrylist[] = [
          'countryname' => $value[0],
          'countrycode'=> $value[1]];
      }

      $em = $this->getDoctrine()->getManager();

      $database_country = $em->getRepository(Country::class)->findBy([], ['countryname'=> 'ASC']);

      foreach ($database_country  as $one_country) {
          foreach ($countrylist as $key => $value) {
            if($one_country->getCountrycode() == $value['countrycode']){
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
    }

}

