<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ImageFileRepository")
 */
class ImageFile
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
    private $filename;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $default_name;

    /**
     * @ORM\ManyToMany(targetEntity=ProductModel::class, mappedBy="pictures")
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

    public function getFilename(): ?string
    {
        return $this->filename;
    }

    public function setFilename(string $filename): self
    {
        $this->filename = $filename;

        return $this;
    }

    public function getDefaultName(): ?string
    {
        return $this->default_name;
    }

    public function setDefaultName(string $default_name): self
    {
        $this->default_name = $default_name;

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
            $productModel->addPicture($this);
        }

        return $this;
    }

    public function removeProductModel(ProductModel $productModel): self
    {
        if ($this->productModels->removeElement($productModel)) {
            $productModel->removePicture($this);
        }

        return $this;
    }



}
