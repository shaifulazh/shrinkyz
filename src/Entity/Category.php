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
     * @ORM\ManyToMany(targetEntity=ProductModel::class, inversedBy="categories")
     */
    private $product_model;

    public function __construct()
    {
        $this->product_model = new ArrayCollection();
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

    /**
     * @return Collection|ProductModel[]
     */
    public function getProductModel(): Collection
    {
        return $this->product_model;
    }

    public function addProductModel(ProductModel $productModel): self
    {
        if (!$this->product_model->contains($productModel)) {
            $this->product_model[] = $productModel;
        }

        return $this;
    }

    public function removeProductModel(ProductModel $productModel): self
    {
        $this->product_model->removeElement($productModel);

        return $this;
    }

     
}
