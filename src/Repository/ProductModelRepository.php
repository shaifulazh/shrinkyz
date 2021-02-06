<?php

namespace App\Repository;

use App\Entity\ProductModel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProductModel|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductModel|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductModel[]    findAll()
 * @method ProductModel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductModelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProductModel::class);
    }

     /**
      * @return ProductModel[] Returns an array of ProductModel objects
      */
    
    public function findByLike($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.product_name LIKE :val')
            ->setParameter('val', '%'. $value . '%')
            ->orderBy('p.product_name', 'ASC')
            
            ->getQuery()
            ->getResult()
        ;
    }
    

    /*
    public function findOneBySomeField($value): ?ProductModel
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findCategoryById($id)
    {
        return $this->createQueryBuilder('a')
        // ->select('product')
        ->innerJoin('a.categories', 'category')
        ->where('category.id = :id')
        ->setParameter('id', $id)
        ->getQuery()
        ->getResult();
    }


    public function findBySubcategoryId($id)
    {
        return $this->createQueryBuilder('a')
        // ->select('product')
        ->innerJoin('a.subcategories', 'category')
        ->where('category.id = :id')
        ->setParameter('id', $id)
        ->getQuery()
        ->getResult();
    }

    public function findBySubtwocategoryId($id)
    {
        return $this->createQueryBuilder('a')
        // ->select('product')
        ->innerJoin('a.subtwocategories', 'category')
        ->where('category.id = :id')
        ->setParameter('id', $id)
        ->getQuery()
        ->getResult();
    }
}
