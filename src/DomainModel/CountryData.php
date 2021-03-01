<?php

namespace App\DomainModel;

use App\Entity\AddressModel;
use App\Entity\Country;
use App\Entity\OrderDetails;
use App\Entity\OrderModel;
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


    public function insertCountryData($file){

        if($this->entityManager->getRepository(Country::class)->findAll()){
            throw new \Exception('Data Already Exist!');
        }

        $file = file_get_contents($this->parameter->get('localdir') . '/'. $file);

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

    public function removeCountryData()
    {   
        


        $data = $this->entityManager->getRepository(Country::class)->findAll();
        
        $em = $this->entityManager;

        


        
        if($data){
        
            foreach ($data as $country) {

                $em->remove($country);

                $em->flush();

                
            }
            return true;

        }
        else{

            throw new \Exception('Data country not Exist!');

        }

    }

    public function checkAddressData(){
        $address = $this->entityManager->getRepository(AddressModel::class)->findAll();
        if($address)
        {
            return $address;
        }
        return false;
    }

    public function deleteAddressData($address) :void
    {
        $address = $this->entityManager->getRepository(AddressModel::class)->findAll();
        $em = $this->entityManager;
        foreach ($address as $single) {
            $em->remove($single);
            $em->flush();
        }
    }

    public function checkOrdersData()
    {
        $orders = $this->entityManager->getRepository(OrderModel::class)->findAll();
        if($orders)
        {

            return $orders;
        } 
        return false;

    }

    public function deleteOrdersData($orders):void
    {
        $em = $this->entityManager;
        $orderDetails = $em->getRepository(OrderDetails::class)->findAll();
        foreach ($orderDetails as $orderDetail) {
            $em->remove($orderDetail);
            $em->flush();
        }
        foreach ($orders as $order) {
            $em->remove($order);
            $em->flush();
        }

    }
}