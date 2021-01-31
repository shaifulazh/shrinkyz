<?php

namespace App\Serializer;

use Symfony\Component\Routing\RouterInterface;
use App\Entity\OrderDetails;
use App\Entity\OrderModel;

class CircularReferenceHandler
{
    private $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }
    public function __invoke($object)
    {
        switch ($object) {
            case $object instanceOf OrderModel:
                return $this->router->generate('get_order', ['order' => $object->getId()]);
            case $object instanceof OrderDetails:
                return $this->router->generate('get_order_details', ['order_details' => $object->getId()]);
            
        }
        return $object->getId();
    }
}
