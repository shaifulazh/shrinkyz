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
    /**
     * @test
     */
    public function check_postClient_sending(){

        $poslajuClient = self::$kernel->getContainer()->get('pos-laju-client');

        $response = $poslajuClient->fetchPriceCheck(1,2,3,4);
        dump($response);
        $this->assertTrue(true);

    }
}