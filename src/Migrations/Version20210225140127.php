<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210225140127 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE order_model DROP FOREIGN KEY FK_540B0624F5B7AF75');
        $this->addSql('DROP INDEX UNIQ_540B0624F5B7AF75 ON order_model');
        $this->addSql('ALTER TABLE order_model DROP address_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE order_model ADD address_id INT NOT NULL');
        $this->addSql('ALTER TABLE order_model ADD CONSTRAINT FK_540B0624F5B7AF75 FOREIGN KEY (address_id) REFERENCES address_model (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_540B0624F5B7AF75 ON order_model (address_id)');
    }
}
