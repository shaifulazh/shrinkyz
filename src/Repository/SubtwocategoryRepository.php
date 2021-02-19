<?php

namespace App\Repository;

use App\Entity\Subtwocategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Subtwocategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method Subtwocategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method Subtwocategory[]    findAll()
 * @method Subtwocategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SubtwocategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Subtwocategory::class);
    }

    // /**
    //  * @return Subtwocategory[] Returns an array of Subtwocategory objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Subtwocategory
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findBySubCategory($value)
    {
        return $this->createQueryBuilder('s')
        ->join('s.subcategory', 'c')
        ->andWhere('c.id = :val')
        ->setParameter('val', $value)
        ->getQuery()
        ->getResult()
        ;
    }

    // public function findBySubtwo($value)
    // {
    //     return $this->createQueryBuilder('s')
    //     ->select('s')
    //     ->innerJoin('s.subcategory', 't')
    //     ->andWhere('t.id = :val')
    //     ->setParameter('val', $value)
    //     ->getQuery()
    //     ->getResult()
    //     ;
    // }
}
