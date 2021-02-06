<?php

namespace App\Entity;

use App\Repository\SubcategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SubcategoryRepository::class)
 */
class Subcategory
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
    private $subcategoryname;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="subcategory")
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity=Subtwocategory::class, mappedBy="subcategory")
     */
    private $Subtwocategory;

    /**
     * @ORM\ManyToMany(targetEntity=ProductModel::class, inversedBy="subcategories")
     */
    private $product;

    public function __construct()
    {
        $this->Subtwocategory = new ArrayCollection();
        $this->product = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubcategoryname(): ?string
    {
        return $this->subcategoryname;
    }

    public function setSubcategoryname(string $subcategoryname): self
    {
        $this->subcategoryname = $subcategoryname;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection|Subtwocategory[]
     */
    public function getSubtwocategory(): Collection
    {
        return $this->Subtwocategory;
    }

    public function addSubtwocategory(Subtwocategory $subtwocategory): self
    {
        if (!$this->Subtwocategory->contains($subtwocategory)) {
            $this->Subtwocategory[] = $subtwocategory;
            $subtwocategory->setSubcategory($this);
        }

        return $this;
    }

    public function removeSubtwocategory(Subtwocategory $subtwocategory): self
    {
        if ($this->Subtwocategory->removeElement($subtwocategory)) {
            // set the owning side to null (unless already changed)
            if ($subtwocategory->getSubcategory() === $this) {
                $subtwocategory->setSubcategory(null);
            }
        }

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
