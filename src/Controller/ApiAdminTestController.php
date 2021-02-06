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

class ApiAdminTestController extends AbstractFOSRestController
{

    /**
     * @Rest\RequestParam(name="test", description="test test", nullable=false)
     * 
     * @param ParamFetcher $paramFetcher
     */
    public function postTestAction(ParamFetcher $paramFetcher){
        //test testing purpose for getting json file form post Axios of redux
        $datas = $paramFetcher->get('test');

        // $obj = (object)$datas;

        // $data = $obj->data;

        // $objs = (object)$data;

        // $test = $objs->address;
        
        dump($datas);

        $obj = json_decode (json_encode ($datas), FALSE);

        dump($obj);

        // $object = new stdClass;
        foreach ($obj as $array) {

            dump($array->subcategory);

            // $cat = (Object)$value;
            // if (isset($cat->subcategory))
            // {
            //     $palui = $cat->subcategory;
            //     dump($palui);
            // }
        }
        
        // dump($object->subcategory);

   


        return $this->view($datas, Response::HTTP_OK);
    }

    



}
