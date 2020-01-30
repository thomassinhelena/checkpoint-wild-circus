DROP DATABASE IF EXISTS checkpointwildcircus;
CREATE DATABASE IF NOT EXISTS checkpointwildcircus;
USE checkpointwildcircus;

DROP TABLE IF EXISTS list;

CREATE TABLE list (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  latitude VARCHAR(100) NOT NULL,
  longitude VARCHAR(100) NOT NULL,
  name VARCHAR(255) NOT NULL,
  url_image VARCHAR(100),
  location VARCHAR(100) NOT NULL
);
