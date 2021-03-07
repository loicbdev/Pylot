CREATE DATABASE  IF NOT EXISTS `pylot` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `pylot`;
-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: pylot
-- ------------------------------------------------------
-- Server version	5.7.32-0ubuntu0.18.04.1

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address_name` varchar(60) NOT NULL,
  `street_number` varchar(4) DEFAULT NULL,
  `street_type` varchar(15) NOT NULL,
  `street_ext` varchar(10) DEFAULT NULL,
  `street_name` varchar(60) NOT NULL,
  `postal_code` varchar(5) NOT NULL,
  `city` varchar(100) NOT NULL,
  `country` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address_lat` float NOT NULL,
  `address_long` float NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  UNIQUE KEY `address_name_UNIQUE` (`address_name`),
  KEY `fk_address_user1_idx` (`user_id`),
  CONSTRAINT `fk_address_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `alert`
--

DROP TABLE IF EXISTS `alert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alert` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `message` varchar(300) DEFAULT NULL,
  `location_lat` float NOT NULL,
  `location_long` float NOT NULL,
  `roadtrip_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`roadtrip_id`,`user_id`),
  KEY `fk_alert_roadtrip1_idx` (`roadtrip_id`),
  KEY `fk_alert_user1_idx` (`user_id`),
  CONSTRAINT `fk_alert_roadtrip` FOREIGN KEY (`roadtrip_id`) REFERENCES `roadtrip` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_alert_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `alert_angel`
--

DROP TABLE IF EXISTS `alert_angel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alert_angel` (
  `alert_id` int(11) NOT NULL,
  `angel_id` int(11) NOT NULL,
  PRIMARY KEY (`alert_id`,`angel_id`),
  KEY `fk_alert_has_angel_angel1_idx` (`angel_id`),
  CONSTRAINT `fk_alert_angel_alert` FOREIGN KEY (`alert_id`) REFERENCES `alert` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_alert_angel_angel` FOREIGN KEY (`angel_id`) REFERENCES `angel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `angel`
--

DROP TABLE IF EXISTS `angel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `angel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  UNIQUE KEY `phone_number_UNIQUE` (`phone_number`),
  KEY `fk_angel_user1_idx` (`user_id`),
  CONSTRAINT `fk_angel_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `message_user_roadtrip`
--

DROP TABLE IF EXISTS `message_user_roadtrip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message_user_roadtrip` (
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `message` varchar(300) DEFAULT NULL,
  `roadtrip_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`roadtrip_id`,`user_id`),
  KEY `fk_user_has_roadtrip_roadtrip1_idx` (`roadtrip_id`),
  KEY `fk_user_has_roadtrip_user1_idx` (`user_id`),
  CONSTRAINT `fk_message_user_roadtrip_roadtrip` FOREIGN KEY (`roadtrip_id`) REFERENCES `roadtrip` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_message_user_roadtrip_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `roadtrip`
--

DROP TABLE IF EXISTS `roadtrip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roadtrip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_date` date NOT NULL,
  `start_time` time NOT NULL,
  `start_street_number` varchar(4) DEFAULT NULL,
  `start_street_type` varchar(15) DEFAULT NULL,
  `start_street_ext` varchar(10) DEFAULT NULL,
  `start_street_name` varchar(60) NOT NULL,
  `start_postal_code` varchar(5) NOT NULL,
  `start_city` varchar(100) NOT NULL,
  `end_time` time NOT NULL,
  `end_street_number` varchar(4) DEFAULT NULL,
  `end_street_type` varchar(15) DEFAULT NULL,
  `end_street_ext` varchar(10) DEFAULT NULL,
  `end_street_name` varchar(60) NOT NULL,
  `end_postal_code` varchar(5) NOT NULL,
  `end_city` varchar(100) NOT NULL,
  `creation_comment` varchar(300) DEFAULT NULL,
  `status` varchar(100) NOT NULL,
  `co_pylot_max` int(11) NOT NULL,
  `start_lat` float NOT NULL,
  `start_long` float NOT NULL,
  `end_lat` float NOT NULL,
  `end_long` float NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_roadtrip_user1_idx` (`user_id`),
  CONSTRAINT `fk_roadtrip_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `birth_year` year(4) NOT NULL,
  `gender` varchar(15) NOT NULL,
  `activity` varchar(60) DEFAULT NULL,
  `presentation` varchar(300) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(70) NOT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `profil_picture` varchar(255) DEFAULT NULL,
  `profil_verified` tinyint(4) DEFAULT '0',
  `preference_nb_pylot` int(11) DEFAULT NULL,
  `preference_distance` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phone_number_UNIQUE` (`phone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_roadtrip`
--

DROP TABLE IF EXISTS `user_roadtrip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roadtrip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `comment` varchar(300) DEFAULT NULL,
  `roadtrip_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`roadtrip_id`,`user_id`),
  KEY `fk_user_has_roadtrip_roadtrip1_idx` (`roadtrip_id`),
  KEY `fk_user_has_roadtrip_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_roadtrip_roadtrip` FOREIGN KEY (`roadtrip_id`) REFERENCES `roadtrip` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_roadtrip_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-29 10:01:51
