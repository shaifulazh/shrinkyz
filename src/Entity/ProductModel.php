<?php
namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductModelRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class ProductModel
{
    use Timestamps;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     */
    private $product_name;

    /**
     * @ORM\Column(type="float")
     * 
     */
    private $product_price;


    /**
     * @ORM\Column(type="text", nullable=true)
     * 
     */
    private $product_desc;


    /**
     * @ORM\Column(type="integer")
     * 
     */
    private $product_stock;

   /**
     * @ORM\OneToMany(targetEntity="App\Entity\CartModel", mappedBy="product", cascade={"REMOVE"})
     * 
     */
    private $cart;

    /**
     * @ORM\OneToMany(targetEntity=ProductDetails::class, mappedBy="product")
     * 
     */
    private $productDetailss;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, mappedBy="product_model")
     * 
     */
    private $categories;

    /**
     * @ORM\ManyToMany(targetEntity=ImageFile::class, inversedBy="productModels")
     * 
     */
    private $pictures;

    /**
     * @ORM\ManyToMany(targetEntity=Subcategory::class, mappedBy="product")
     * 
     */
    private $subcategories;

    /**
     * @ORM\ManyToMany(targetEntity=Subtwocategory::class, mappedBy="product")
     * 
     */
    private $subtwocategories;

    /**
     * @ORM\Column(type="integer",nullable=true)
     */
    private $view;





    public function __construct()
    {
        $this->cart = new ArrayCollection();
        $this->productDetailss = new ArrayCollection();
        $this->categories = new ArrayCollection();
        $this->pictures = new ArrayCollection();
        $this->subcategories = new ArrayCollection();
        $this->subtwocategories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProductName(): ?string
    {
        return $this->product_name;
    }

    public function setProductName(string $product_name): self
    {
        $this->product_name = $product_name;

        return $this;
    }

    public function getProductPrice(): ?float
    {
        return $this->product_price;
    }

    public function setProductPrice(float $product_price): self
    {
        $this->product_price = $product_price;

        return $this;
    }

    public function getProductDesc(): ?string
    {
        return $this->product_desc;
    }

    public function setProductDesc(?string $product_desc): self
    {
        $this->product_desc = $product_desc;

        return $this;
    }

    public function getProductStock(): ?int
    {
        return $this->product_stock;
    }

    public function setProductStock(int $product_stock): self
    {
        $this->product_stock = $product_stock;

        return $this;
    }

    /**
     * @return Collection|CartModel[]
     */
    public function getCart(): Collection
    {
        return $this->cart;
    }

    public function addCart(CartModel $cart): self
    {
        if (!$this->cart->contains($cart)) {
            $this->cart[] = $cart;
            $cart->setProduct($this);
        }

        return $this;
    }

    public function removeCart(CartModel $cart): self
    {
        if ($this->cart->removeElement($cart)) {
            // set the owning side to null (unless already changed)
            if ($cart->getProduct() === $this) {
                $cart->setProduct(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProductDetails[]
     */
    public function getProductDetailss(): Collection
    {
        return $this->productDetailss;
    }

    public function addProductDetailss(ProductDetails $productDetailss): self
    {
        if (!$this->productDetailss->contains($productDetailss)) {
            $this->productDetailss[] = $productDetailss;
            $productDetailss->setProduct($this);
        }

        return $this;
    }

    public function removeProductDetailss(ProductDetails $productDetailss): self
    {
        if ($this->productDetailss->removeElement($productDetailss)) {
            // set the owning side to null (unless already changed)
            if ($productDetailss->getProduct() === $this) {
                $productDetailss->setProduct(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
            $category->addProductModel($this);
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->categories->removeElement($category)) {
            $category->removeProductModel($this);
        }

        return $this;
    }

    /**
     * @return Collection|ImageFile[]
     */
    public function getPictures(): Collection
    {
        return $this->pictures;
    }

    public function addPicture(ImageFile $picture): self
    {
        if (!$this->pictures->contains($picture)) {
            $this->pictures[] = $picture;
        }

        return $this;
    }

    public function removePicture(ImageFile $picture): self
    {
        $this->pictures->removeElement($picture);

        return $this;
    }

    /**
     * @return Collection|Subcategory[]
     */
    public function getSubcategories(): Collection
    {
        return $this->subcategories;
    }

    public function addSubcategory(Subcategory $subcategory): self
    {
        if (!$this->subcategories->contains($subcategory)) {
            $this->subcategories[] = $subcategory;
            $subcategory->addProduct($this);
        }

        return $this;
    }

    public function removeSubcategory(Subcategory $subcategory): self
    {
        if ($this->subcategories->removeElement($subcategory)) {
            $subcategory->removeProduct($this);
        }

        return $this;
    }

    /**
     * @return Collection|Subtwocategory[]
     */
    public function getSubtwocategories(): Collection
    {
        return $this->subtwocategories;
    }

    public function addSubtwocategory(Subtwocategory $subtwocategory): self
    {
        if (!$this->subtwocategories->contains($subtwocategory)) {
            $this->subtwocategories[] = $subtwocategory;
            $subtwocategory->addProduct($this);
        }

        return $this;
    }

    public function removeSubtwocategory(Subtwocategory $subtwocategory): self
    {
        if ($this->subtwocategories->removeElement($subtwocategory)) {
            $subtwocategory->removeProduct($this);
        }

        return $this;
    }

    public function getView(): ?int
    {
        if ($this->view === null){
            $this->view = 0;
        }
        return $this->view;
    }


    public function addView(): self
    {
        if ($this->view === null){
            $this->view = 0;
        }
        $this->view = $this->view + 1;
        return $this;
    }

    public function setView(?int $view): self
    {
        $this->view = $view;

        return $this;
    }

}