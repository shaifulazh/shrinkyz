<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\ProductModel;
use Knp\Component\Pager\PaginatorInterface;

class SearchBarController extends AbstractController
{
    private $paginator;

    public function __construct(PaginatorInterface $paginator)

    {
        $this->paginator = $paginator;
    }
    /**
     * @Route("/search/bar", name="search_bar")
     */
    public function index()
    {

        $form = $this->createFormBuilder()
            ->add('text')
            ->add('search', SubmitType::class)
            ->getForm();
        return $this->render('search_bar/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/searching" , name="searching")
     */
    public function searching(Request $request)
    {
        $form = $request->request->get('form');

        $repository = $this->getDoctrine()->getRepository(ProductModel::class)->findByLike($form['text']);
        $pagination = $this->paginator->paginate(
            $repository, /* query NOT result */
            $request->query->getInt('page', 1),
            8 /*limit per page*/
        );

        return $this->render('index/index.html.twig', [
            'products' => $pagination, 'category' => null, 'active' => null
        ]);
    }
}
