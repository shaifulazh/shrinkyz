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
use App\Entity\ImageFile;
use App\Entity\User;
use App\Entity\ProductDetails;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use App\Entity\Category;
use App\Entity\Subcategory;
use App\Entity\Subtwocategory;
use Doctrine\ORM\EntityManagerInterface;
use PhpParser\Node\Stmt\Switch_;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\Length;

class ApiAdminProductController extends AbstractFOSRestController
{
    private $entityManager;
    private $paginator;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Rest\FileParam(name="image",description="Product Image", nullable=false, image=true)
     * @param ParamFetcher $paramFetcher
     */
    public function postProductImageAction(ParamFetcher $paramFetcher)
    {
        $file = $paramFetcher->get('image');

        if ($file) {
            $filename = md5(uniqid() . time()) . '.' . $file->guessClientExtension();

            $file->move(
                $this->getParameter('image_directory'),
                $filename
            );
            $defaultname = $this->getParameter('image_directory') . '/' . $filename;
            $image = new ImageFile();
            $image->setFilename($filename);
            $image->setDefaultName($defaultname);
            $em = $this->getDoctrine()->getManager();
            $em->persist($image);
            $em->flush();
            $data = [
                'id' => $image->getId(),
                'image' => $image->getFilename()
            ];

            return $this->view($data, Response::HTTP_OK);
        }

        return $this->view(["message" => "error upload image"], Response::HTTP_INTERNAL_SERVER_ERROR);
    }



  //DONE !!! DONT TOUCH THIS
    /**
     * @Rest\RequestParam(name="name", description="product name", nullable=false)
     * 
     * @Rest\RequestParam(name="price", description="product price", nullable=false)
     * 
     * @Rest\RequestParam(name="stock", description="product image", nullable=false)
     * 
     * @Rest\RequestParam(name="desc", description="product stock", nullable=false)
     * 
     * @Rest\RequestParam(name="details", description="product details", nullable=true)
     * 
     * @Rest\RequestParam(name="images", description="product images", nullable=true)
     * 
     * @Rest\RequestParam(name="categories", description="product categories", nullable=true)
     
     * @param ParamFetcher $paramFetcher
     */

