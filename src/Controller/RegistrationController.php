<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Form\AdminFormType;
use App\Security\EmailVerifier;
use App\Security\LoginFormAuthAuthenticator;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use App\Repository\UserRepository;

class RegistrationController extends AbstractController
{
    private $emailVerifier;
    private $mailer;

    public function __construct(EmailVerifier $emailVerifier, MailerInterface $mailer)
    {
        $this->emailVerifier = $emailVerifier;
        $this->mailer = $mailer;
    }

    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, LoginFormAuthAuthenticator $authenticator): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            $roles = ["ROLE_USER"];
            $user->setRoles($roles);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
            (new TemplatedEmail())
                ->from(new Address($this->getParameter('webemail'), $this->getParameter('webemailname')))
                ->to($user->getEmail())
                ->subject('Please Confirm your Email')
                ->htmlTemplate('registration/confirmation_email.html.twig')
            );
            // do anything else you need here, like send an email

            $this->addFlash('success', 'U have Register Success. A link has been sent to your '. $user->getEmail() .'. Please Verified Your email to confirm registration. Link will expired in 30 minutes.');
                
            return $this->redirectToRoute('app_home');
            // <---this original from make registration --->
            // return $guardHandler->authenticateUserAndHandleSuccess(
            //     $user,
            //     $request,
            //     $authenticator,
            //     'main' // firewall name in security.yaml
            // );
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/verify/email", name="app_verify_email")
     */
    public function verifyUserEmail(Request $request, UserRepository $userRepository): Response
    {
        $id = $request->get('id'); // retrieve the user id from the url

       // Verify the user id exists and is not null
       if (null === $id) {
        $this->addFlash('warning', 'Link Broken cant find user');
           return $this->redirectToRoute('app_home');
       }

       $user = $userRepository->find($id);

       // Ensure the user exists in persistence
       if (null === $user) {
        $this->addFlash('warning', 'Link Broken, User not registered');
           return $this->redirectToRoute('app_home');
       }

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $user);
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('verify_email_error', $exception->getReason());

            return $this->redirectToRoute('app_register');
        }

        // @TODO Change the redirect on success and handle or remove the flash message in your templates
        $this->addFlash('success', 'Your email address has been verified.');

        return $this->redirectToRoute('app_login');
    }


    /**
     * @Route("/registeradmin", name="register_admin")
     */
    public function adminRegister(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        //for admin only dev should open for registration
        return $this->redirectToRoute('app_home');
        $user = new User();
        $form = $this->createForm(AdminFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('password')->getData()
                )
            );

            $data = $form->getData();
            if ($this->getDoctrine()->getRepository(User::class)->findBy(['email' => $data['email']])) {
                $this->addFlash('warning', 'Email Already Exist');
                return $this->render('registration/registerAdmin.html.twig', [
                    'form' => $form->createView(),
                ]);
            }
            $webmaster = $this->getParameter('webmaster');
            if ($data['superpassword'] === $webmaster) {

                $roles = ["ROLE_ADMIN"];
                $user->setRoles($roles);
                $user->setEmail($data['email']);
                $user->setFirstname($data['firstName']);
                $user->setLastname($data['lastName']);
                $user->setIsVerified(TRUE);
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->flush();
                
                
                $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
                (new TemplatedEmail())
                    ->from(new Address($this->getParameter('webemail'), $this->getParameter('webemailname')))
                    ->to($user->getEmail())
           
                    ->subject('Please Confirm your Email')
                    ->htmlTemplate('registration/confirmation_email.html.twig')
                );
                
                
                
                
                $this->addFlash('success', 'Admin Registration Success. A link has been sent to your '. $user->getEmail() .'. Please Verfied Your Email . Login Admin Account to Continue.');
                
                return $this->redirectToRoute('dashboard');





            } else {
                $this->addFlash('warning', 'Super Password False. Please Enter Right Password. Refer to Web developer.');
            }
        }


        return $this->render('registration/registerAdmin.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
