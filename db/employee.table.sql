CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)

);

DESCRIBE employee;

INSERT INTO employee VALUES (1, 'Herberth', 2200);
INSERT INTO employee VALUES (2, 'Camila', 3290);
INSERT INTO employee VALUES (3, 'Albertano', 2190);

SELECT * FROM employee;