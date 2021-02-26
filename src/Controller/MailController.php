<?php

namespace App\Controller;

use App\Entity\ProductModel;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcher;
use Symfony\Component\HttpFoundation\Response;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;



class MailController extends AbstractFOSRestController
{
    private $mailer;

    public function __construct(MailerInterface $mailer){
        $this->mailer = $mailer;
}


    /**
     * @Rest\RequestParam(name="email", description="email", nullable=false)
     * @Rest\RequestParam(name="product", description="product", nullable=false)
     * 
     * @param ParamFetcher $paramFetcher
     */
    public function postEmailAction(ParamFetcher $paramFetcher)
    {

        $product = $this->getDoctrine()->getRepository(ProductModel::class)->find($paramFetcher->get('product'));
        $email = (new Email())
            ->from($this->getParameter('webemail'))
            ->to($this->getParameter('requestemail'))
            ->subject('Special Request For Shrinkyz')
            ->html('<p>There is new Request from customer !!</p><p> Email : ' . $paramFetcher->get('email') .' </p> <p> Requested product : 
                '. $product->getProductName() .' </p> 
                <p>Notes : this is automated mail, do not reply</p>');
        try {
            //code...
            $this->mailer->send($email);
        } catch (\Throwable $th) {
            return $this->view(["message" => "error fail to send email"], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        $data = $paramFetcher->get('email');

        return $this->view($data, Response::HTTP_OK);
    }


    public function php_email_biasa(){
        // TESTED RUN ITS WORKING
         // return $this->render('request_product/request.html.twig', ['message' => 'sucess delivered']);
    $sender = 'shaifulazhartalib@gmail.com';
    $senderName = 'Sender Name';

    // Replace recipient@example.com with a "To" address. If your account
    // is still in the sandbox, this address must be verified.
    $recipient = 'replacetr@gmail.com';

    // Replace smtp_username with your Amazon SES SMTP user name.
    $usernameSmtp = 'AKIA5ALEP3XLBVNY6VEZ';

    // Replace smtp_password with your Amazon SES SMTP password.
    $passwordSmtp = 'BATBFNkPfcAVWztfWxW7KFZNsvDr2u0Oe3Iw1i4HrNGb';

    // Specify a configuration set. If you do not want to use a configuration
    // set, comment or remove the next line.
    // $configurationSet = 'ConfigSet';

    // If you're using Amazon SES in a region other than US West (Oregon),
    // replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
    // endpoint in the appropriate region.
    $host = 'email-smtp.ap-southeast-1.amazonaws.com';
    $port = 587;

    // The subject line of the email
    $subject = 'Amazon SES test (SMTP interface accessed using PHP)';

    // The plain-text body of the email
    $bodyText =  "Email Test\r\nThis email was sent through the
        Amazon SES SMTP interface using the PHPMailer class.";

    // The HTML-formatted body of the email
    $bodyHtml = '<h1>Email Test</h1>
        <p>This email was sent through the
        <a href="https://aws.amazon.com/ses">Amazon SES</a> SMTP
        interface using the <a href="https://github.com/PHPMailer/PHPMailer">
        PHPMailer</a> class.</p>';

    $mail = new PHPMailer(true);

    try {
        // Specify the SMTP settings.
        $mail->isSMTP();
        $mail->setFrom($sender, $senderName);
        $mail->Username   = $usernameSmtp;
        $mail->Password   = $passwordSmtp;
        $mail->Host       = $host;
        $mail->Port       = $port;
        $mail->SMTPAuth   = true;
        $mail->SMTPSecure = 'tls';
        // $mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

        // Specify the message recipients.
        $mail->addAddress($recipient);
        // You can also add CC, BCC, and additional To recipients here.

        // Specify the content of the message.
        $mail->isHTML(true);
        $mail->Subject    = $subject;
        $mail->Body       = $bodyHtml;
        $mail->AltBody    = $bodyText;
        $mail->Send();
        return $this->render('request_product/request.html.twig',['message' => 'sucess']);
    } catch (\Exception $e) {
       
        return $this->render('request_product/request.html.twig',['message' => $e]);
    } catch (\Throwable $e) {
        
        return $this->render('request_product/request.html.twig',['message' => $e]);




    }

    }


    public function emailme(MailerInterface $mailer)
    {

       $sendmail = (new Email())
       ->from('shaifulazhar.000@gmail.com')
       ->to('shaifulazhartalib@gmail.com')
       ->subject('Registration Complete')
       ->html('
  
       <p> Dear valued Customer,,<p/>
       
       <p>Thank you for registering for an account at Shrinkyz.com. Before we can</p>
       <p>activate your account one last step must be taken to complete your</p> 
       <p>registration. </p>
       </br>
       <p>To confirm your registration, please visit this URL:</p>
       <p><a href="#">http://shrinkyz.com/FMfcgxwLsJvLLTNmSGcTClnZdwQjMplg</a></p>
       <p>Note: This email is auto-post mail. Please do not reply.></p>

       ');
   try {
       //code...
       $mailer->send($sendmail);
       return $this->render('request_product/request.html.twig',['message' => 'sucess']);



   } catch (\Throwable $th) {
       return $this->render('request_product/request.html.twig',['message' => 'fail']);
   }

   return $this->render('request_product/request.html.twig',['message' => 'fail']);
   }


   // ->html('
  
   // <p> Welcome,<p/>
   
   // <p>Thank you for registering your email account with us. You ID is CustomerID and email customer@cust.com.</p>
   // <p>To unsubscribe your email please use this link <a href="# ">https://www.shrinyz.com/unsubscribe/user?87d607af26cd51bb887a2414b </a>.</p> 
   // <p>You can access your account area to view orders and change your detail and more at: <a href="# ">https://www.shrinkyz.com/user/profile </a> </p>
   // <p>We look forward to seeing you soon.</p>
   // <p>Note: This email is auto-post mail. Please do not reply</p>
   // <p><a href="# ">Unsubscribe</a></p>

   
   // </p>');

}
    


    
        
        