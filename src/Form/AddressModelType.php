<?php

namespace App\Form;

use App\Entity\AddressModel;
use App\Entity\Country;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
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
            ->add('address_line_2')
            ->add('countrydata', EntityType::class, [
                'class' => Country::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')->orderBy('u.countryname', 'ASC');
                },
                'choice_label' => 'countryname',
                'placeholder' => 'Choose Country'
            ])
            ->add('state')
            ->add('city')
            ->add('postcode')
            ->add('phone_number',NumberType::class,['html5'=> true, 'invalid_message'=> 'Please put number value only'])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AddressModel::class,
        ]);
    }
}
