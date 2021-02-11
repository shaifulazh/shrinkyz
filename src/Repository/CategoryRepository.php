<?php

namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Category::class);
    }

    // /**
    //  * @return Category[] Returns an array of Category objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Category
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findOneBySubtwocategoryId($value): ?Category
    {
        return $this->createQueryBuilder('c')
            ->join('c.subcategory', 'subcat')
            ->join('subcat.Subtwocategory', 'd')
            ->andWhere('d.id = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    public function findOneBySubcategoryId($value): ?Category
    {
        return $this->createQueryBuilder('c')
            ->join('c.subcategory', 'subcat')
            ->andWhere('subcat.id = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    public function findCatSubSubtwo()
    {
       $em  = $this->createQueryBuilder('c');
      return $em->select('c','s','sb')
            ->join('c.subcategory', 's')
            ->join('s.Subtwocategory', 'sb')
            ->getQuery()
            ->getResult()
        ;
    }

    public function findCatSub()
    {
       $em  = $this->createQueryBuilder('c');
      return $em->select('c','s')
            ->join('c.subcategory', 's')
            ->getQuery()
            ->getResult()
        ;
    }



}
