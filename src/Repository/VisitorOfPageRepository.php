<?php

namespace App\Repository;

use App\Entity\VisitorOfPage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method VisitorOfPage|null find($id, $lockMode = null, $lockVersion = null)
 * @method VisitorOfPage|null findOneBy(array $criteria, array $orderBy = null)
 * @method VisitorOfPage[]    findAll()
 * @method VisitorOfPage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VisitorOfPageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VisitorOfPage::class);
    }

    // /**
    //  * @return VisitorOfPage[] Returns an array of VisitorOfPage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VisitorOfPage
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
