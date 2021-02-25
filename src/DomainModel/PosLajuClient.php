<?php

namespace App\DomainModel;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class PosLajuClient
{
    private HttpClientInterface $httpclient;
    private $posLajuApiKey = 'kaa0ac1d77e2d5012ad9bc20a674a6c28';
    private $adminPostcode = '88200';

    public function __construct(HttpClientInterface $httpclient)
    {
        $this->httpclient = $httpclient;
    }

    public function fetchPriceCheck($country,$postcode,$weight)
    {
        $urlCheckPrice = 'https://sendparcel.poslaju.com.my/apiv1/check_price';
        $response = $this->httpclient->request('POST',$urlCheckPrice,[
            'body' => [
                'api_key' => $this->posLajuApiKey,
                'sender_postcode' => $this->adminPostcode,
                'receiver_postcode'=>$postcode,
                'receiver_country_code'=>$country,
                'declared_weight' => $weight
            ],


           
        ]);
        return $response->getContent();
    }

    public function fecthPoscodeDetails($postcode){
        $urlPostcode = 'https://sendparcel.poslaju.com.my/apiv1/get_postcode_details';

        $response = $this->httpclient->request('POST', $urlPostcode,[
            'body' =>[
                'api_key' => $this->posLajuApiKey,
                'postcode' => $postcode
            ]
        ]);

        return $response->getContent();

    }
   
       
}