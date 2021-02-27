<?php

namespace App\DomainModel;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBag;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class EmailOperation 
{
    private $mailer;
    private $parameter;

    public function __construct(MailerInterface $mailer,ContainerBagInterface $parameter)
    {
        $this->mailer = $mailer;
        $this->parameter = $parameter;
    }

    public function sendEmailConfirmOrder($user,$order):void
    {
        $template = new TemplatedEmail();
        $template->from(new Address($this->parameter->get('webemail'), $this->parameter->get('webemailname')))
        ->to($user->getEmail())
        ->subject('Payment Confirmation for Order ')
        ->htmlTemplate('orders/confirmation_order.html.twig');

        $context = $template->getContext();
        $context['user'] = $user->getFirstname();
        $context['order'] = $order->getReferenceId();

        $template->context($context);

        $this->mailer->send($template);
    
    }


}