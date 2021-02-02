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
    private $productmodel;



    public function __construct()
    {
        $this->productModels = new ArrayCollection();
        $this->productmodel = new ArrayCollection();
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
    public function getProductmodel(): Collection
    {
        return $this->productmodel;
    }

    public function addProductmodel(ProductModel $productmodel): self
    {
        if (!$this->productmodel->contains($productmodel)) {
            $this->productmodel[] = $productmodel;
        }

        return $this;
    }

    public function removeProductmodel(ProductModel $productmodel): self
    {
        $this->productmodel->removeElement($productmodel);

        return $this;
    }
    
}
