<?php

namespace App\DomainModel;

use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class PosLajuClient
{
    private HttpClientInterface $httpclient;
    private $parameter;
  
    public function __construct(HttpClientInterface $httpclient,ContainerBagInterface $parameter)
    {
        $this->httpclient = $httpclient;
        $this->parameter = $parameter;
    }

    public function fetchPriceCheck($country,$postcode,$weight)
    {
        $urlCheckPrice = 'https://sendparcel.poslaju.com.my/apiv1/check_price';

        $response = $this->httpclient->request('POST',$urlCheckPrice,[
            'body' => [
                'api_key' => $this->parameter->get('poslaju_api_key'),
                'sender_postcode' =>  $this->parameter->get('local_postcode'),
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
                'api_key' => $this->parameter->get('poslaju_api_key'),
                'postcode' => $postcode
            ]
        ]);

        return $response->getContent();

    }
   
       
}