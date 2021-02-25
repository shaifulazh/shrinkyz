<?php

namespace App\DomainModel;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class PosLajuClient
{
    private HttpClientInterface $httpclient;
    private const URL = 'https://sendparcel.poslaju.com.my/apiv1/check_price';

    public function __construct(HttpClientInterface $httpclient)
    {
        $this->httpclient = $httpclient;
    }

    public function fetchPriceCheck($ourpostcode,$country,$postcode,$wight)
    {
        $response = $this->httpclient->request('POST',self::URL,[
            'body' => [
                'api_key' => 'kaa0ac1d77e2d5012ad9bc20a674a6c28',
                'sender_postcode' => '68000',
                'receiver_postcode'=>'08000',
                'receiver_country_code'=>'MY',
                'declared_weight' => '2'
            ],


           
        ]);
        return $response->getContent();
    }
}