<?php

namespace App\Repository;

use App\Entity\VistorOfPage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method VistorOfPage|null find($id, $lockMode = null, $lockVersion = null)
 * @method VistorOfPage|null findOneBy(array $criteria, array $orderBy = null)
 * @method VistorOfPage[]    findAll()
 * @method VistorOfPage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VistorOfPageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VistorOfPage::class);
    }

    // /**
    //  * @return VistorOfPage[] Returns an array of VistorOfPage objects
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
    public function findOneBySomeField($value): ?VistorOfPage
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
