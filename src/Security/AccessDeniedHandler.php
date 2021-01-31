<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;

class AccessDeniedHandler implements AccessDeniedHandlerInterface
{
    private $urlGenerator;
    private $flashBag;

    public function __construct(UrlGeneratorInterface $urlGenerator,FlashBagInterface $flashBag)
    {
        $this->flashBag = $flashBag;
        $this->urlGenerator = $urlGenerator;
    }

    public function handle(Request $request, AccessDeniedException $accessDeniedException)
    {
        
        $this->flashBag->add('warning', 'Access Denied, Please Logout and Login with Admin Account');

        return new RedirectResponse($this->urlGenerator->generate('index'));
    }
}
