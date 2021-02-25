<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OrderRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class OrderModel
{
    use Timestamps;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="integer")
     */
    private $total;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\OrderDetails", mappedBy="orders", cascade={"REMOVE"})
     */
    private $orderdetails;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $status;



    /**
     * @ORM\Column(type="string", length=255)
     */
    private $payment_method;



    /**
     * @ORM\OneToOne(targetEntity=PaypalModel::class, cascade={"persist", "remove"})
     */
    private $paypal;

    /**
     * @ORM\ManyToOne(targetEntity=AddressModel::class)
     */
    private $address;





    public function __construct()
    {
        $this->orderdetails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTotal(): ?int
    {
        return $this->total;
    }

    public function setTotal(int $total): self
    {
        $this->total = $total;

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

    public function getPaymentMethod(): ?string
    {
        return $this->payment_method;
    }

    public function setPaymentMethod(string $payment_method): self
    {
        $this->payment_method = $payment_method;

        return $this;
    }




    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|OrderDetails[]
     */
    public function getOrderdetails(): Collection
    {
        return $this->orderdetails;
    }

    public function addOrderdetail(OrderDetails $orderdetail): self
    {
        if (!$this->orderdetails->contains($orderdetail)) {
            $this->orderdetails[] = $orderdetail;
            $orderdetail->setOrders($this);
        }

        return $this;
    }

    public function removeOrderdetail(OrderDetails $orderdetail): self
    {
        if ($this->orderdetails->removeElement($orderdetail)) {
            // set the owning side to null (unless already changed)
            if ($orderdetail->getOrders() === $this) {
                $orderdetail->setOrders(null);
            }
        }

        return $this;
    }

    public function getPaypal(): ?PaypalModel
    {
        return $this->paypal;
    }

    public function setPaypal(?PaypalModel $paypal): self
    {
        $this->paypal = $paypal;

        return $this;
    }

    public function getAddress(): ?AddressModel
    {
        return $this->address;
    }

    public function setAddress(?AddressModel $address): self
    {
        $this->address = $address;

        return $this;
    }


}
