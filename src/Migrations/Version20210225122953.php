<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210225122953 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE address_model ADD countrydata_id INT DEFAULT NULL, ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE address_model ADD CONSTRAINT FK_E03005F98EBEADCC FOREIGN KEY (countrydata_id) REFERENCES country (id)');
        $this->addSql('ALTER TABLE address_model ADD CONSTRAINT FK_E03005F9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_E03005F98EBEADCC ON address_model (countrydata_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E03005F9A76ED395 ON address_model (user_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE address_model DROP FOREIGN KEY FK_E03005F98EBEADCC');
        $this->addSql('ALTER TABLE address_model DROP FOREIGN KEY FK_E03005F9A76ED395');
        $this->addSql('DROP INDEX IDX_E03005F98EBEADCC ON address_model');
        $this->addSql('DROP INDEX UNIQ_E03005F9A76ED395 ON address_model');
        $this->addSql('ALTER TABLE address_model DROP countrydata_id, DROP user_id');
    }
}
