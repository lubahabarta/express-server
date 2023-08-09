-- @block
DROP TABLE users;
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hash VARCHAR(255) NOT NULL UNIQUE,
    salt VARCHAR(255) NOT NULL UNIQUE,
    access_token VARCHAR(255) UNIQUE
);
-- @block
DELETE FROM users;