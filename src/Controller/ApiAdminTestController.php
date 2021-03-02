<?php
namespace App\Controller;

use App\DomainModel\PosLajuClient;
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
use App\Entity\Country;
use App\Entity\Subcategory;
use App\Entity\Subtwocategory;
use App\Entity\VisitorOfPage;

class ApiAdminTestController extends AbstractFOSRestController
{
    private $postlaju;
    public function __construct(PosLajuClient $postlaju)
    {   
        $this->postlaju = $postlaju;
    }

    public function getTestAction(){
        $arr = $this->getDoctrine()->getRepository(VisitorOfPage::class)->findAll();
        $data = [
            'data'=>$arr
        ];

        return $this->view($data, Response::HTTP_OK);
    }

    /**
     * @Rest\RequestParam(name="country", description="country code", nullable=false)
     * 
     * @Rest\RequestParam(name="postcode", description="postcode code", nullable=false)
     * 
     * @Rest\RequestParam(name="weight", description="country code", nullable=false)
     * 
     * @param ParamFetcher $paramFetcher
     */

    public function postPoslajuAction(ParamFetcher $paramFetcher){

        $country = $paramFetcher->get('country');

        $postcode = $paramFetcher->get('postcode');

        $weight = $paramFetcher->get('weight');

        $response = $this->postlaju->fetchPriceCheck($country,$postcode,$weight);
        $json = json_decode($response);
        $data = [
            'normal_price' => $json->data->prices[0]->normal_price,
        ];

        return $this->view($data, Response::HTTP_OK);
    }


    public function getCountryAction()
    {
        $em = $this->getDoctrine()->getManager();
        $country = $em->getRepository(Country::class)->findAll();
        return $this->view($country, Response::HTTP_OK);
    }

    



}
