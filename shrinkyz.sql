-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: newDB
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address_model`
--

DROP TABLE IF EXISTS `address_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address_model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `postcode` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address_model`
--

LOCK TABLES `address_model` WRITE;
/*!40000 ALTER TABLE `address_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `address_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_model`
--

DROP TABLE IF EXISTS `cart_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_887F1FD19395C3F3` (`customer_id`),
  KEY `IDX_887F1FD14584665A` (`product_id`),
  CONSTRAINT `FK_887F1FD14584665A` FOREIGN KEY (`product_id`) REFERENCES `product_model` (`id`),
  CONSTRAINT `FK_887F1FD19395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_model`
--

LOCK TABLES `cart_model` WRITE;
/*!40000 ALTER TABLE `cart_model` DISABLE KEYS */;
INSERT INTO `cart_model` VALUES (1,2,4,1),(2,3,4,1);
/*!40000 ALTER TABLE `cart_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (2,'Earrings');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_product_model`
--

DROP TABLE IF EXISTS `category_product_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_product_model` (
  `category_id` int(11) NOT NULL,
  `product_model_id` int(11) NOT NULL,
  PRIMARY KEY (`category_id`,`product_model_id`),
  KEY `IDX_68122CCE12469DE2` (`category_id`),
  KEY `IDX_68122CCEB2C5DD70` (`product_model_id`),
  CONSTRAINT `FK_68122CCE12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_68122CCEB2C5DD70` FOREIGN KEY (`product_model_id`) REFERENCES `product_model` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_product_model`
--

LOCK TABLES `category_product_model` WRITE;
/*!40000 ALTER TABLE `category_product_model` DISABLE KEYS */;
INSERT INTO `category_product_model` VALUES (2,2),(2,4);
/*!40000 ALTER TABLE `category_product_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_file`
--

DROP TABLE IF EXISTS `image_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `default_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_file`
--

LOCK TABLES `image_file` WRITE;
/*!40000 ALTER TABLE `image_file` DISABLE KEYS */;
INSERT INTO `image_file` VALUES (2,'73fe92775403fdf3fc22036856f56efa.jpeg','/var/www/html/v2/shrinkyz/public/images//73fe92775403fdf3fc22036856f56efa.jpeg'),(3,'28cc9880b8cdd8a96b5db0b98b7bf59f.jpeg','/var/www/html/v2/shrinkyz/public/images//28cc9880b8cdd8a96b5db0b98b7bf59f.jpeg'),(4,'862c04225841b45f56770e3621d4dd4d.jpeg','/var/www/html/v2/shrinkyz/public/images//862c04225841b45f56770e3621d4dd4d.jpeg'),(6,'de30f72ac6a41358a3aeb66235375c78.jpeg','/var/www/html/v2/shrinkyz/public/images//de30f72ac6a41358a3aeb66235375c78.jpeg'),(7,'2f280b09e32685d592c0929b04f62b95.jpeg','/var/www/html/v2/shrinkyz/public/images//2f280b09e32685d592c0929b04f62b95.jpeg'),(8,'9435e6578366cd09b6e734e6c6abafe7.jpeg','/var/www/html/v2/shrinkyz/public/images//9435e6578366cd09b6e734e6c6abafe7.jpeg'),(9,'3d8cd307e5e7d751f422a4cb312b1d0b.jpeg','/var/www/html/v2/shrinkyz/public/images//3d8cd307e5e7d751f422a4cb312b1d0b.jpeg');
/*!40000 ALTER TABLE `image_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orders_id` int(11) DEFAULT NULL,
  `qty` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` double NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_845CA2C1CFFE9AD6` (`orders_id`),
  CONSTRAINT `FK_845CA2C1CFFE9AD6` FOREIGN KEY (`orders_id`) REFERENCES `order_model` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_model`
--

DROP TABLE IF EXISTS `order_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `paypal_id` int(11) DEFAULT NULL,
  `address_id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `payment_method` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_540B0624F5B7AF75` (`address_id`),
  UNIQUE KEY `UNIQ_540B0624349BE503` (`paypal_id`),
  KEY `IDX_540B0624A76ED395` (`user_id`),
  CONSTRAINT `FK_540B0624349BE503` FOREIGN KEY (`paypal_id`) REFERENCES `paypal_model` (`id`),
  CONSTRAINT `FK_540B0624A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_540B0624F5B7AF75` FOREIGN KEY (`address_id`) REFERENCES `address_model` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_model`
--

LOCK TABLES `order_model` WRITE;
/*!40000 ALTER TABLE `order_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paypal_model`
--

DROP TABLE IF EXISTS `paypal_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paypal_model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paypalid` varchar(255) NOT NULL,
  `href` varchar(255) NOT NULL,
  `userid` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `order_model` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `paypalfee` varchar(255) DEFAULT NULL,
  `refundhref` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paypal_model`
--

LOCK TABLES `paypal_model` WRITE;
/*!40000 ALTER TABLE `paypal_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `paypal_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_details`
--

DROP TABLE IF EXISTS `product_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `detailname` varchar(255) DEFAULT NULL,
  `datadesc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_A3FF103A4584665A` (`product_id`),
  CONSTRAINT `FK_A3FF103A4584665A` FOREIGN KEY (`product_id`) REFERENCES `product_model` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_details`
--

LOCK TABLES `product_details` WRITE;
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` VALUES (2,2,'Material','Embroidery thread, Silver plated earwire'),(3,2,'Length','4cm'),(4,2,'Width ','3cm'),(8,4,'Material','Polymer clay, Silver plated jump ring and earwire'),(9,4,'Length','3.2cm'),(10,4,'Width','1.5cm');
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_model`
--

DROP TABLE IF EXISTS `product_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_price` double NOT NULL,
  `product_desc` longtext,
  `product_stock` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `view` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_model`
--

LOCK TABLES `product_model` WRITE;
/*!40000 ALTER TABLE `product_model` DISABLE KEYS */;
INSERT INTO `product_model` VALUES (2,'Interlocking Circles',6,'These are the first ever pair of earrings that I crocheted and they were super fun to make! They’re really soft and lightweight, perfect for sensitive ears.',1,'2021-02-15 13:26:05','2021-02-15 13:26:05',4),(4,'Hearts',7,'This pair was made specially on Valentine’s Day, just for you! (or a special someone) It’s never too late to show some “hearts” to a loved one.',1,'2021-02-15 13:50:29','2021-02-15 13:50:29',7);
/*!40000 ALTER TABLE `product_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_model_image_file`
--

DROP TABLE IF EXISTS `product_model_image_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_model_image_file` (
  `product_model_id` int(11) NOT NULL,
  `image_file_id` int(11) NOT NULL,
  PRIMARY KEY (`product_model_id`,`image_file_id`),
  KEY `IDX_9916B3E5B2C5DD70` (`product_model_id`),
  KEY `IDX_9916B3E56DB2EB0` (`image_file_id`),
  CONSTRAINT `FK_9916B3E56DB2EB0` FOREIGN KEY (`image_file_id`) REFERENCES `image_file` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_9916B3E5B2C5DD70` FOREIGN KEY (`product_model_id`) REFERENCES `product_model` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_model_image_file`
--

LOCK TABLES `product_model_image_file` WRITE;
/*!40000 ALTER TABLE `product_model_image_file` DISABLE KEYS */;
INSERT INTO `product_model_image_file` VALUES (2,3),(4,8),(4,9);
/*!40000 ALTER TABLE `product_model_image_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_password_request`
--

DROP TABLE IF EXISTS `reset_password_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reset_password_request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `selector` varchar(20) NOT NULL,
  `hashed_token` varchar(100) NOT NULL,
  `requested_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `expires_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_7CE748AA76ED395` (`user_id`),
  CONSTRAINT `FK_7CE748AA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_password_request`
--

LOCK TABLES `reset_password_request` WRITE;
/*!40000 ALTER TABLE `reset_password_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `reset_password_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `subcategoryname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_DDCA44812469DE2` (`category_id`),
  CONSTRAINT `FK_DDCA44812469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,2,'Crochet'),(2,2,'Polymer Clay');
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory_product_model`
--

DROP TABLE IF EXISTS `subcategory_product_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategory_product_model` (
  `subcategory_id` int(11) NOT NULL,
  `product_model_id` int(11) NOT NULL,
  PRIMARY KEY (`subcategory_id`,`product_model_id`),
  KEY `IDX_EAF691725DC6FE57` (`subcategory_id`),
  KEY `IDX_EAF69172B2C5DD70` (`product_model_id`),
  CONSTRAINT `FK_EAF691725DC6FE57` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_EAF69172B2C5DD70` FOREIGN KEY (`product_model_id`) REFERENCES `product_model` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory_product_model`
--

LOCK TABLES `subcategory_product_model` WRITE;
/*!40000 ALTER TABLE `subcategory_product_model` DISABLE KEYS */;
INSERT INTO `subcategory_product_model` VALUES (1,2),(2,4);
/*!40000 ALTER TABLE `subcategory_product_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subtwocategory`
--

DROP TABLE IF EXISTS `subtwocategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subtwocategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subcategory_id` int(11) DEFAULT NULL,
  `subtwocategoryname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_9EDDE5145DC6FE57` (`subcategory_id`),
  CONSTRAINT `FK_9EDDE5145DC6FE57` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subtwocategory`
--

LOCK TABLES `subtwocategory` WRITE;
/*!40000 ALTER TABLE `subtwocategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `subtwocategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subtwocategory_product_model`
--

DROP TABLE IF EXISTS `subtwocategory_product_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subtwocategory_product_model` (
  `subtwocategory_id` int(11) NOT NULL,
  `product_model_id` int(11) NOT NULL,
  PRIMARY KEY (`subtwocategory_id`,`product_model_id`),
  KEY `IDX_5C4358D6A60567C2` (`subtwocategory_id`),
  KEY `IDX_5C4358D6B2C5DD70` (`product_model_id`),
  CONSTRAINT `FK_5C4358D6A60567C2` FOREIGN KEY (`subtwocategory_id`) REFERENCES `subtwocategory` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_5C4358D6B2C5DD70` FOREIGN KEY (`product_model_id`) REFERENCES `product_model` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subtwocategory_product_model`
--

LOCK TABLES `subtwocategory_product_model` WRITE;
/*!40000 ALTER TABLE `subtwocategory_product_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `subtwocategory_product_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(180) NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `is_verified` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'replacetr@gmail.com','[\"ROLE_USER\"]','$argon2i$v=19$m=65536,t=4,p=1$eFV4TVBuTm1PNU1TL3hhNw$kUl6dBx87tEf5NTAj8fpfkpdoa6oV9X5qyzazCx371s','shaiful','asdasd',1,'2021-02-12 23:58:12','2021-02-12 23:58:12'),(2,'shaifulazhartalib@gmail.com','[\"ROLE_ADMIN\"]','$argon2i$v=19$m=65536,t=4,p=1$TXRGV01kdkxvaWlwcW93bg$DxTJ78lFY58mAdbjWSBRuUTt+iM9WFZNp3Tc4Hb9Udw','shaifulazhar','talib',1,'2021-02-13 00:04:29','2021-02-13 00:04:29'),(3,'nadiaevee@iCloud.com','[\"ROLE_ADMIN\"]','$argon2i$v=19$m=65536,t=4,p=1$WVpieVVQa282NmVaRm5KYw$VkJxVQ/Nk8vakr2mKvYnNnZLMqpvM71pJTd6ZhYfXMk','Nadia','Eve',1,'2021-02-15 12:51:58','2021-02-15 12:51:58'),(4,'shaifulazhar.000@gmail.com','[\"ROLE_USER\"]','$argon2i$v=19$m=65536,t=4,p=1$VlpBTWVCanZQNDdNd3NwUw$t2sAnbpYFulmOtPJhPvNR7fhMt+jLLgvm7UlvYqiq8U','shaiful','azhar',0,'2021-02-15 14:22:30','2021-02-15 14:22:30');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitor_of_page`
--

DROP TABLE IF EXISTS `visitor_of_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visitor_of_page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitute` varchar(255) DEFAULT NULL,
  `postal` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitor_of_page`
--

LOCK TABLES `visitor_of_page` WRITE;
/*!40000 ALTER TABLE `visitor_of_page` DISABLE KEYS */;
INSERT INTO `visitor_of_page` VALUES (1,'Not found','172.31.24.27','Not found','Not found','Not found','Not found','Not found','2021-02-15 09:43:37','2021-02-17 09:41:04'),(2,'Not found','172.31.35.142','Not found','Not found','Not found','Not found','Not found','2021-02-15 09:43:40','2021-02-17 09:41:04'),(3,'Not found','172.31.1.126','Not found','Not found','Not found','Not found','Not found','2021-02-15 09:43:41','2021-02-17 09:41:04'),(4,'Malaysia','60.51.23.148','Pahang','3.6981','103.0195','26080','Kuantan','2021-02-15 10:51:54','2021-02-17 09:29:03'),(5,'Not found','45.155.205.108','Not found','Not found','Not found','Not found','Not found','2021-02-15 11:02:05','2021-02-17 05:01:29'),(6,'Not found','45.155.205.108','Not found','Not found','Not found','Not found','Not found','2021-02-15 11:02:05','2021-02-15 11:02:05'),(7,'United States','162.218.65.10','Oregon','45.5207','-122.6888','97205','Portland','2021-02-15 12:06:42','2021-02-15 12:06:42'),(8,'Malaysia','14.192.208.220','Kuala Lumpur','3.1013','101.6915','57000','Kuala Lumpur','2021-02-15 12:49:00','2021-02-16 03:41:24'),(9,'United States','128.14.134.134','California','34.0729','-118.2606','90012','Los Angeles','2021-02-15 13:08:26','2021-02-17 02:07:02'),(10,'United States','71.6.232.7','California','32.7973','-117.1392','92123','San Diego','2021-02-15 13:42:47','2021-02-16 07:25:33'),(11,'Malaysia','183.171.184.116','Sabah','5.9342','116.0802','88300','Kota Kinabalu','2021-02-15 13:52:49','2021-02-15 13:52:49'),(12,'Malaysia','203.82.77.100','Kuala Lumpur','3.1479','101.7008','50088','Kuala Lumpur','2021-02-15 14:49:37','2021-02-15 16:48:18'),(13,'Japan','139.162.116.133','Tokyo','35.685','139.7514','102-0082','Tokyo','2021-02-15 15:20:08','2021-02-15 15:20:08'),(14,'United Kingdom','178.79.162.164','England','51.5161','-0.0949','EC2V','London','2021-02-15 15:49:04','2021-02-16 23:20:50'),(15,'United States','104.237.140.169','Texas','32.7787','-96.8217','75270','Dallas','2021-02-15 17:28:48','2021-02-17 00:33:31'),(16,'United States','128.14.134.170','California','34.0729','-118.2606','90012','Los Angeles','2021-02-15 18:10:12','2021-02-16 21:03:32'),(17,'Malaysia','203.82.75.133','Kuala Lumpur','3.1479','101.7008','50088','Kuala Lumpur','2021-02-15 18:40:59','2021-02-15 18:40:59'),(18,'United States','35.230.153.112','California','37.4056','-122.0775','94043','Mountain View','2021-02-15 19:18:50','2021-02-15 19:18:50'),(19,'United States','34.220.120.44','Oregon','45.8491','-119.7143','97818','Boardman','2021-02-15 19:19:37','2021-02-15 20:19:12'),(20,'United States','35.197.112.28','California','37.4056','-122.0775','94043','Mountain View','2021-02-15 19:23:22','2021-02-15 19:23:22'),(21,'France','195.154.63.222','Val d\'Oise','48.9899','2.1699','95220','Herblay','2021-02-15 19:39:17','2021-02-15 19:39:17'),(22,'United States','18.222.57.19','Ohio','39.9653','-83.0235','43215','Columbus','2021-02-15 19:45:23','2021-02-15 19:47:34'),(23,'United States','104.248.119.121','New Jersey','40.7939','-74.0258','07047','North Bergen','2021-02-15 19:52:09','2021-02-15 19:52:09'),(24,'United States','50.116.36.25','Georgia','33.749','-84.388','30301','Atlanta','2021-02-15 20:08:45','2021-02-15 20:08:45'),(25,'Malaysia','203.82.75.134','Kuala Lumpur','3.1479','101.7008','50088','Kuala Lumpur','2021-02-15 20:13:04','2021-02-15 20:13:04'),(26,'Singapore','54.254.130.243','Central Singapore Community Development Council','1.2931','103.8558',NULL,'Singapore','2021-02-15 20:30:10','2021-02-15 22:57:53'),(27,'United States','35.232.105.229','California','37.4056','-122.0775','94043','Mountain View','2021-02-15 21:15:37','2021-02-16 20:56:58'),(28,'United Kingdom','138.68.161.204','England','51.5353','-0.6658','SL1','London','2021-02-15 23:18:42','2021-02-16 10:16:02'),(29,'United States','35.247.80.240','California','37.4056','-122.0775','94043','Mountain View','2021-02-15 23:23:28','2021-02-17 03:08:56'),(30,'Malaysia','60.50.13.125','Selangor','3.1097','101.6171','47300','Petaling Jaya','2021-02-15 23:30:03','2021-02-16 03:45:01'),(31,'Germany','172.104.147.96','Hesse','50.1153','8.6823','60313','Frankfurt am Main','2021-02-16 00:58:21','2021-02-16 00:58:24'),(32,'United States','184.105.247.252','Utah','41.0879','-111.9704','84041','Layton','2021-02-16 03:36:25','2021-02-16 03:36:25'),(33,'United States','128.14.133.58','California','34.0729','-118.2606','90012','Los Angeles','2021-02-16 05:18:38','2021-02-16 05:18:38'),(34,'United States','184.105.247.196','Utah','41.0879','-111.9704','84041','Layton','2021-02-16 05:58:04','2021-02-16 07:22:02'),(35,'United States','18.222.218.22','Ohio','39.9653','-83.0235','43215','Columbus','2021-02-16 07:02:00','2021-02-16 07:02:00'),(36,'United States','52.246.249.203','Washington','47.6062','-122.3321',NULL,NULL,'2021-02-16 07:11:05','2021-02-16 07:11:05'),(37,'United States','138.68.19.202','California','37.3483','-121.9844','95051','Santa Clara','2021-02-16 07:33:32','2021-02-16 07:33:32'),(38,'Not found','45.145.185.78','Not found','Not found','Not found','Not found','Not found','2021-02-16 07:49:14','2021-02-16 07:49:14'),(39,'United States','192.241.193.91','California','37.7353','-122.3732','94124','San Francisco','2021-02-16 09:50:56','2021-02-16 09:50:56'),(40,'United States','192.241.220.88','California','37.7353','-122.3732','94124','San Francisco','2021-02-16 09:51:42','2021-02-16 09:52:03'),(41,'United States','54.80.155.154','Virginia','39.0481','-77.4728','20149','Ashburn','2021-02-16 10:02:25','2021-02-16 10:02:25'),(42,'Germany','213.136.93.84','Bavaria','49.4075','11.1649','90475','Nuremberg','2021-02-16 11:31:25','2021-02-16 11:31:25'),(43,'United States','172.105.174.117','New Jersey','39.4745','-74.4575','08205','Absecon','2021-02-16 13:46:44','2021-02-16 13:46:44'),(44,'United States','178.128.184.83','California','37.3483','-121.9844','95051','Santa Clara','2021-02-16 16:44:05','2021-02-16 16:44:05'),(45,'United States','45.33.56.182','California','37.5605','-121.9999','94536','Fremont','2021-02-16 17:08:16','2021-02-16 17:08:16'),(46,'United States','40.76.121.215','Virginia','38.7078','-78.1566','22747','Washington','2021-02-16 17:34:50','2021-02-17 07:22:25'),(47,'Russia','91.236.177.162','Moscow Oblast','54.9008','38.0708','142803','Stupino','2021-02-16 20:45:01','2021-02-16 23:05:43'),(48,'United States','45.79.188.89','New Jersey','40.7357','-74.1724','07175','Newark','2021-02-16 20:48:55','2021-02-16 20:48:55'),(49,'United States','98.26.16.158','North Carolina','35.9162','-79.0999','27516','Chapel Hill','2021-02-16 20:52:24','2021-02-16 20:52:24'),(50,'Bulgaria','213.16.63.201','Varna','43.2167','27.9167','9000','Varna','2021-02-16 22:35:27','2021-02-16 22:35:27'),(51,'United States','104.154.204.209','Virginia','38.6582','-77.2497',NULL,NULL,'2021-02-16 23:25:33','2021-02-16 23:25:33'),(52,'Malaysia','60.48.32.88','Kuala Lumpur','3.1962','101.7121','53100','Kuala Lumpur','2021-02-17 00:28:02','2021-02-17 00:28:34'),(53,'United States','13.72.102.159','Virginia','38.7078','-78.1566','22747','Washington','2021-02-17 03:39:44','2021-02-17 03:39:44'),(54,'Not found','103.140.250.115','Not found','Not found','Not found','Not found','Not found','2021-02-17 03:56:38','2021-02-17 03:56:38'),(55,'United States','184.105.247.254','Utah','41.0879','-111.9704','84041','Layton','2021-02-17 05:15:16','2021-02-17 05:15:16');
/*!40000 ALTER TABLE `visitor_of_page` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-17  9:41:24
