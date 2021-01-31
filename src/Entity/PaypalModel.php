<?php

namespace App\Entity;

use App\Repository\PaypalModelRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PaypalModelRepository::class)
 */
class PaypalModel
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $paypalid;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $href;

    /**
     * @ORM\Column(type="integer")
     */
    private $userid;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $status;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $orderModel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $amount;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $currency;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $paypalfee;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $refundhref;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPaypalid(): ?string
    {
        return $this->paypalid;
    }

    public function setPaypalid(string $paypalid): self
    {
        $this->paypalid = $paypalid;

        return $this;
    }

    public function getHref(): ?string
    {
        return $this->href;
    }

    public function setHref(string $href): self
    {
        $this->href = $href;

        return $this;
    }

    public function getUserid(): ?int
    {
        return $this->userid;
    }

    public function setUserid(int $userid): self
    {
        $this->userid = $userid;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getOrderModel(): ?string
    {
        return $this->orderModel;
    }

    public function setOrderModel(?string $orderModel): self
    {
        $this->orderModel = $orderModel;

        return $this;
    }

    public function getAmount(): ?string
    {
        return $this->amount;
    }

    public function setAmount(?string $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(?string $currency): self
    {
        $this->currency = $currency;

        return $this;
    }

    public function getPaypalfee(): ?string
    {
        return $this->paypalfee;
    }

    public function setPaypalfee(?string $paypalfee): self
    {
        $this->paypalfee = $paypalfee;

        return $this;
    }

    public function getRefundhref(): ?string
    {
        return $this->refundhref;
    }

    public function setRefundhref(?string $refundhref): self
    {
        $this->refundhref = $refundhref;

        return $this;
    }
}