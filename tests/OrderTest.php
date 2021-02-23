<?php

namespace App\Tests;

use App\Entity\OrderModel;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class OrderTest extends KernelTestCase
{
    private $entityManager;

    protected function setUp(): void
    {
        $kernel = self::bootKernel();
        DatabasePrimer::prime($kernel);
        $this->entityManager = $kernel->getContainer()->get('doctrine')->getManager();
    }
    public function a_order_can_be_created_in_database(){
        $order = new OrderModel;
        $order = $user
    }
}