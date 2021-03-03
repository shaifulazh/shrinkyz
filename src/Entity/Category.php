<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"category"})
     *  
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"category"})
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity=ProductModel::class, inversedBy="categories")
     */
    private $product_model;

    /**
     * @ORM\OneToMany(targetEntity=Subcategory::class, mappedBy="category")
     * @Groups({"category"})
     */
    private $subcategory;

    public function __construct()
    {
        $this->product_model = new ArrayCollection();
        $this->subcategory = new ArrayCollection();
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

    /**
     * @return Collection|Subcategory[]
     */
    public function getSubcategory(): Collection
    {
        return $this->subcategory;
    }

    public function addSubcategory(Subcategory $subcategory): self
    {
        if (!$this->subcategory->contains($subcategory)) {
            $this->subcategory[] = $subcategory;
            $subcategory->setCategory($this);
        }

        return $this;
    }

    public function removeSubcategory(Subcategory $subcategory): self
    {
        if ($this->subcategory->removeElement($subcategory)) {
            // set the owning side to null (unless already changed)
            if ($subcategory->getCategory() === $this) {
                $subcategory->setCategory(null);
            }
        }

        return $this;
    }

     
}
