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
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (11,'scelerisque dui.','61','litora','molestie','1701 Turpis Av.','44312','Yamuna Nagar','Serbia',6,7.7175,27.0641),(12,'consequat enim','173','velit.','magna.','Ap #921-6502 Aliquam Rd.','44322','Dessau','San Marino',4,83.1719,-155.601),(13,'sapien. Aenean','125','libero.','Sed','P.O. Box 921, 9207 Amet Rd.','44347','Borgerhout','Puerto Rico',2,-55.811,97.0353),(14,'adipiscing elit.','61','gravida','luctus.','Ap #877-8396 Eu Road','44344','Eisleben','French Polynesia',9,60.1188,-36.6764),(15,'neque pellentesque','20','neque.','odio.','942-5076 Donec Rd.','44141','Gignod','French Polynesia',10,-52.7948,170.961),(16,'dolor egestas','171','egestas,','pharetra','Ap #706-350 Aliquet Avenue','44195','Bikaner','Andorra',5,-50.9389,68.9347),(17,'ante bibendum','165','Quisque','elit,','Ap #230-4491 Urna, Rd.','44163','Jefferson City','Guinea-Bissau',3,81.7454,7.18112),(18,'Ut tincidunt','111','cursus','id,','4665 At Road','44064','Côte Saint-Luc','Palau',4,67.0139,10.9033),(19,'tellus non','106','nec','justo.','P.O. Box 917, 6648 Ipsum Rd.','44299','Schwalbach','Czech Republic',10,-82.9333,-95.8248),(20,'lacinia. Sed','187','sit','sem,','7859 Ac St.','44161','Rezzoaglio','Solomon Islands',4,-6.43087,-162.335),(29,'maison','56','rue','','Jean emile laboureur','44000','nantes','france',35,47.2258,-1.55219),(35,'appart','56','rue','','Jean emile laboureur','44000','nantes','france',35,47.2262,-1.55266),(43,'Appart2','56','rue','','Jean emile laboureur','44000','Nantes','France',35,47.2262,-1.55266);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `alert`
--

