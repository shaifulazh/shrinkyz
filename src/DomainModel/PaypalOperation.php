<?php

namespace App\DomainModel;

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

    public function __construct(ContainerBagInterface $params)
    {
        $this->params = $params;
    }
    public function paymentpaypal()
    {

        $clientId =  $this->params->get('clientid');
        $clientSecret = $this->params->get('csecret');

        $environment = new SandboxEnvironment($clientId, $clientSecret);
        $client = new PayPalHttpClient($environment);
        return  $client;
    }

    public function paymentexecute($price, $cancelUrls, $returnUrl)
    {

        $request = new OrdersCreateRequest();

        // $url =  $urls->generateUrl('register_order', [], UrlGenerator::ABSOLUTE_URL);
        $request->prefer('return=representation');
        $request->body = [
            "intent" => "CAPTURE",
            "purchase_units" => [[
                "reference_id" => "test_ref_id1",
                "amount" => [
                    "value" => number_format($price, 2),
                    "currency_code" => "MYR"
                ]
            ]],
            "application_context" => [
                "cancel_url" => $cancelUrls,
                "return_url" => $returnUrl,
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
