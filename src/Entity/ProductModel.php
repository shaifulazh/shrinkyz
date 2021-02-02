<?php
namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

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
     */
    private $product_name;

    /**
     * @ORM\Column(type="float")
     */
    private $product_price;


    /**
     * @ORM\Column(type="text", nullable=true)
     * 
     */
    private $product_desc;


    /**
     * @ORM\Column(type="integer")
     */
    private $product_stock;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="productModels")
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CartModel", mappedBy="product", cascade={"REMOVE"})
     */
    private $cart;

    /**
     * @ORM\OneToMany(targetEntity=ProductDetails::class, mappedBy="product")
     */
    private $productDetailss;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, mappedBy="productmodel")
     */
    private $categories;



    public function __construct()
    {
        $this->cart = new ArrayCollection();
        $this->productDetailss = new ArrayCollection();
        $this->categories = new ArrayCollection();
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
        if ($this->cart->contains($cart)) {
            $this->cart->removeElement($cart);
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
            $category->addProductmodel($this);
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->categories->removeElement($category)) {
            $category->removeProductmodel($this);
        }

        return $this;
    }


 

  
}
