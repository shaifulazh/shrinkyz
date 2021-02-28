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

        $poslajuClient = self::$kernel->getContainer()->get('poslaju-api-client');

        // $response = $poslajuClient->fetchPriceCheck(1,2,3,4);
        $s = '2021-02-28T14:46:36Z';
        $date = date('Y-m-d H:i:s', strtotime ($s));
        $d = date_create_from_format('Y-m-d H:i:s', $date);
        $crc = crc32(md5(uniqid()));
        
        dd(uniqid());

        $this->assertTrue(true);
        
        

    }



}