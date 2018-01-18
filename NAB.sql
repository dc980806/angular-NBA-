/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.5-10.1.8-MariaDB : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `test`;

/*Table structure for table `nba` */

DROP TABLE IF EXISTS `nba`;

CREATE TABLE `nba` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET latin1 NOT NULL,
  `add` varchar(30) CHARACTER SET latin1 NOT NULL,
  `number` varchar(60) CHARACTER SET latin1 NOT NULL,
  `qiudui` varchar(60) NOT NULL,
  `piaoshu` int(20) NOT NULL,
  `img` varchar(60) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `nba` */

insert  into `nba`(`id`,`name`,`add`,`number`,`qiudui`,`piaoshu`,`img`) values (1,'Westbrook','SG','0','雷霆',2017,'img/westbrook.png'),(2,'James','PF','23','骑士',1988,'img/james.png'),(3,'Curry','SG','30','勇士',1865,'img/curry.png'),(4,'Harden','SF','13','火箭',1813,'img/harden.png'),(5,'Durant','SF','35','勇士',1721,'img/durant.png'),(6,'Paul','PG','3','快船',1600,'img/paul.png'),(7,'Wade','SG','3','公牛',1532,'img/wade.png'),(8,'Anthony','C','7','尼克斯',1499,'img/anthony.png'),(9,'	lrving','PG','2','骑士',1361,'img/irving.png'),(10,'Lin','PG','	7','篮网',1200,'img/lin.png');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
