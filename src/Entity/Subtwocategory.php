<?php

namespace App\Entity;

use App\Repository\SubtwocategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SubtwocategoryRepository::class)
 */
class Subtwocategory
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
    private $subtwocategoryname;

    /**
     * @ORM\ManyToOne(targetEntity=Subcategory::class, inversedBy="Subtwocategory")
     */
    private $subcategory;

    /**
     * @ORM\ManyToMany(targetEntity=ProductModel::class, inversedBy="subtwocategories")
     */
    private $product;

    public function __construct()
    {
        $this->product = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubtwocategoryname(): ?string
    {
        return $this->subtwocategoryname;
    }

    public function setSubtwocategoryname(string $subtwocategoryname): self
    {
        $this->subtwocategoryname = $subtwocategoryname;

        return $this;
    }

    public function getSubcategory(): ?Subcategory
    {
        return $this->subcategory;
    }

    public function setSubcategory(?Subcategory $subcategory): self
    {
        $this->subcategory = $subcategory;

        return $this;
    }

    /**
     * @return Collection|ProductModel[]
     */
    public function getProduct(): Collection
    {
        return $this->product;
    }

    public function addProduct(ProductModel $product): self
    {
        if (!$this->product->contains($product)) {
            $this->product[] = $product;
        }

        return $this;
    }

    public function removeProduct(ProductModel $product): self
    {
        $this->product->removeElement($product);

        return $this;
    }
}
