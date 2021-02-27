<?php

namespace App\DomainModel;

use App\Entity\Country;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ArrayDenormalizer;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;


class CountryData
{   
    private $entityManager;
    private $parameter;
    public function __construct(EntityManagerInterface $entityManager,ContainerBagInterface $parameter)
    {   
        $this->parameter = $parameter;
        $this->entityManager = $entityManager;
    }


    public function insertCountryData(){

        if($this->entityManager->getRepository(Country::class)->findAll()){
            throw new \Exception('Data Already Exist!');
        }

        $file = file_get_contents($this->parameter->get('localdir') . '/country.json');

        if(!$file)
        {
            throw new \Exception('File data Not Exist!');
        }
        
        $em = $this->entityManager;
        
        $serializer = new Serializer(
            [new GetSetMethodNormalizer(), new ArrayDenormalizer()],
            [new JsonEncoder()]
        );
        
        
        $person = $serializer->deserialize($file, 'App\Entity\Country[]', 'json');
        foreach ($person as $key) {
            
            $em->persist($key);
            $em->flush();
        }
        
        return true;
    }
}