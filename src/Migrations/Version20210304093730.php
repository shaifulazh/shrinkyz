<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210304093730 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE check_out_data (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, total DOUBLE PRECISION NOT NULL, shipping DOUBLE PRECISION NOT NULL, finaltotal DOUBLE PRECISION DEFAULT NULL, UNIQUE INDEX UNIQ_9900362EA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE country (id INT AUTO_INCREMENT NOT NULL, countryname VARCHAR(50) NOT NULL, countrycode VARCHAR(10) NOT NULL, smallpacket250g DOUBLE PRECISION DEFAULT NULL, smallpacket500g DOUBLE PRECISION DEFAULT NULL, smallpacket1kg DOUBLE PRECISION DEFAULT NULL, smallpacket1500g DOUBLE PRECISION DEFAULT NULL, smallpacket2kg DOUBLE PRECISION DEFAULT NULL, parcel1kg DOUBLE PRECISION DEFAULT NULL, parcelext500g DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE check_out_data ADD CONSTRAINT FK_9900362EA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE address_model ADD countrydata_id INT DEFAULT NULL, ADD user_id INT DEFAULT NULL, ADD address_line_2 VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE address_model ADD CONSTRAINT FK_E03005F98EBEADCC FOREIGN KEY (countrydata_id) REFERENCES country (id)');
        $this->addSql('ALTER TABLE address_model ADD CONSTRAINT FK_E03005F9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_E03005F98EBEADCC ON address_model (countrydata_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E03005F9A76ED395 ON address_model (user_id)');
        $this->addSql('ALTER TABLE order_details ADD description VARCHAR(255) DEFAULT NULL, ADD jsondata JSON NOT NULL');
        $this->addSql('ALTER TABLE order_model DROP INDEX UNIQ_540B0624F5B7AF75, ADD INDEX IDX_540B0624F5B7AF75 (address_id)');
        $this->addSql('ALTER TABLE order_model ADD reference_id VARCHAR(50) NOT NULL, ADD shipping DOUBLE PRECISION DEFAULT NULL, ADD amount DOUBLE PRECISION DEFAULT NULL, ADD subtotal DOUBLE PRECISION DEFAULT NULL, CHANGE address_id address_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE paypal_model ADD gross_amount DOUBLE PRECISION DEFAULT NULL, ADD net_amount DOUBLE PRECISION DEFAULT NULL, ADD gross_amount_currency VARCHAR(10) DEFAULT NULL, ADD net_amount_currency VARCHAR(10) DEFAULT NULL, ADD amount_currency VARCHAR(10) DEFAULT NULL, ADD paypal_fee_currency VARCHAR(10) DEFAULT NULL, ADD payment_date DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE address_model DROP FOREIGN KEY FK_E03005F98EBEADCC');
        $this->addSql('DROP TABLE check_out_data');
        $this->addSql('DROP TABLE country');
        $this->addSql('ALTER TABLE address_model DROP FOREIGN KEY FK_E03005F9A76ED395');
        $this->addSql('DROP INDEX IDX_E03005F98EBEADCC ON address_model');
        $this->addSql('DROP INDEX UNIQ_E03005F9A76ED395 ON address_model');
        $this->addSql('ALTER TABLE address_model DROP countrydata_id, DROP user_id, DROP address_line_2');
        $this->addSql('ALTER TABLE order_details DROP description, DROP jsondata');
        $this->addSql('ALTER TABLE order_model DROP INDEX IDX_540B0624F5B7AF75, ADD UNIQUE INDEX UNIQ_540B0624F5B7AF75 (address_id)');
        $this->addSql('ALTER TABLE order_model DROP reference_id, DROP shipping, DROP amount, DROP subtotal, CHANGE address_id address_id INT NOT NULL');
        $this->addSql('ALTER TABLE paypal_model DROP gross_amount, DROP net_amount, DROP gross_amount_currency, DROP net_amount_currency, DROP amount_currency, DROP paypal_fee_currency, DROP payment_date');
    }
}
