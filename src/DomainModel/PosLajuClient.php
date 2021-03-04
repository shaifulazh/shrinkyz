<?php

namespace App\DomainModel;

use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class PosLajuClient
{
    private HttpClientInterface $httpclient;

    private $parameter;

    private const URL_CHECK_PRICE = 'https://sendparcel.poslaju.com.my/apiv1/check_price';

    private const URL_POSCODE = 'https://sendparcel.poslaju.com.my/apiv1/get_postcode_details';

    private const URL_TEST_400 = 'https://httpstat.us/400';

  
    public function __construct(HttpClientInterface $httpclient,ContainerBagInterface $parameter)
    {
        $this->httpclient = $httpclient;
        $this->parameter = $parameter;
        
    }

    public function fetchPriceCheck($country,$postcode,$weight)
    {
        

        $response = $this->httpclient->request('POST',self::URL_CHECK_PRICE,[
            'body' => [
                'api_key' => $this->parameter->get('poslaju_api_key'),
                'sender_postcode' =>  $this->parameter->get('local_postcode'),
                'receiver_postcode'=>$postcode,
                'receiver_country_code'=>$country,
                'declared_weight' => $weight
            ],

        ]);

        if($response->getStatusCode() !== 200)
        {
            return null;
        }

        return $response->getContent();
    }

    public function fecthPoscodeDetails($postcode){

        $response = $this->httpclient->request('POST', self::URL_POSCODE,[
            'body' =>[
                'api_key' => $this->parameter->get('poslaju_api_key'),
                'postcode' => $postcode
            ]
        ]);

        if($response->getStatusCode() !== 200)
        {
            return null;
        }


        $content = $response->toArray();
        
        $content = (Object)$content;
        dd($content->data['city']);

        return $response->getContent();

    }
   
       
}