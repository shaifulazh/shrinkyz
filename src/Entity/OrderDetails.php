<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OrderDetailsRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class OrderDetails
{
    use Timestamps;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="integer")
     */
    private $qty;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\OrderModel", inversedBy="orderdetails", cascade={"REMOVE"})
     */
    private $orders;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $product_name;

    /**
     * @ORM\Column(type="float")
     */
    private $product_price;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $product_image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="json")
     */
    private $jsondata = [];

 

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQty(): ?int
    {
        return $this->qty;
    }

    public function setQty(int $qty): self
    {
        $this->qty = $qty;

        return $this;
    }

    public function getProductName(): ?string
    {
        return $this->product_name;
    }

    public function setProductName(string $product_name): self
    {
        $this->product_name = $product_name;

        return $this;
    }

    public function getProductPrice(): ?float
    {
        return $this->product_price;
    }

    public function setProductPrice(float $product_price): self
    {
        $this->product_price = $product_price;

        return $this;
    }

    public function getProductImage(): ?string
    {
        return $this->product_image;
    }

    public function setProductImage(string $product_image): self
    {
        $this->product_image = $product_image;

        return $this;
    }

    public function getOrders(): ?OrderModel
    {
        return $this->orders;
    }

    public function setOrders(?OrderModel $orders): self
    {
        $this->orders = $orders;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getJsondata(): ?array
    {
        return $this->jsondata;
    }

    public function setJsondata(array $jsondata): self
    {
        $this->jsondata = $jsondata;

        return $this;
    }




 


}
