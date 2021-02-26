<?php

namespace App\DomainModel;

use App\Entity\CartModel;
use Doctrine\ORM\EntityManagerInterface;
use phpDocumentor\Reflection\Types\Boolean;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;

class CartOperation
{
    private $entityManager;
    private $flash;
    
    public function __construct(EntityManagerInterface $entityManager ,FlashBagInterface $flash)
    {
        $this->entityManager = $entityManager;
        $this->flash = $flash;
    }

    public function productInCarts($user)
    {
        $carts = $this->entityManager->getRepository(CartModel::class)->findBy(['customer'=> $user]);

        if(!$carts)
        {
            
            return null;

        }else{

            return $carts;
        }
    }
    public function getProductFromCart($user)
    {
        $carts = $this->productInCarts($user);

        if ($carts)
        {
            $notEnoughStock = 0;
            foreach ($carts as $cart) {
                if (($cart->getProduct()->getProductStock() - $cart->getQty()) < 0) {
                    $notEnoughStock += 1;
                }
            }
            if($notEnoughStock === 0)
            {
                return $carts;
            }
            else 
            {
                $this->flash->add('warning', 'Product Not Enough Stock');
                return null;
            }
            
        }else {
            
            $this->flash->add('warning', 'cart Empty');

            return null;
        
        }

    }
}

