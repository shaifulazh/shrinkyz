<?php

namespace App\DomainModel;

use App\Entity\CartModel;
use App\Entity\ProductModel;
use App\Repository\CartModelRepository;
use Doctrine\ORM\EntityManagerInterface;

class AddProductToCart
{
    private $entityManager;
    private $cart;
    public function __construct(EntityManagerInterface $entityManager, CartModelRepository $cart)
    {
        $this->entityManager = $entityManager;
        $this->cart = $cart;
    }

     public function check_product_in_cart($product,$user)
    {
        $product_in_cart = $this->cart->findBy(['customer'=> $user]);
        
        if($product_in_cart)
        {
            foreach($product_in_cart as $product_single)
            {
                if($product_single->getProduct() === $product)
                { 
                    return $product_single;
                }
            }
        }
        return null;
    }

    public function execute($product,$user): void
    {
        $product_exist = $this->check_product_in_cart($product,$user);
        // dd($product_exist);
        if ($product_exist)
        {
            $product_exist->setQty($product_exist->getQty()+ 1);
            $this->entityManager->persist($product_exist);
            $this->entityManager->flush();
            
        }else{
            $newproductforcart = new CartModel;
            $newproductforcart->setCustomer($user);
            $newproductforcart->setProduct($product);
            $newproductforcart->setQty(1);
            $this->entityManager->persist($newproductforcart);
            $this->entityManager->flush();
        }
        
    }
}