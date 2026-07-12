-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: seedtotree_affiliate_store_db
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `affiliate_link` varchar(255) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Ergonomic Mechanical Keyboard','High-performance mechanical keyboard with RGB backlighting and tactile switches for maximum productivity.','https://images.unsplash.com/photo-1595225476474-87563907a212?w=500','https://your-affiliate-link-1.com',129.99),(2,'Noise-Cancelling Wireless Headphones','Premium over-ear headphones with active noise cancellation and 40-hour battery life.','https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500','https://your-affiliate-link-2.com',249.50),(3,'Ultra-Wide 34-Inch Monitor','Immersive ultra-wide display perfect for multitasking, coding, and creative design work.','https://images.unsplash.com/photo-1527443224154-c4a3942d3a35?w=500','https://your-affiliate-link-3.com',450.00);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tools`
--

DROP TABLE IF EXISTS `tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tools` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `affiliate_link` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `seo_title` varchar(255) DEFAULT NULL,
  `seo_description` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tools`
--

LOCK TABLES `tools` WRITE;
/*!40000 ALTER TABLE `tools` DISABLE KEYS */;
INSERT INTO `tools` VALUES (1,'Cloudways Managed Cloud Hosting','Enterprise-grade cloud hosting optimized for WordPress, PHP, and high-traffic applications. Offers a choice of five cloud providers including DigitalOcean and Vultr.','https://www.cloudways.com/?id=YOUR_ID_HERE','Infrastructure','Cloudways Review: Best Managed Hosting for Professionals 2026','Looking for reliable managed cloud hosting? Our deep dive into Cloudways performance, security, and scalability for business websites.','cloudways-managed-hosting-review','2026-07-12 18:55:21','2026-07-12 18:55:21'),(2,'HubSpot CRM & Sales Hub','An all-in-one platform for sales automation, pipeline management, and client communication. Essential for scaling service businesses.','https://www.hubspot.com/affiliate-link','Sales & CRM','HubSpot CRM Review: Automating Your Sales Pipeline in 2026','We analyze how HubSpot CRM helps professional teams automate outreach, manage leads, and close deals faster.','hubspot-crm-automation-review','2026-07-12 18:55:21','2026-07-12 18:55:21'),(3,'SEMrush Digital Marketing Suite','The industry-standard toolkit for SEO, competitor analysis, and content strategy. Used by professional marketers to dominate search results.','https://www.semrush.com/affiliate-link','Digital Marketing','SEMrush vs. Competitors: Is it the Best SEO Tool for 2026?','A comprehensive look at SEMrush features and why it is the top choice for business owners looking to improve their Google rankings.','semrush-digital-marketing-toolkit','2026-07-12 18:55:21','2026-07-12 18:55:21');
/*!40000 ALTER TABLE `tools` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-12 22:25:07
