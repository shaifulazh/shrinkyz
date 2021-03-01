<?php

namespace App\Entity;

use App\Repository\ProductDetailsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductDetailsRepository::class)
 */
class ProductDetails
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $detailname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $datadesc;

    /**
     * @ORM\ManyToOne(targetEntity=ProductModel::class, inversedBy="productDetailss")
     */
    private $product;

 

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDetailname(): ?string
    {
        return $this->detailname;
    }

    public function setDetailname(?string $detailname): self
    {
        $this->detailname = $detailname;

        return $this;
    }

    public function getDatadesc(): ?string
    {
        return $this->datadesc;
    }

    public function setDatadesc(?string $datadesc): self
    {
        $this->datadesc = $datadesc;

        return $this;
    }

    public function getProduct(): ?ProductModel
    {
        return $this->product;
    }

    public function setProduct(?ProductModel $product): self
    {
        $this->product = $product;

        return $this;
    }


}