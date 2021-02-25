<?php

namespace App\Repository;

use App\Entity\AddressModel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AddressModel|null find($id, $lockMode = null, $lockVersion = null)
 * @method AddressModel|null findOneBy(array $criteria, array $orderBy = null)
 * @method AddressModel[]    findAll()
 * @method AddressModel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AddressModelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AddressModel::class);
    }

    // /**
    //  * @return AddressModel[] Returns an array of AddressModel objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    
    public function findOneByUser($value): ?AddressModel
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.user = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    
}
