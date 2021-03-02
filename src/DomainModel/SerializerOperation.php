<?php

namespace App\DomainModel;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class SerializerOperation
{

    private $serializer;
    public function __construct()

    {
        $dateCallback = function ($innerObject, $outerObject, string $attributeName, string $format = null, array $context = []) {
            return $innerObject instanceof \DateTime ? $innerObject->format(\DateTime::ISO8601) : '';
        };

        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            AbstractNormalizer::CALLBACKS => [
                'createdAt' => $dateCallback,
                'updatedAt' => $dateCallback,
            ]
        ];
        
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([$normalizer], [$encoder]);

        $this->serializer = $serializer;
    }


    public function forSerializingGetSetterMethod()
    {

        $encoder = new JsonEncoder();

        // all callback parameters are optional (you can omit the ones you don't use)
        $dateCallback = function ($innerObject, $outerObject, string $attributeName, string $format = null, array $context = []) {
            return $innerObject instanceof \DateTime ? $innerObject->format(\DateTime::ISO8601) : '';
        };

        $defaultContext = [
            AbstractNormalizer::CALLBACKS => [
                'createdAt' => $dateCallback,
            ],
        ];

        $normalizer = new GetSetMethodNormalizer(null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([$normalizer], [$encoder]);

        return  $serializer;
    }

    public function details_toArray($details)
    {

        return $this->serializer->normalize(
            $details,
            'json',
            [AbstractNormalizer::IGNORED_ATTRIBUTES => ['product']]
        );
    }

    public function categories_toArray($categories)
    {
        return $this->serializer->normalize($categories, 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ['productModel', 'subcategory']]);
    }

    public function subcategories_toArray($subcategories)
    {

        return $this->serializer->normalize($subcategories, 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ['product', 'Subtwocategory', 'category']]);
    }

    public function subtwocategoris_toArray($subtwocategories)
    {
        return $this->serializer->normalize($subtwocategories, 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ['product', 'subcategory']]);
    }

    public function user_toArray($user)
    {
        return $this->serializer->normalize($user, 'json', [AbstractNormalizer::ATTRIBUTES => ['email', 'firstname','lastname','createdAt']]);
    }
}
