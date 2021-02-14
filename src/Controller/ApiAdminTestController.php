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
use App\Entity\VisitorOfPage;

class ApiAdminTestController extends AbstractFOSRestController
{

   
    public function getTestAction(){
        $data = $this->getDoctrine()->getRepository(VisitorOfPage::class)->findAll();

        return $this->view($data, Response::HTTP_OK);
    }

    



}
