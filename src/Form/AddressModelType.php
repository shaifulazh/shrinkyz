<?php

namespace App\Form;

use App\Entity\AddressModel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressModelType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('first_name')
            ->add('last_name')
            ->add('address')
            ->add('country')
            ->add('state')
            ->add('city')
            ->add('postcode')
            ->add('phone_number')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AddressModel::class,
        ]);
    }
}
