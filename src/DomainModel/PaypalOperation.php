<?php

namespace App\DomainModel;

use App\Entity\AddressModel;
use App\Entity\CheckOutData;
use Doctrine\ORM\EntityManagerInterface;
use PayPalCheckoutSdk\Core\PayPalHttpClient;
use PayPalCheckoutSdk\Core\SandboxEnvironment;
use PayPalCheckoutSdk\Orders\OrdersCreateRequest;
use Symfony\Component\HttpKernel\Exception\HttpException;
use PayPalCheckoutSdk\Orders\OrdersCaptureRequest;
use PayPalHttp\HttpException as PayPalHttpHttpException;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;

class PaypalOperation
{
    
    private $params;
    private $entityManager;

    public function __construct(ContainerBagInterface $params,EntityManagerInterface $entityManager)
    {
        $this->params = $params;
        $this->entityManager = $entityManager;
    }
    public function paymentpaypal()
    {

        $clientId =  $this->params->get('clientid');
        $clientSecret = $this->params->get('csecret');

        $environment = new SandboxEnvironment($clientId, $clientSecret);
        $client = new PayPalHttpClient($environment);
        return  $client;
    }

    public function paymentexecute($user,$payment,$url)


    {

        $method = 'Pos Laju Malaysia';

        $currencyCode = 'MYR';

        $address = $this->entityManager->getRepository(AddressModel::class)->findOneBy(['user'=>$user]); 
        
        $request = new OrdersCreateRequest();

        $request->prefer('return=representation');

        $request->body = [
            "intent" => "CAPTURE",
            "purchase_units" => [[
                "reference_id" => $payment['reference_id'],
                "amount" => [
                    "value" => number_format($payment['finaltotal'], 2, '.', ''),
                    "currency_code" => $currencyCode
                ],
                "shipping" => [
                    
                        'method' => $method,
                        'name' =>
                            [
                                'full_name' => "{$address->getFirstName()} {$address->getLastName()}",
                            ],
                        'address' =>
                            [
                                'address_line_1' => $address->getAddress(),
                                'address_line_2' =>  $address->getAddressLine2(),
                                'admin_area_2' => $address->getState(),
                                'admin_area_1' => $address->getCity(),
                                'postal_code' => $address->getPostcode(),
                                'country_code' => $address->getCountryData()->getCountrycode(),
                            ],
                ],
            ]],
            "application_context" => [
                "cancel_url" => $url['cancel'],
                "return_url" => $url['return'],
                "user_action" => "PAY_NOW",
                "shipping_preference" => "SET_PROVIDED_ADDRESS"


            ]
            
            
        ];

        try {
            // Call API with your client and get a response for your call

            $response = $this->paymentpaypal()->execute($request);

            // If call returns body in response, you can get the deserialized version from the result attribute of the response
            return $response;
        } catch (HttpException $ex) {
            
            
            return null;
        }catch (PayPalHttpHttpException $exp) {
            
  
            return null;
        }

    }

    public function captureOrder($orderId)
    {

        $request = new OrdersCaptureRequest($orderId);
        $request->prefer('return=representation');
        try {
            // Call API with your client and get a response for your call
            $response = $this->paymentpaypal()->execute($request);

            // If call returns body in response, you can get the deserialized version from the result attribute of the response
            return ($response);
        } catch (HttpException $ex) {
  
            return null;
        }
        catch (PayPalHttpHttpException $exp) {
  
            return null;
        }
       
    }


    
    
}
