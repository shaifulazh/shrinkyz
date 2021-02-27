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

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $gross_amount;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $net_amount;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $gross_amount_currency;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $net_amount_currency;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $amount_currency;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $paypal_fee_currency;

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

    public function getGrossAmount(): ?float
    {
        return $this->gross_amount;
    }

    public function setGrossAmount(float $gross_amount): self
    {
        $this->gross_amount = $gross_amount;

        return $this;
    }

    public function getNetAmount(): ?float
    {
        return $this->net_amount;
    }

    public function setNetAmount(float $net_amount): self
    {
        $this->net_amount = $net_amount;

        return $this;
    }

    public function getGrossAmountCurrency(): ?string
    {
        return $this->gross_amount_currency;
    }

    public function setGrossAmountCurrency(?string $gross_amount_currency): self
    {
        $this->gross_amount_currency = $gross_amount_currency;

        return $this;
    }

    public function getNetAmountCurrency(): ?string
    {
        return $this->net_amount_currency;
    }

    public function setNetAmountCurrency(?string $net_amount_currency): self
    {
        $this->net_amount_currency = $net_amount_currency;

        return $this;
    }

    public function getAmountCurrency(): ?string
    {
        return $this->amount_currency;
    }

    public function setAmountCurrency(?string $amount_currency): self
    {
        $this->amount_currency = $amount_currency;

        return $this;
    }

    public function getPaypalFeeCurrency(): ?string
    {
        return $this->paypal_fee_currency;
    }

    public function setPaypalFeeCurrency(?string $paypal_fee_currency): self
    {
        $this->paypal_fee_currency = $paypal_fee_currency;

        return $this;
    }
}