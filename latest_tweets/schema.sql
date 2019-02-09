DROP DATABASE IF EXISTS mansour;

CREATE DATABASE mansour;

USE mansour;

CREATE TABLE tweets (
  id int NOT NULL AUTO_INCREMENT,
  username varchar NOT NULL,
  tweet_text varchar(150) NOT NULL,
  DateOfReleased Date NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
