<?php

namespace App\Repository;

use App\Entity\CheckOutData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CheckOutData|null find($id, $lockMode = null, $lockVersion = null)
 * @method CheckOutData|null findOneBy(array $criteria, array $orderBy = null)
 * @method CheckOutData[]    findAll()
 * @method CheckOutData[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CheckOutDataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CheckOutData::class);
    }

    // /**
    //  * @return CheckOutData[] Returns an array of CheckOutData objects
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
    public function findOneBySomeField($value): ?CheckOutData
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
