<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210226013242 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE country (id INT AUTO_INCREMENT NOT NULL, countryname VARCHAR(50) NOT NULL, countrycode VARCHAR(10) NOT NULL, smallpacket250g DOUBLE PRECISION DEFAULT NULL, smallpacket500g DOUBLE PRECISION DEFAULT NULL, smallpacket1kg DOUBLE PRECISION DEFAULT NULL, smallpacket1500g DOUBLE PRECISION DEFAULT NULL, smallpacket2kg DOUBLE PRECISION DEFAULT NULL, parcel1kg DOUBLE PRECISION DEFAULT NULL, parcelext500g DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE address_model ADD countrydata_id INT DEFAULT NULL, ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE address_model ADD CONSTRAINT FK_E03005F98EBEADCC FOREIGN KEY (countrydata_id) REFERENCES country (id)');
        $this->addSql('ALTER TABLE address_model ADD CONSTRAINT FK_E03005F9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_E03005F98EBEADCC ON address_model (countrydata_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E03005F9A76ED395 ON address_model (user_id)');
        $this->addSql('ALTER TABLE order_details CHANGE orders_id orders_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE order_model DROP INDEX UNIQ_540B0624F5B7AF75, ADD INDEX IDX_540B0624F5B7AF75 (address_id)');
        $this->addSql('ALTER TABLE order_model CHANGE paypal_id paypal_id INT DEFAULT NULL, CHANGE address_id address_id INT DEFAULT NULL, CHANGE status status VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE paypal_model CHANGE status status VARCHAR(255) DEFAULT NULL, CHANGE order_model order_model VARCHAR(255) DEFAULT NULL, CHANGE amount amount VARCHAR(255) DEFAULT NULL, CHANGE currency currency VARCHAR(255) DEFAULT NULL, CHANGE paypalfee paypalfee VARCHAR(255) DEFAULT NULL, CHANGE refundhref refundhref VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE product_details CHANGE product_id product_id INT DEFAULT NULL, CHANGE detailname detailname VARCHAR(255) DEFAULT NULL, CHANGE datadesc datadesc VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE product_model CHANGE view view INT DEFAULT NULL');
        $this->addSql('ALTER TABLE subcategory CHANGE category_id category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE subtwocategory CHANGE subcategory_id subcategory_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL, CHANGE firstname firstname VARCHAR(255) DEFAULT NULL, CHANGE lastname lastname VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE visitor_of_page CHANGE country country VARCHAR(255) DEFAULT NULL, CHANGE ip ip VARCHAR(255) DEFAULT NULL, CHANGE state state VARCHAR(255) DEFAULT NULL, CHANGE latitude latitude VARCHAR(255) DEFAULT NULL, CHANGE longitute longitute VARCHAR(255) DEFAULT NULL, CHANGE postal postal VARCHAR(255) DEFAULT NULL, CHANGE city city VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE address_model DROP FOREIGN KEY FK_E03005F98EBEADCC');
        $this->addSql('DROP TABLE country');
        $this->addSql('ALTER TABLE address_model DROP FOREIGN KEY FK_E03005F9A76ED395');
        $this->addSql('DROP INDEX IDX_E03005F98EBEADCC ON address_model');
        $this->addSql('DROP INDEX UNIQ_E03005F9A76ED395 ON address_model');
        $this->addSql('ALTER TABLE address_model DROP countrydata_id, DROP user_id');
        $this->addSql('ALTER TABLE order_details CHANGE orders_id orders_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE order_model DROP INDEX IDX_540B0624F5B7AF75, ADD UNIQUE INDEX UNIQ_540B0624F5B7AF75 (address_id)');
        $this->addSql('ALTER TABLE order_model CHANGE paypal_id paypal_id INT DEFAULT NULL, CHANGE address_id address_id INT NOT NULL, CHANGE status status VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE paypal_model CHANGE status status VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE order_model order_model VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE amount amount VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE currency currency VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE paypalfee paypalfee VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE refundhref refundhref VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE product_details CHANGE product_id product_id INT DEFAULT NULL, CHANGE detailname detailname VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE datadesc datadesc VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE product_model CHANGE view view INT DEFAULT NULL');
        $this->addSql('ALTER TABLE subcategory CHANGE category_id category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE subtwocategory CHANGE subcategory_id subcategory_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`, CHANGE firstname firstname VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE lastname lastname VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE visitor_of_page CHANGE country country VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE ip ip VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE state state VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE latitude latitude VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE longitute longitute VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE postal postal VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`, CHANGE city city VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_general_ci`');
    }
}
