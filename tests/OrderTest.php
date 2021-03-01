<?php

namespace App\Tests;

use App\Entity\OrderJson;
use App\Entity\OrderModel;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Serializer\Encoder\JsonEncode;

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
     * 
     */

    public function check_json_can_begood(){
        $json = new OrderJson;

        for ($i=0; $i < 5; $i++) { 
            $data[] = [
                uniqid()=> uniqid()
            ];
        }

        
       
       
    }

    

    
      


}