LOCK TABLES `alert` WRITE;
/*!40000 ALTER TABLE `alert` DISABLE KEYS */;
INSERT INTO `alert` VALUES (1,'2020-02-02','11:35:14','lobortis',65.3466,-81.7286,37,2),(2,'2021-11-26','12:35:56','augue ut lacus.',-26.1816,-165.462,36,1),(3,'2021-09-07','21:12:22','dictum ultricies',64.7985,-132.974,44,9),(4,'2020-01-25','03:10:53','Etiam ligula',43.4607,-30.8415,34,10),(5,'2021-04-16','22:44:41','Curabitur ut odio',-64.7483,-84.3384,38,7),(6,'2021-09-21','06:19:37','at, velit. Pellentesque',1.49183,-8.5459,40,6),(7,'2020-08-14','18:10:10','amet ornare lectus',-2.6835,-73.4987,48,8),(8,'2020-12-27','18:52:55','risus. In',-20.1872,4.22584,39,3),(9,'2020-12-10','16:22:53','Cras dolor dolor, tempus non,',8.85327,-159.873,40,4),(10,'2021-01-14','05:10:18','urna. Nullam lobortis quam',21.1758,128.623,31,2);
/*!40000 ALTER TABLE `alert` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `alert_angel`
--

LOCK TABLES `alert_angel` WRITE;
/*!40000 ALTER TABLE `alert_angel` DISABLE KEYS */;
INSERT INTO `alert_angel` VALUES (4,3),(9,4),(2,5),(2,6),(9,6),(1,9),(3,9),(1,10),(7,10),(10,10);
/*!40000 ALTER TABLE `alert_angel` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `angel`
--

LOCK TABLES `angel` WRITE;
/*!40000 ALTER TABLE `angel` DISABLE KEYS */;
INSERT INTO `angel` VALUES (1,'Mary','Herring','07 66 61 52 51',1,6),(2,'Price','Workman','02 74 61 73 76',1,2),(3,'Colin','Gillespie','01 20 88 17 94',1,10),(4,'Aline','Blackwell','05 93 26 43 89',1,4),(5,'Brynn','Greene','04 51 89 08 25',1,4),(6,'Jasper','Cantrell','04 64 78 51 07',0,4),(7,'Omar','Acevedo','07 65 71 19 85',0,2),(8,'Aquila','Fletcher','08 08 65 80 48',0,7),(9,'Kristen','Heath','09 47 35 45 32',1,2),(10,'Lacey','Larson','02 69 17 00 71',1,8),(11,'nicolas','mercier','',NULL,35),(14,'nicolas','mercier','fde',NULL,35);
/*!40000 ALTER TABLE `angel` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `message_user_roadtrip`
--

LOCK TABLES `message_user_roadtrip` WRITE;
/*!40000 ALTER TABLE `message_user_roadtrip` DISABLE KEYS */;
INSERT INTO `message_user_roadtrip` VALUES ('2020-01-20','11:31:40','placerat velit. Quisque varius. Nam',32,10),('2020-05-10','03:59:54','Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu',35,9),('2020-01-22','05:33:47','quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam',39,3),('2020-04-05','14:15:38','nisi.',39,6),('2020-07-13','02:47:28','purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales',40,5),('2021-04-26','19:20:27','luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum.',40,10),('2020-08-15','11:31:35','eleifend, nunc risus',42,9),('2020-03-26','20:30:23','ut eros non enim commodo hendrerit. Donec porttitor tellus non',48,5),('2020-02-09','21:45:14','ante dictum cursus. Nunc mauris',58,3);
/*!40000 ALTER TABLE `message_user_roadtrip` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `roadtrip`
--

LOCK TABLES `roadtrip` WRITE;
/*!40000 ALTER TABLE `roadtrip` DISABLE KEYS */;
INSERT INTO `roadtrip` VALUES (31,'2020-08-12','00:00:22','181','velit.','1','616-6696 Ultrices. Street','44264','Jumet','00:00:21','142','metus','3','P.O. Box 642, 4164 Vestibulum Avenue','44273','Zelzate','tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec','adipiscing',2,42.988,-99.2185,-49.2001,7.39344,10),(32,'2021-05-24','00:00:08','59','non,','1','Ap #813-3992 Ut Rd.','44263','Hudson\'s Hope','00:00:14','128','tincidunt','3','2593 Amet, St.','44194','San Giorgio Albanese','dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent','posuere',1,43.4369,157.031,-69.4424,174.852,2),(33,'2020-09-28','00:00:22','131','a','1','Ap #509-5642 Sit Avenue','44199','Chilliwack','00:00:05','36','faucibus','2','601-436 Sit Rd.','44106','Kirov','neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu.','quam',2,31.5974,80.2656,32.2858,157.91,9),(34,'2021-04-06','00:00:21','80','ipsum','1','P.O. Box 772, 3170 Duis Avenue','44051','Montauban','00:00:22','74','pharetra.','2','P.O. Box 349, 1271 At Avenue','44041','Mussy-la-Ville','Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi','cursus',1,52.3834,-14.7526,35.6771,-133.307,6),(35,'2020-08-18','00:00:23','188','lorem,','3','137 Malesuada Rd.','44192','Sangju','00:00:18','130','tortor','1','Ap #310-7643 Ligula. Avenue','44139','Bridgnorth','Aenean massa.','id',6,28.6563,168.567,-7.48694,87.1948,4),(36,'2021-01-26','00:00:16','77','erat,','1','640-4912 Euismod Road','44327','Glauchau','00:00:02','190','feugiat','2','P.O. Box 617, 9534 Arcu St.','44338','Mount Pearl','pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce','ornare,',5,-48.197,8.22739,8.20949,22.4381,4),(37,'2021-06-22','00:00:12','94','ac','2','Ap #887-6889 Nisl. Rd.','44308','Sijsele','00:00:15','55','tellus','3','340-3962 Mauris Road','44091','Falciano del Massico','Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in','et',1,-48.9418,14.058,10.0023,-51.4422,4),(38,'2021-01-21','00:00:17','39','metus.','3','P.O. Box 378, 8590 Vel Av.','44138','Couture-Saint-Germain','00:00:14','5','tellus','2','P.O. Box 919, 9699 Eleifend Road','44020','Elversele','orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit','augue',3,-5.82543,-65.8522,-76.964,-106.592,1),(39,'2021-04-09','00:00:16','125','sed,','1','236-1064 Iaculis Street','44338','Castelvetere in Val Fortore','00:00:23','177','tellus','3','Ap #744-2618 Congue. Ave','44258','Paz de Ariporo','nec tempus scelerisque, lorem ipsum sodales','gravida.',5,-15.1668,-128.233,-8.47398,-114.929,1),(40,'2021-04-13','00:00:01','111','sit','1','119-457 Eu, Av.','44026','Maiduguri','00:00:13','50','mattis.','1','P.O. Box 331, 5378 Nec, Rd.','44296','Recogne','non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque','nascetur',6,86.5809,-16.4732,-48.0117,-177.134,2),(41,'2020-06-17','00:00:05','105','blandit','3','Ap #232-564 Leo. Av.','44150','Bilaspur','00:00:06','124','Cum','3','Ap #280-2303 Eleifend Street','44135','Golspie','feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper','lorem',2,31.0945,-67.9127,3.13145,-125.156,6),(42,'2021-09-10','00:00:22','138','nec','3','231-7347 Magnis Rd.','44127','San Marcello Pistoiese','00:00:08','15','eget,','1','Ap #687-165 Pharetra Rd.','44063','Chelyabinsk','tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean','urna',2,-72.377,-120.024,8.34346,-2.87962,9),(43,'2021-12-14','00:00:04','70','fringilla','2','604-4043 At, Road','44089','Sart-Dames-Avelines','00:00:18','10','pharetra','3','165-4639 Sed, Ave','44225','Vitacura','Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed,','magna.',2,29.947,171.565,-13.414,23.8854,7),(44,'2021-04-04','00:00:18','21','elit,','2','506-4429 Vitae St.','44345','Santu Lussurgiu','00:00:07','165','ligula','1','P.O. Box 650, 7537 At, Av.','44327','Burcht','fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna','natoque',3,42.0012,-21.8668,-85.5345,-79.3868,6),(45,'2021-05-15','00:00:01','40','libero','2','Ap #226-6742 Lectus Street','44112','Glovertown','00:00:03','69','Proin','3','P.O. Box 748, 5134 Lacus. St.','44235','Khuzdar','feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus','pretium',3,82.0043,1.86393,-21.3555,-73.6836,6),(46,'2021-10-21','00:00:22','176','Praesent','3','P.O. Box 466, 7440 Nunc Rd.','44325','Fort Worth','00:00:19','131','Phasellus','1','Ap #155-9735 Eget Avenue','44236','Jerez de la Frontera','quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia','aliquet',3,-13.8532,-179.953,81.8285,-148.007,10),(47,'2021-09-26','00:00:10','120','quis,','3','951-1986 Aliquet Avenue','44202','Elbistan','00:00:07','199','Cras','2','Ap #562-5176 Non Rd.','44307','Whitehorse','aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean','Nam',6,-38.3061,-75.7185,-46.2459,125.042,8),(48,'2021-05-27','00:00:17','59','nec','2','Ap #392-4015 Vulputate Av.','44318','Develi','00:00:11','173','convallis','2','P.O. Box 634, 4720 Parturient St.','44170','Galvarino','eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed,','vestibulum,',5,-21.7871,-161.889,18.8668,21.6281,4),(49,'2021-03-22','00:00:20','61','diam','2','P.O. Box 298, 6378 Pede. St.','44175','Saint-Pierre','00:00:07','152','lacinia','3','P.O. Box 865, 7788 Eget Rd.','44107','Bergama','pellentesque,','consectetuer,',4,5.89102,69.6873,-87.6802,10.1991,6),(50,'2021-10-09','00:00:17','71','mollis.','1','3063 Eu St.','44135','Cuccaro Vetere','00:00:04','188','fringilla','3','193-6989 Accumsan Road','44025','Liernu','lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer','magna.',5,-52.7569,13.0291,29.0878,86.2929,5),(51,'2020-08-12','00:00:22','181','velit.','1','616-6696 Ultrices. Street','44264','Jumet','00:00:21','142','metus','3','P.O. Box 642, 4164 Vestibulum Avenue','44273','Zelzate','tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec','adipiscing',2,42.988,-99.2185,-49.2001,7.39344,10),(52,'2021-05-24','00:00:08','59','non,','1','Ap #813-3992 Ut Rd.','44263','Hudson\'s Hope','00:00:14','128','tincidunt','3','2593 Amet, St.','44194','San Giorgio Albanese','dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent','posuere',1,43.4369,157.031,-69.4424,174.852,2),(54,'2021-04-06','00:00:21','80','ipsum','1','P.O. Box 772, 3170 Duis Avenue','44051','Montauban','00:00:22','74','pharetra.','2','P.O. Box 349, 1271 At Avenue','44041','Mussy-la-Ville','Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi','cursus',1,52.3834,-14.7526,35.6771,-133.307,6),(55,'2020-08-18','00:00:23','188','lorem,','3','137 Malesuada Rd.','44192','Sangju','00:00:18','130','tortor','1','Ap #310-7643 Ligula. Avenue','44139','Bridgnorth','Aenean massa.','id',6,28.6563,168.567,-7.48694,87.1948,4),(56,'2021-01-26','00:00:16','77','erat,','1','640-4912 Euismod Road','44327','Glauchau','00:00:02','190','feugiat','2','P.O. Box 617, 9534 Arcu St.','44338','Mount Pearl','pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce','ornare,',5,-48.197,8.22739,8.20949,22.4381,4),(57,'2021-06-22','00:00:12','94','ac','2','Ap #887-6889 Nisl. Rd.','44308','Sijsele','00:00:15','55','tellus','3','340-3962 Mauris Road','44091','Falciano del Massico','Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in','et',1,-48.9418,14.058,10.0023,-51.4422,4),(58,'2021-01-21','00:00:17','39','metus.','3','P.O. Box 378, 8590 Vel Av.','44138','Couture-Saint-Germain','00:00:14','5','tellus','2','P.O. Box 919, 9699 Eleifend Road','44020','Elversele','orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit','augue',3,-5.82543,-65.8522,-76.964,-106.592,1),(59,'2021-04-09','00:00:16','125','sed,','1','236-1064 Iaculis Street','44338','Castelvetere in Val Fortore','00:00:23','177','tellus','3','Ap #744-2618 Congue. Ave','44258','Paz de Ariporo','nec tempus scelerisque, lorem ipsum sodales','gravida.',5,-15.1668,-128.233,-8.47398,-114.929,1),(60,'2021-04-13','00:00:01','111','sit','1','119-457 Eu, Av.','44026','Maiduguri','00:00:13','50','mattis.','1','P.O. Box 331, 5378 Nec, Rd.','44296','Recogne','non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque','nascetur',6,86.5809,-16.4732,-48.0117,-177.134,2),(61,'2021-01-27','11:25:27','56','Rue','','Rue Pelleport','33800','Bordeaux','00:00:00','24','Rue','','Rue Lecourbe','75015','Paris','non ','1',3,44.823,-0.560527,48.8446,2.30911,35),(62,'2021-01-29','11:30:32','56','Rue','','Rue Judaique','33000','Bordeaux','00:00:00','45','Rue','','Rue Lecourbe','75015','Paris','non','1',3,44.8414,-0.58426,48.8438,2.30722,35);
/*!40000 ALTER TABLE `roadtrip` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Illiana','Rich',2021,'Aliquam','Cras vulputate velit eu sem.','enim. Etiam gravida molestie arcu. Sed eu nibh vulputate','BUF53UTI8PY','Etiam.imperdiet.dictum@necanteblandit.org','09 35 28 74 66','6',1,3,136),(2,'Xander','Whitney',2021,'ipsum','sagittis semper. Nam tempor diam','fringilla.','XHJ44ZFW4XV','dolor@lectus.net','01 56 15 63 41','8',0,3,509),(3,'Stacy','Landry',2021,'ut','Aenean egestas hendrerit neque. In','tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu','AZR43GEJ3IJ','elementum.sem.vitae@aceleifend.ca','05 59 83 59 47','7',0,3,343),(4,'Regina','James',2021,'ut,','tincidunt. Donec vitae erat vel','nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et','MUB62MRE4XE','ac.metus.vitae@lacusCras.net','04 73 21 29 49','6',1,3,673),(5,'Heidi','Coffey',2021,'ante.','nunc nulla vulputate dui, nec','Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu,','JNT10JDQ4EP','nisl.Nulla@dapibus.com','02 13 69 56 51','8',1,1,828),(6,'Rafael','Pate',2020,'faucibus','magna. Cras convallis convallis dolor.','ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo.','TJQ24XZD7BY','facilisis.eget@Duisrisusodio.com','06 48 09 02 93','1',1,5,561),(7,'Kelly','Knight',2020,'Cras','et, magna. Praesent interdum ligula','magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla','GFE20NBX7QM','eget@pharetrautpharetra.com','07 54 79 37 50','1',0,4,749),(8,'Sonia','Smith',2021,'torquent','molestie sodales. Mauris blandit enim','nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet','HOE55IFP8YY','feugiat.Lorem.ipsum@Nullaegetmetus.org','04 17 80 70 69','6',0,1,943),(9,'Dacey','Swanson',2020,'Sed','tellus id nunc interdum feugiat.','Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus','EFB14XQE4VQ','rutrum@arcuNuncmauris.net','01 34 06 02 04','3',1,4,727),(10,'Buffy','Maxwell',2021,'sagittis','purus, accumsan interdum libero dui','et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede','PKN38UWR0JW','vestibulum.nec.euismod@conguea.com','05 90 05 06 93','6',0,4,474),(11,'Nicolas','Mercier',1989,'man',NULL,NULL,'$2b$10$gJkVqXSGUNS/brkRhF45YuNNkoRn/vHax3lx1MKTkO5vKO7XSGBEW','123@gmail.com',NULL,NULL,NULL,NULL,NULL),(18,'Nicolas','Mercier',1989,'man',NULL,NULL,'$2b$10$ey.zCT.FaPIZJ0SQB4JA4eUTbQ68CNOgjYXkuPhMs3UXFcE7yNU.G','1234@gmail.com',NULL,NULL,NULL,NULL,NULL),(19,'Nicolas','Mercier',1989,'man',NULL,NULL,'$2b$10$0I3OPOHV3MdLaVhYNccWke19.7U8.oKtDoKdAu7RxC9m5CNeDrP0u','12345@gmail.com',NULL,NULL,NULL,NULL,NULL),(21,'Nicolas','Mercier',1989,'man',NULL,'hello je m\'appel encore nicolas héhéhé','dfssd','123456@gmail.com',NULL,NULL,NULL,3,500),(23,'Nicolas','Mercier',1989,'man',NULL,NULL,'$2b$10$t88p0ZwlX3AxJLqOP7vesuENFAxJlMGeTAMcqD0u6EfjkCnusBdT2','1234567@gmail.com',NULL,NULL,NULL,NULL,NULL),(24,'Nicolas','Mercier',1989,'man',NULL,NULL,'$2b$10$xVksa6f4YjOp/kgnUHA.wuls32yxUibP2q2VrgGUVNreyVDk/EEmK','12345678@gmail.com',NULL,NULL,NULL,NULL,NULL),(25,'Nicolas','Mercier',1989,'man',NULL,NULL,'$2b$10$6ZtLYseA4UNTpstluA/ca.Iv0zvDsfXC2m4NyFTfTkcdzFZjHX1ty','123456789@gmail.com',NULL,NULL,NULL,NULL,NULL),(26,'Balti','Balti',2000,'man',NULL,NULL,'$2b$10$Y2xVV4HTU6B9k2zXzSuqMucitVCNw/qW6./ebfaWY8GhYtTFnUVju','balti@gmail.com',NULL,NULL,NULL,NULL,NULL),(27,'Nicolas','Mercier',2000,'man',NULL,NULL,'$2b$10$wjivyYM6/Pa/UIXVwcP0FO.D7V6UBMBWXcmof5sKb4c5Dp2cei08a','nicolas2@mail.com',NULL,NULL,NULL,NULL,NULL),(28,'Nicolas','Mercier',1952,'man',NULL,NULL,'$2b$10$a8TjWtYBHOvYlmidxY5vb.3E/0dbBN51YQ7h.L.QtqPt5HCr4sGM6','nico@gmail.com',NULL,NULL,NULL,NULL,NULL),(29,'Nicolas','Fdsf',1955,'man',NULL,NULL,'$2b$10$RoSbB.hR2U3IHAol89gYY.YAUvj/pI3C292P.P3/cUt7HNflQcg/K','lolo@lolo.com',NULL,NULL,NULL,NULL,NULL),(30,'Lala','Lala',1959,'woman',NULL,NULL,'$2b$10$fiJbRUQ8vTtr9cw6exBgmucUJSBIWa7URiO3EzSBwKn800Fk.oQP6','lala@lala.com',NULL,NULL,NULL,NULL,NULL),(31,'Lulu','Lulu',1958,'woman',NULL,NULL,'$2b$10$2johVYHDJ3abmWt/0L8TOuJx1ICh7npgotaK3qzGsvvKb0Je8jEM.','lulu@mail.com',NULL,NULL,NULL,NULL,NULL),(32,'Balti','Balti',2000,'man',NULL,NULL,'$2b$10$hKJnQ1mByDepqRHPl.jXeuHAosENoBC9YePJLjJMvnhRWjUOMGfkW','balti@mail.com',NULL,NULL,NULL,NULL,NULL),(33,'Dfezfd','Sqfqsf',1971,'man',NULL,NULL,'$2b$10$jhGdtz28R.owntdTYScQrueGjbMt8H46nanuNGPjCzpNKzLHrPA.a','hello@mail.com',NULL,NULL,NULL,NULL,NULL),(35,'Balti','Balti',2000,'man',NULL,NULL,'$2b$10$jq5Ip2uBWQiBiYiBUqqDeeAGeFE0FEhG4GdWBkJ37GWzlXkYQJBiG','balti@baltimail.com',NULL,'_1611837205319.png',1,2,1000);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Dumping data for table `user_roadtrip`
--

LOCK TABLES `user_roadtrip` WRITE;
/*!40000 ALTER TABLE `user_roadtrip` DISABLE KEYS */;
INSERT INTO `user_roadtrip` VALUES (2,'2020-03-29',3,'dictum eu, eleifend nec, malesuada',59,7),(3,'2020-08-01',4,'et nunc. Quisque ornare',54,4),(4,'2021-01-10',5,'vulputate dui, nec tempus mauris',47,8),(5,'2020-01-15',5,'pellentesque a, facilisis non,',35,6),(6,'2020-08-01',2,'In tincidunt congue turpis. In condimentum. Donec at arcu.',33,10),(7,'2021-03-11',3,'arcu ac orci. Ut semper pretium neque. Morbi quis',59,8),(8,'2020-12-14',5,'Suspendisse ac',44,2),(9,'2020-08-22',5,'semper cursus. Integer mollis.',56,1),(10,'2021-07-06',4,'non arcu. Vivamus sit',60,3);
/*!40000 ALTER TABLE `user_roadtrip` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-29 10:37:39
