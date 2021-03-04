<?php

namespace App\DomainModel;

use App\Entity\OrderDetails;
use App\Entity\OrderModel;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBag;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class EmailOperation 
{
    private $mailer;
    private $parameter;
    private $urlGenerator;
    private $entityManager;

    public function __construct(MailerInterface $mailer,ContainerBagInterface $parameter, 
    UrlGeneratorInterface $urlGenerator, EntityManagerInterface $entityManager)
    {
        $this->mailer = $mailer;
        $this->parameter = $parameter;
        $this->urlGenerator = $urlGenerator;
        $this->entityManager = $entityManager;
    }

    public function sendEmailConfirmOrder(User $user,OrderModel $order):void
    {   
        $orderdetails = $this->entityManager->getRepository(OrderDetails::class)->findBy(['orders' =>$order]);
      
        $template = (new TemplatedEmail())
        ->from(new Address($this->parameter->get('webemail'), $this->parameter->get('webemailname')))
        ->to($user->getEmail())
        ->subject('Payment Confirmation for Order ')
        ->htmlTemplate('orders/confirmation_order.html.twig')
        ->context([
            'user' => $user->getFirstname(),
            'order' => $order,
            'address' => $order->getAddress(),
            'paypal' => $order->getPaypal(),
            'orderdetails' => $orderdetails,
        ]);
        $this->mailer->send($template);
    
    }


    public function sendAdminPaymentOrder($admin,$order,$user):void
    {
        $orderdetails = $this->entityManager->getRepository(OrderDetails::class)->findBy(['orders' =>$order]);
        $dashboard = $this->urlGenerator->generate('dashboard', [], UrlGenerator::ABSOLUTE_URL);
        $template = new TemplatedEmail();
        $template->from(new Address($this->parameter->get('webemail'), $this->parameter->get('webemailname')))
        ->to($admin->getEmail())
        ->subject('You Have Order ')
        ->htmlTemplate('orders/notify_admin_order.html.twig')
        ->context([
            'admin' => $admin->getFirstname(),
            'customer'=> $user->getEmail(),
            'order' => $order,
            'address' => $order->getAddress(),
            'paypal' => $order->getPaypal(),
            'orderdetails' => $orderdetails,
            'dashboard'=> $dashboard
        ]);
        $this->mailer->send($template);
    
    }

    public function sendTestTemplate($email):void
    {
        $template = new TemplatedEmail();
        $template->from(new Address($this->parameter->get('webemail'), $this->parameter->get('webemailname')))
        ->to($email)
        // ->to($admin->getEmail())
        ->subject('Payment Confirmation for Order ')
        ->htmlTemplate('email/test.html.twig');

        $context = $template->getContext();
        // $context['admin'] = $admin->getFirstname();
        // $context['order'] = $order->getReferenceId();
        // $context['customer'] = $order->getUser()->getEmail();

        $dashboard = $this->urlGenerator->generate('dashboard', [], UrlGenerator::ABSOLUTE_URL);

    
        $context['test'] = 'test';
    

        $template->context($context);

        $this->mailer->send($template);
    
    }



}