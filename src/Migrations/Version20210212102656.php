<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210212102656 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE address_model (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, state VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, postcode VARCHAR(255) NOT NULL, phone_number VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cart_model (id INT AUTO_INCREMENT NOT NULL, customer_id INT NOT NULL, product_id INT NOT NULL, qty INT NOT NULL, INDEX IDX_887F1FD19395C3F3 (customer_id), INDEX IDX_887F1FD14584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category_product_model (category_id INT NOT NULL, product_model_id INT NOT NULL, INDEX IDX_68122CCE12469DE2 (category_id), INDEX IDX_68122CCEB2C5DD70 (product_model_id), PRIMARY KEY(category_id, product_model_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image_file (id INT AUTO_INCREMENT NOT NULL, filename VARCHAR(255) NOT NULL, default_name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_details (id INT AUTO_INCREMENT NOT NULL, orders_id INT DEFAULT NULL, qty INT NOT NULL, product_name VARCHAR(255) NOT NULL, product_price DOUBLE PRECISION NOT NULL, product_image VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, update_at DATETIME NOT NULL, INDEX IDX_845CA2C1CFFE9AD6 (orders_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_model (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, paypal_id INT DEFAULT NULL, address_id INT NOT NULL, total INT NOT NULL, status VARCHAR(255) DEFAULT NULL, payment_method VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, update_at DATETIME NOT NULL, INDEX IDX_540B0624A76ED395 (user_id), UNIQUE INDEX UNIQ_540B0624349BE503 (paypal_id), UNIQUE INDEX UNIQ_540B0624F5B7AF75 (address_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE paypal_model (id INT AUTO_INCREMENT NOT NULL, paypalid VARCHAR(255) NOT NULL, href VARCHAR(255) NOT NULL, userid INT NOT NULL, status VARCHAR(255) DEFAULT NULL, order_model VARCHAR(255) DEFAULT NULL, amount VARCHAR(255) DEFAULT NULL, currency VARCHAR(255) DEFAULT NULL, paypalfee VARCHAR(255) DEFAULT NULL, refundhref VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_details (id INT AUTO_INCREMENT NOT NULL, product_id INT DEFAULT NULL, detailname VARCHAR(255) DEFAULT NULL, datadesc VARCHAR(255) DEFAULT NULL, INDEX IDX_A3FF103A4584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_model (id INT AUTO_INCREMENT NOT NULL, product_name VARCHAR(255) NOT NULL, product_price DOUBLE PRECISION NOT NULL, product_desc LONGTEXT DEFAULT NULL, product_stock INT NOT NULL, created_at DATETIME NOT NULL, update_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_model_image_file (product_model_id INT NOT NULL, image_file_id INT NOT NULL, INDEX IDX_9916B3E5B2C5DD70 (product_model_id), INDEX IDX_9916B3E56DB2EB0 (image_file_id), PRIMARY KEY(product_model_id, image_file_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reset_password_request (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, selector VARCHAR(20) NOT NULL, hashed_token VARCHAR(100) NOT NULL, requested_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', expires_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_7CE748AA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subcategory (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, subcategoryname VARCHAR(255) NOT NULL, INDEX IDX_DDCA44812469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subcategory_product_model (subcategory_id INT NOT NULL, product_model_id INT NOT NULL, INDEX IDX_EAF691725DC6FE57 (subcategory_id), INDEX IDX_EAF69172B2C5DD70 (product_model_id), PRIMARY KEY(subcategory_id, product_model_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subtwocategory (id INT AUTO_INCREMENT NOT NULL, subcategory_id INT DEFAULT NULL, subtwocategoryname VARCHAR(255) NOT NULL, INDEX IDX_9EDDE5145DC6FE57 (subcategory_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subtwocategory_product_model (subtwocategory_id INT NOT NULL, product_model_id INT NOT NULL, INDEX IDX_5C4358D6A60567C2 (subtwocategory_id), INDEX IDX_5C4358D6B2C5DD70 (product_model_id), PRIMARY KEY(subtwocategory_id, product_model_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, is_verified TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, update_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_general_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cart_model ADD CONSTRAINT FK_887F1FD19395C3F3 FOREIGN KEY (customer_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE cart_model ADD CONSTRAINT FK_887F1FD14584665A FOREIGN KEY (product_id) REFERENCES product_model (id)');
        $this->addSql('ALTER TABLE category_product_model ADD CONSTRAINT FK_68122CCE12469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE category_product_model ADD CONSTRAINT FK_68122CCEB2C5DD70 FOREIGN KEY (product_model_id) REFERENCES product_model (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_details ADD CONSTRAINT FK_845CA2C1CFFE9AD6 FOREIGN KEY (orders_id) REFERENCES order_model (id)');
        $this->addSql('ALTER TABLE order_model ADD CONSTRAINT FK_540B0624A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE order_model ADD CONSTRAINT FK_540B0624349BE503 FOREIGN KEY (paypal_id) REFERENCES paypal_model (id)');
        $this->addSql('ALTER TABLE order_model ADD CONSTRAINT FK_540B0624F5B7AF75 FOREIGN KEY (address_id) REFERENCES address_model (id)');
        $this->addSql('ALTER TABLE product_details ADD CONSTRAINT FK_A3FF103A4584665A FOREIGN KEY (product_id) REFERENCES product_model (id)');
        $this->addSql('ALTER TABLE product_model_image_file ADD CONSTRAINT FK_9916B3E5B2C5DD70 FOREIGN KEY (product_model_id) REFERENCES product_model (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_model_image_file ADD CONSTRAINT FK_9916B3E56DB2EB0 FOREIGN KEY (image_file_id) REFERENCES image_file (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT FK_7CE748AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE subcategory ADD CONSTRAINT FK_DDCA44812469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE subcategory_product_model ADD CONSTRAINT FK_EAF691725DC6FE57 FOREIGN KEY (subcategory_id) REFERENCES subcategory (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE subcategory_product_model ADD CONSTRAINT FK_EAF69172B2C5DD70 FOREIGN KEY (product_model_id) REFERENCES product_model (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE subtwocategory ADD CONSTRAINT FK_9EDDE5145DC6FE57 FOREIGN KEY (subcategory_id) REFERENCES subcategory (id)');
        $this->addSql('ALTER TABLE subtwocategory_product_model ADD CONSTRAINT FK_5C4358D6A60567C2 FOREIGN KEY (subtwocategory_id) REFERENCES subtwocategory (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE subtwocategory_product_model ADD CONSTRAINT FK_5C4358D6B2C5DD70 FOREIGN KEY (product_model_id) REFERENCES product_model (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE order_model DROP FOREIGN KEY FK_540B0624F5B7AF75');
        $this->addSql('ALTER TABLE category_product_model DROP FOREIGN KEY FK_68122CCE12469DE2');
        $this->addSql('ALTER TABLE subcategory DROP FOREIGN KEY FK_DDCA44812469DE2');
        $this->addSql('ALTER TABLE product_model_image_file DROP FOREIGN KEY FK_9916B3E56DB2EB0');
        $this->addSql('ALTER TABLE order_details DROP FOREIGN KEY FK_845CA2C1CFFE9AD6');
        $this->addSql('ALTER TABLE order_model DROP FOREIGN KEY FK_540B0624349BE503');
        $this->addSql('ALTER TABLE cart_model DROP FOREIGN KEY FK_887F1FD14584665A');
        $this->addSql('ALTER TABLE category_product_model DROP FOREIGN KEY FK_68122CCEB2C5DD70');
        $this->addSql('ALTER TABLE product_details DROP FOREIGN KEY FK_A3FF103A4584665A');
        $this->addSql('ALTER TABLE product_model_image_file DROP FOREIGN KEY FK_9916B3E5B2C5DD70');
        $this->addSql('ALTER TABLE subcategory_product_model DROP FOREIGN KEY FK_EAF69172B2C5DD70');
        $this->addSql('ALTER TABLE subtwocategory_product_model DROP FOREIGN KEY FK_5C4358D6B2C5DD70');
        $this->addSql('ALTER TABLE subcategory_product_model DROP FOREIGN KEY FK_EAF691725DC6FE57');
        $this->addSql('ALTER TABLE subtwocategory DROP FOREIGN KEY FK_9EDDE5145DC6FE57');
        $this->addSql('ALTER TABLE subtwocategory_product_model DROP FOREIGN KEY FK_5C4358D6A60567C2');
        $this->addSql('ALTER TABLE cart_model DROP FOREIGN KEY FK_887F1FD19395C3F3');
        $this->addSql('ALTER TABLE order_model DROP FOREIGN KEY FK_540B0624A76ED395');
        $this->addSql('ALTER TABLE reset_password_request DROP FOREIGN KEY FK_7CE748AA76ED395');
        $this->addSql('DROP TABLE address_model');
        $this->addSql('DROP TABLE cart_model');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE category_product_model');
        $this->addSql('DROP TABLE image_file');
        $this->addSql('DROP TABLE order_details');
        $this->addSql('DROP TABLE order_model');
        $this->addSql('DROP TABLE paypal_model');
        $this->addSql('DROP TABLE product_details');
        $this->addSql('DROP TABLE product_model');
        $this->addSql('DROP TABLE product_model_image_file');
        $this->addSql('DROP TABLE reset_password_request');
        $this->addSql('DROP TABLE subcategory');
        $this->addSql('DROP TABLE subcategory_product_model');
        $this->addSql('DROP TABLE subtwocategory');
        $this->addSql('DROP TABLE subtwocategory_product_model');
        $this->addSql('DROP TABLE user');
    }
}
