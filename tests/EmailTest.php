<?php

namespace App\Tests;

use App\Entity\OrderModel;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class EmailTest extends KernelTestCase
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
    public function send_email_(){

        $emailOrder = self::$kernel->getContainer()->get('email-order-test');

        // $emailOrder->sendAdminPaymentOrder('shaifulazhartalib@gmail.com',md5(uniqid()));
        
        $emailOrder->sendTestTemplate('replacetr@gmail.com');
        $this->assertTrue(true);

    }



}