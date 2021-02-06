<?php

namespace App\Entity;

use App\Repository\SubtwocategoryRepository;
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
}
