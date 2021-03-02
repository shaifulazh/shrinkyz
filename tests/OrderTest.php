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
        $pattern = "/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/";

        $c = preg_match($pattern, '246346454565456546532.43676767');
        $b =date_default_timezone_get();
        dd($b);
    }

    

    
      


}