<?php

namespace App\Entity;

use App\Repository\CountryRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CountryRepository::class)
 */
class Country
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $countryname;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $countrycode;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $smallpacket250g;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $smallpacket500g;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $smallpacket1kg;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $smallpacket1500g;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $smallpacket2kg;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $parcel1kg;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $parcelext500g;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCountryname(): ?string
    {
        return $this->countryname;
    }

    public function setCountryname(string $countryname): self
    {
        $this->countryname = $countryname;

        return $this;
    }

    public function getCountrycode(): ?string
    {
        return $this->countrycode;
    }

    public function setCountrycode(string $countrycode): self
    {
        $this->countrycode = $countrycode;

        return $this;
    }

    public function getSmallpacket250g(): ?float
    {
        return $this->smallpacket250g;
    }

    public function setSmallpacket250g(?float $smallpacket250g): self
    {
        $this->smallpacket250g = $smallpacket250g;

        return $this;
    }

    public function getSmallpacket500g(): ?float
    {
        return $this->smallpacket500g;
    }

    public function setSmallpacket500g(?float $smallpacket500g): self
    {
        $this->smallpacket500g = $smallpacket500g;

        return $this;
    }

    public function getSmallpacket1kg(): ?float
    {
        return $this->smallpacket1kg;
    }

    public function setSmallpacket1kg(?float $smallpacket1kg): self
    {
        $this->smallpacket1kg = $smallpacket1kg;

        return $this;
    }

    public function getSmallpacket1500g(): ?float
    {
        return $this->smallpacket1500g;
    }

    public function setSmallpacket1500g(?float $smallpacket1500g): self
    {
        $this->smallpacket1500g = $smallpacket1500g;

        return $this;
    }

    public function getSmallpacket2kg(): ?float
    {
        return $this->smallpacket2kg;
    }

    public function setSmallpacket2kg(?float $smallpacket2kg): self
    {
        $this->smallpacket2kg = $smallpacket2kg;

        return $this;
    }

    public function getParcel1kg(): ?float
    {
        return $this->parcel1kg;
    }

    public function setParcel1kg(?float $parcel1kg): self
    {
        $this->parcel1kg = $parcel1kg;

        return $this;
    }

    public function getParcelext500g(): ?float
    {
        return $this->parcelext500g;
    }

    public function setParcelext500g(?float $parcelext500g): self
    {
        $this->parcelext500g = $parcelext500g;

        return $this;
    }
}
