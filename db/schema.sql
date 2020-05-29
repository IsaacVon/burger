CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    burger_name CHAR(255) NOT NULL,
    devoured BOOL NOT NULL DEFAULT 0
);