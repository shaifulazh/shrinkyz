<?php
namespace App\Controller;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Request\ParamFetcher;
use PhpParser\Node\Expr\Cast\Object_;
use stdClass;
use Symfony\Component\HttpFoundation\Response;
use Test;
use App\Entity\Category;
use App\Entity\Subcategory;
use App\Entity\Subtwocategory;

class ApiAdminTestController extends AbstractFOSRestController
{

   
    public function getTestAction(){
        //test testing purpose for getting json file form post Axios of redux
        // $datas = $paramFetcher->get('test');

        // // $obj = (object)$datas;

        // // $data = $obj->data;

        // // $objs = (object)$data;

        // // $test = $objs->address;
        
        // dump($datas);

        // $obj = json_decode (json_encode ($datas), FALSE);

        // // dump($obj);

        // // $object = new stdClass;
        // foreach ($obj as $array) {

        //     dump($array->subcategory);

            // $cat = (Object)$value;
            // if (isset($cat->subcategory))
            // {
            //     $palui = $cat->subcategory;
            //     dump($palui);
            // }
        // }
        
        // dump($object->subcategory);
        $categories = $this->getDoctrine()->getRepository(Category::class)->findCatSubSubtwo();
        // $subcategories =  $this->getDoctrine()->getRepository(Subcategory::class)->findAll();
        // $subtwocategories = $this->getDoctrine()->getRepository(Subtwocategory::class)->findAll();

        // $merged = (object) array_merge((array) $categories, (array) $subcategories, (array) $subtwocategories);
         if (!count($categories)){
            $categories = $this->getDoctrine()->getRepository(Category::class)->findCatSub();

            if (!count($categories)){
                $categories = $this->getDoctrine()->getRepository(Category::class)->findAll();
    
                
            }
        }       
        dump($categories);

   


        return $this->view($categories, Response::HTTP_OK);
    }

    



}
