<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

trait Timestamps
{
    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updateAt;

    /**
     * @ORM\PrePersist()
     */
    public function createdAt()
    {
  

        $this->createdAt = new \DateTime();
        $this->updateAt = new \DateTime();
    }

    /**
     * @ORM\PrePersist()
     */
    public function updatedAt()
    {
        $this->updateAt = new \DateTime();
    }

    public function getCreatedAt()
    {
        return $this->createdAt;
    }
    public function getUpdatedAt()
    {
        return $this->updateAt;
    }
}