    public function postProductAction(ParamFetcher $paramFetcher)
    {
        //add something

        $em = $this->getDoctrine()->getManager();

        
        $product = new ProductModel();
        $product->setProductName($paramFetcher->get('name'));
        $product->setProductPrice($paramFetcher->get('price'));
        $product->setProductStock($paramFetcher->get('stock'));
        $product->setProductDesc($paramFetcher->get('desc'));
        $em->persist($product);
        $em->flush();
        
        $categories = $paramFetcher->get('categories');
        if($categories)
        {
            
            foreach ($categories as $key => $jsoncat ) {
                $objc = (Object)$jsoncat;
                if    ($objc->categoryname)//category
                {
                    
                    if($objc->categoryid)   {
                        $category = $em->getRepository(Category::class)->find($objc->categoryid);
                        $category->addProductModel($product);
                        $em->persist($category);
                        $em->flush();
                    }
                    else{
                        $category = new Category();
                        $category->addProductmodel($product);
                        //category not exist yet                        
                        if ($objc->categoryname){
                            $category->setName($objc->categoryname);
                            $em->persist($category);
                            $em->flush();
                        }
                    }
                }
                //check is subcategory for undefine note:  isset return false is undefine
                if(isset($objc->subcategory))
                {
                    
                    if (count($objc->subcategory))//subcategory
                    {
                        
                        
                        $subcatarr = $objc->subcategory;
                        
                        foreach ($subcatarr as $key => $nonsub)//array of subcategory
                        {
                            $subcategory = (Object)$nonsub;

                            //check is subcategoryname for undefine note:  isset return false is undefine
                            if(isset($subcategory->subcategoryname))
                            {

                                if($subcategory->subcategoryname)//subtwocategory
                                {
                                    
                                    if ($subcategory->subcategoryid)
                                    
                                    {
                                        $subcategoryclass = $em->getRepository(Subcategory::class)->find($subcategory->subcategoryid);
                                        $subcategoryclass->setCategory($category);
                                        $subcategoryclass->addProduct($product);
                                        $em->persist($subcategoryclass);
                                        $em->flush();
                                    }
                                    else
                                    {
                                        $subcategoryclass =  new Subcategory;
                                        $subcategoryclass->setSubcategoryname($subcategory->subcategoryname);
                                        $subcategoryclass->setCategory($category);
                                        $subcategoryclass->addProduct($product);
                                        $em->persist($subcategoryclass);
                                        $em->flush();
                                    }
                                    
                                }
                            }
                                //check is subtwocategory for undefine note:  isset return false is undefine
                                if(isset($subcategory->subtwocategory))
                            {

                                if($subcategory->subtwocategory)
                                {
                                    $subtwoarr = $subcategory->subtwocategory;
                                    foreach ($subtwoarr as $key => $nonsubtwocategory){
                                        $subtwocategory = (Object)$nonsubtwocategory;
                                        //check is subtwocategoryname for underfine note:  isset return false is undefine
                                        if(isset($subtwocategory->subtwocategoryname))
                                        {

                                            if ($subtwocategory->subtwocategoryname)
                                            {
                                                if($subtwocategory->subtwocategoryid)
                                                {
                                                    $subtwocategoryclass = $em->getRepository(Subtwocategory::class)->find($subtwocategory->subtwocategoryid);
                                                    $subtwocategoryclass->addProduct($product);
                                                    $subtwocategoryclass->setSubcategory($subcategoryclass);
                                                    $em->persist($subtwocategoryclass);
                                                    $em->flush();
                                                    
                                                }else{
                                                    
                                                    $subtwocategoryclass = new Subtwocategory;
                                                    $subtwocategoryclass->setSubtwocategoryname($subtwocategory->subtwocategoryname);
                                                    $subtwocategoryclass->addProduct($product);
                                                    $subtwocategoryclass->setSubcategory($subcategoryclass);
                                                    $em->persist($subtwocategoryclass);
                                                    $em->flush();
                                                }
                                            }

                                        }

                                         
                                            
                                    }//foreach subtwocategory end
                                }
                            }
                                
                                
                                
                                
                            
                            
                        }//foreach subcategory end
                    }
                        
                        
                    }
                    
                }//foreach category end
                
                
     
            
        }
        else{
            return $this->view(['message' => 'something went wrong on category'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
        $images = $paramFetcher->get('images');
        if($images){
            foreach ($images as $key => $jsonimage) {
                $objimage = (Object)$jsonimage;
                if($objimage->imageid){
                    $image = $this->getDoctrine()->getRepository(ImageFile::class)->find($objimage->imageid);
                    $image->addProductModel($product);
                    $em->persist($image);
                    $em->flush();
                }
            }
        }
        else{
            return $this->view(['message' => 'something went wrong image'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        
          $details = $paramFetcher->get('details');
        if ($details)
        {      
            
            foreach ($details as $detail) {
                # code...
                $prodetails = new ProductDetails();
                $prodetails->setProduct($product);
                $obj = (Object)$detail; 
                if ($obj->detailname) {
                    # code...
                    $prodetails->setDetailName($obj->detailname);
                }
                if ($obj->datadesc)
                {
                     $prodetails->setDatadesc($obj->datadesc);
                }
                $em->persist($prodetails);
                $em->flush();

                
            }
        }
        else{
            return $this->view(['message' => $details], Response::HTTP_INTERNAL_SERVER_ERROR);
        }



        return $this->view($product, Response::HTTP_OK);
    }



    public function getProductAction(ProductModel $product)
    {

        return $this->view($product, Response::HTTP_OK);
    }

    public function getProductCategoriesAction()
    {       
        // $categories = $this->getDoctrine()->getRepository(Category::class)->findAll();
    
        $categories = $this->getDoctrine()->getRepository(Category::class)->findCatSubSubtwo();
      
            if (!count($categories)){
                $categories = $this->getDoctrine()->getRepository(Category::class)->findCatSub();
    
                if (!count($categories)){
                    $categories = $this->getDoctrine()->getRepository(Category::class)->findAll();
        
                    
                }
            }  

        


        return $this->view($categories, Response::HTTP_OK);
    }

    public function getProductDetailsAction()
    {
        $details = $this->getDoctrine()->getRepository(ProductDetails::class)->findAll();
        return $this->view($details, Response::HTTP_OK);
    }

    public function deleteCategoryAction(Category $category)
    {
        if ($category) {
            $this->entityManager->remove($category);
            $this->entityManager->flush();
            return $this->view(null, Response::HTTP_NO_CONTENT);
        }
        return $this->view(['message' => 'something went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function deleteProductImageAction(ImageFile $imageFile)
    {
        $filesystem = new Filesystem();
        //remove file 
        if ($imageFile) {
            if ($filesystem->exists( $this->getParameter('image_directory')  . '/'. $imageFile->getDefaultName())) {
                try {
                    $filesystem->remove( $this->getParameter('image_directory')  . '/'. $imageFile->getDefaultName());
                } catch (IOExceptionInterface $exception) {
                    return $this->view($exception, Response::HTTP_INTERNAL_SERVER_ERROR);
                }
            }
            $em = $this->getDoctrine()->getManager();
            $em->remove($imageFile);
            $em->flush();

            return $this->view(null, Response::HTTP_NO_CONTENT);
        }
        return $this->view(['message' => 'something went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }


    public function getProductsAction()
    {
        // Query manual using doctrine orm DESC for order model
        $query =  $this->entityManager->createQuery('
         SELECT 
         a
         FROM App\Entity\ProductModel a 
         ORDER BY a.createdAt DESC');
        $data = $query->getResult();

        $dataa = $this->entityManager->getRepository(ProductModel::class)->findAll();

        return $this->view($dataa, Response::HTTP_OK);
    }

    public function deleteProductAction(ProductModel $product)
    {

        if ($product) {

            $productImage = $product->getPictures();
            foreach ($productImage as $productpicture)
            {
                // $imageFile = $this->getDoctrine()->getRepository(ImageFile::class)->find($productpicture->getId());
                // if ($imageFile) {
                    $filesystem = new Filesystem();
                    if ($filesystem->exists($productpicture->getDefaultName())) {
                        try {
                            $filesystem->remove($productpicture->getDefaultName());
                        } catch (IOExceptionInterface $exception) {
                            return $this->view($exception, Response::HTTP_INTERNAL_SERVER_ERROR);
                        }
                        
                        $em = $this->entityManager;
                        $em->remove($productpicture);
                    }
                }
            
        

            $productdetails = $product->getProductDetailss();

            foreach ($productdetails as $productdetail)
            {
                $em = $this->entityManager;
                $em->remove($productdetail);
            }



                
            $this->entityManager->remove($product);
            $this->entityManager->flush();
            return $this->view(null, Response::HTTP_NO_CONTENT);
        }
        return $this->view(['message' => 'something went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Rest\RequestParam(name="name", description="product name", nullable=false)
     * 
     * @Rest\RequestParam(name="price", description="product price", nullable=false)
     * 
     * @Rest\RequestParam(name="image", description="product image", nullable=true)
     * 
     * @Rest\RequestParam(name="stock", description="product stock", nullable=false)
     * 
     * @Rest\RequestParam(name="desc", description="product description", nullable=false)
     * 
     * @Rest\RequestParam(name="category", description="product category description", nullable=true)
     * 
     * @Rest\RequestParam(name="details", description="product  details", nullable=true)
     * 
     * @param ParamFetcher $paramFetcher
     */
    public function putProductAction(ProductModel $productModel, ParamFetcher $paramFetcher)
    {
        $productModel->setProductName($paramFetcher->get('name'));
        $productModel->setProductPrice($paramFetcher->get('price'));
        $productModel->setProductStock($paramFetcher->get('stock'));
        $productModel->setProductDesc($paramFetcher->get('desc'));
        $productModel->setProductImage($paramFetcher->get('image'));

        if ($paramFetcher->get('category')) {

            $category = $this->entityManager->getRepository(Category::class)->find($paramFetcher->get('category'));
            $productModel->setCategory($category);
        } else {
            $productModel->setCategory(null);
        }
        $this->entityManager->persist($productModel);
        $this->entityManager->flush();

        $em = $this->entityManager;


        $details = $paramFetcher->get('details');
        if ($details)
        {             
            $id = 0;
            foreach ($details as $detail) {
                $obj = (Object)$detail;
                if(isset($obj->id)){
                    $found[$id] = $this->entityManager->getRepository(ProductDetails::class)->find($obj->id);
                }
                if ($found[$id]){
                    //if product detail found
                    $found[$id]->setDetailName($obj->detailname);
                    $found[$id]->setDatadesc($obj->datadesc);
                    $em->persist($found[$id]);
                    $em->flush();
                    
                }
                if (!$found[$id]){
                    //if product details is new
                    $prodetails = new ProductDetails();
                    $prodetails->setProduct($productModel);
                    if ($obj->detailname) {
                        # code...
                        $prodetails->setDetailName($obj->detailname);
                    }
                    if ($obj->datadesc)
                    {
                        $prodetails->setDatadesc($obj->datadesc);
                    }
                    $em->persist($prodetails);
                    $em->flush();
                    

                }
                $id++;

                
            }
        }




        return $this->view($productModel, Response::HTTP_OK);
    }


    public function getImagesAction()
    {
        $imageFile = $this->entityManager->getRepository(ImageFile::class)->findAll();

        return $this->view($imageFile, Response::HTTP_OK);
    }
    /**
     * @Rest\RequestParam(name="image", description="image file", nullable=false)
     */

    public function deleteImageFileProductAction(ParamFetcher $paramFetcher, ProductModel $product)
    {
        $product->setProductImage(null);
        $imageFile = $this->getDoctrine()->getRepository(ImageFile::class)->findOneBy(['filename' => $paramFetcher->get('image')]);
        $filesystem = new Filesystem();
        $em = $this->getDoctrine()->getManager();
        //remove file 
        if ($imageFile) {
            if ($filesystem->exists($imageFile->getDefaultName())) {
                try {
                    $filesystem->remove($imageFile->getDefaultName());
                } catch (IOExceptionInterface $exception) {
                    return $this->view($exception, Response::HTTP_INTERNAL_SERVER_ERROR);
                }
            }

            $em->remove($imageFile);
            $em->persist($product);
            $em->flush();

            return $this->view(null, Response::HTTP_NO_CONTENT);
        } else {
            $em->persist($product);
            $em->flush();
            return $this->view(null, Response::HTTP_NO_CONTENT);
        }
        return $this->view(['message' => 'something went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }





}
