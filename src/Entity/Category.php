<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $details;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProductModel", mappedBy="category", cascade={"REMOVE"})
     */
    private $productModels;

    public function __construct()
    {
        $this->productModels = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDetails(): ?string
    {
        return $this->details;
    }

    public function setDetails(string $details): self
    {
        $this->details = $details;

        return $this;
    }

    /**
     * @return Collection|ProductModel[]
     */
    public function getProductModels(): Collection
    {
        return $this->productModels;
    }

    public function addProductModel(ProductModel $productModel): self
    {
        if (!$this->productModels->contains($productModel)) {
            $this->productModels[] = $productModel;
            $productModel->setCategory($this);
        }

        return $this;
    }

    public function removeProductModel(ProductModel $productModel): self
    {
        if ($this->productModels->contains($productModel)) {
            $this->productModels->removeElement($productModel);
            // set the owning side to null (unless already changed)
            if ($productModel->getCategory() === $this) {
                $productModel->setCategory(null);
            }
        }

        return $this;
    }
}
