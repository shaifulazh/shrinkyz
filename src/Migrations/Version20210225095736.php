<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210225095736 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE country ADD smallpacket250g DOUBLE PRECISION DEFAULT NULL, ADD smallpacket500g DOUBLE PRECISION DEFAULT NULL, ADD smallpacket1kg DOUBLE PRECISION DEFAULT NULL, ADD smallpacket1500g DOUBLE PRECISION DEFAULT NULL, ADD smallpacket2kg DOUBLE PRECISION DEFAULT NULL, ADD parcel1kg DOUBLE PRECISION DEFAULT NULL, ADD parcelext500g DOUBLE PRECISION DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE country DROP smallpacket250g, DROP smallpacket500g, DROP smallpacket1kg, DROP smallpacket1500g, DROP smallpacket2kg, DROP parcel1kg, DROP parcelext500g');
    }
}
