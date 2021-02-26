<?php

namespace App\Controller;

use App\Entity\Country;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class TestController extends AbstractController
{
 
    /**
     * @Route("/poscode/", name="poscode")
     */
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

}

