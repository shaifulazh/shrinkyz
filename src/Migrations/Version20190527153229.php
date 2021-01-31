<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190527153229 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE product_model CHANGE category_id category_id INT DEFAULT NULL, CHANGE product_image product_image VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE order_details CHANGE orders_id orders_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE order_model ADD address_id INT DEFAULT NULL, CHANGE status status VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE order_model ADD CONSTRAINT FK_540B0624F5B7AF75 FOREIGN KEY (address_id) REFERENCES address_model (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_540B0624F5B7AF75 ON order_model (address_id)');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL, CHANGE firstname firstname VARCHAR(255) DEFAULT NULL, CHANGE lastname lastname VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE order_details CHANGE orders_id orders_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE order_model DROP FOREIGN KEY FK_540B0624F5B7AF75');
        $this->addSql('DROP INDEX UNIQ_540B0624F5B7AF75 ON order_model');
        $this->addSql('ALTER TABLE order_model DROP address_id, CHANGE status status VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8_general_ci');
        $this->addSql('ALTER TABLE product_model CHANGE category_id category_id INT DEFAULT NULL, CHANGE product_image product_image VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8_general_ci');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT NOT NULL COLLATE utf8mb4_bin, CHANGE firstname firstname VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8_general_ci, CHANGE lastname lastname VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8_general_ci');
    }
}
