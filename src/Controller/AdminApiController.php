<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Request\ParamFetcher;
use App\Entity\ProductModel;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use App\Entity\OrderModel;
use App\Entity\OrderDetails;
use App\Entity\Category;
use App\Entity\ImageFile;
use App\Entity\User;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;

use Knp\Component\Pager\PaginatorInterface;
use Doctrine\ORM\EntityManagerInterface;

class AdminApiController extends AbstractFOSRestController
{
    private $paginator;
    private $em;
    public function __construct(PaginatorInterface $paginationInterface, EntityManagerInterface $em)
    {
        $this->paginator = $paginationInterface;
        $this->em = $em;
    }

    /**
     * @Rest\QueryParam(name="year", default="2019", description="year of data", nullable=false)
     * @param ParamFetcher $paramFetcher
     */

    public function getDashboardAction(ParamFetcher $paramFetcher)
    {
        $year = $paramFetcher->get('year');
        $status = "COMPLETED";
        //$sumTotal = $this->getDoctrine()->getRepository(OrderModel::class)->findSum();
        $users = $this->getDoctrine()->getRepository(User::class)->findByRole('ROLE_USER');
        $q = $this->em->getRepository(ProductModel::class)->findAll();
        $products = count($q);

        $querysumTotal = $this->em->createQuery('
        SELECT 
        SUM(a.total)
        FROM App\Entity\OrderModel a 
        WHERE a.status = :status');
        $querysumTotal->setParameter('status', $status);
        $sumTotal = $querysumTotal->getSingleScalarResult();

        $sumquery =  $this->em->createQuery('
        SELECT 
        SUM(a.total)
        FROM App\Entity\OrderModel a 
        WHERE YEAR(a.createdAt) = :year AND a.status = :status');
        $sumquery->setParameters(array(
        'year'=> $year,
        'status' => $status
    ));
        $sum = $sumquery->getSingleScalarResult();
        // 
        // if($sumTotal == NULL){

        //     $sumTotal = "10";

        // }


        for ($i = 1; $i < 13; $i++) {

            $query =  $this->em->createQuery('
            SELECT 
            SUM(a.total) AS sum
            FROM App\Entity\OrderModel a 
            WHERE YEAR(a.createdAt) = :year AND MONTH(a.createdAt) = :month AND a.status = :status');
            $query->setParameters(array(
                'year' => $year,
                'month' => $i,
                'status' => $status

            ));

            $month[$i] = ($query->getSingleScalarResult() !== null) ? $query->getSingleResult() : 0;
        }

        for ($i = 1; $i < 13; $i++) {

            $queryCount =  $this->em->createQuery('
            SELECT MONTH(a.createdAt) AS month, 
            YEAR(a.createdAt) AS year
            FROM App\Entity\OrderModel a 
            WHERE YEAR(a.createdAt) = :year AND MONTH(a.createdAt) = :month AND a.status = :status');
            $queryCount->setParameters(array(
                'year' => $year,
                'month' => $i,
                'status' => $status


            ));
            $monthCount[$i] = $queryCount->getResult();
            $count[$i] = count($monthCount[$i]);
        }


        $msg = [
            'users' => count($users),
            'total_sum' => $sumTotal,
            "sum" => [$year => $sum],
            'products' => $products,
            'count' => $count,
            'month' => $month
        ];

        return $this->view($msg, Response::HTTP_OK);
    }

    public function getOrderDetailsAction(OrderDetails $orderDetails)
    {
        return $this->view($orderDetails, Response::HTTP_OK);
    }


    public function getOrderAction()
    {

        // Query manual using doctrine orm DESC for order model
        $query =  $this->em->createQuery('
        SELECT 
        a
        FROM App\Entity\OrderModel a 
        
        ORDER BY a.createdAt DESC');
        $data = $query->getResult();

        return $this->view($data, Response::HTTP_OK);
    }

    /**
     * @Rest\RequestParam(name="status", description="order status", nullable=false)
     * @param ParamFetcher $paramFetcher
     */
    public function statusOrderAction(OrderModel $orderModel, ParamFetcher $paramFetcher)
    {

        $status = $paramFetcher->get('status');
        $orderModel->setStatus($status);
        $orderModel->updatedAt();
        $em = $this->getDoctrine()->getManager();
        $em->persist($orderModel);
        $em->flush();

        return $this->view(null, Response::HTTP_NO_CONTENT);
    }

    public function deleteOrderAction(OrderModel $orderModel)
    {
        if ($orderModel) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($orderModel);
            $em->flush();

            return $this->view(null, Response::HTTP_NO_CONTENT);
        }
        return $this->view(['messagge ' => 'something went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @param ParamFetcher $paramFetcher
     */
    public function getCustomerAction(ParamFetcher $paramFetcher)
    {

        $roles = "ROLE_USER";
        $query =  $this->em->createQuery('
        SELECT 
        a.id,a.email,a.createdAt,a.firstname,a.lastname
        FROM App\Entity\User a WHERE a.roles like :roles 
        ORDER BY a.createdAt DESC');
        $query->setParameters(array(
            'roles' => '%' . $roles . '%'

        ));
        $arr = $query->getResult();

        $data = [
            'obj'=> $arr
        ];

        return $this->view($data, Response::HTTP_OK);
    }

    public function getAdminAction()
    {
        $user = $this->getDoctrine()->getRepository(User::class)->findByRole('ROLE_ADMIN');
        $data = ['obj'=>$user];
        return $this->view($data, Response::HTTP_OK);
    }
}
