CREATE DATABASE IF NOT EXISTS DiscShop;
USE DiscShop;

DROP TABLE IF EXISTS Albums;
CREATE TABLE IF NOT EXISTS Albums
(
    id               INT AUTO_INCREMENT PRIMARY KEY,
    title            VARCHAR(255)   NOT NULL,
    artist           VARCHAR(255)   NOT NULL,
    release_year     INT,
    cover_image_name VARCHAR(255),
    copyright        VARCHAR(255),
    price            DECIMAL(10, 2) NOT NULL
);

-- New Users table
CREATE TABLE IF NOT EXISTS users
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email    VARCHAR(255) NOT NULL UNIQUE
);

-- New user_roles table
CREATE TABLE IF NOT EXISTS user_roles
(
    user_id INT,
    role    VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- New shopping_carts table
CREATE TABLE IF NOT EXISTS shopping_carts
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    user_id    INT       NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- New cart_items table
CREATE TABLE IF NOT EXISTS cart_items
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    cart_id  INT NOT NULL,
    album_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES shopping_carts (id),
    FOREIGN KEY (album_id) REFERENCES Albums (id)
);


INSERT INTO Albums (title, artist, release_year, cover_image_name, copyright, price)
VALUES ('Wall of Eyes', 'The Smile', 2024, 'wallofeyes.jpg', 'XL Recordings Ltd', 25.00),
       ('The Beggar', 'Swans', 2023, 'thebeggar.jpg', 'Young God Records', 20.00),
       ('Talk Memory', 'BADBADNOTGOOD', 2021, 'talkmemory.jpg', 'XL Recordings Ltd', 25.00),
       ('folklore', 'Taylor Swift', 2020, 'folklore.jpg', 'Taylor Swift', 20.00),
       ('OK Computer', 'Radiohead', 1997, 'okcomputer.jpg', 'XL Recordings Ltd', 25.00),
       ('Bitches Brew', 'Miles Davis', 1970, 'bitchesbrew.jpg', 'Sony Music Entertainment Inc', 25.00),
       ('Different Class', 'Pulp', 1995, 'differentclass.jpg', 'Island Records', 20.00),
       ('Daydream Nation', 'Sonic Youth', 1988, 'daydreamnation.jpg', 'Squeaky Squawk', 20.00);

-- Sample data for users
INSERT INTO users (username, password, email)
VALUES ('john_doe', 'password123', 'john@example.com'),
       ('jane_smith', 'securepass', 'jane@example.com'),
       ('mike_johnson', 'mikepass', 'mike@example.com');

-- Sample data for user_roles
INSERT INTO user_roles (user_id, role)
VALUES (1, 'USER'),
       (2, 'USER'),
       (2, 'ADMIN'),
       (3, 'USER');

-- Sample data for shopping_carts
INSERT INTO shopping_carts (user_id, created_at)
VALUES (1, '2024-07-10 10:00:00'),
       (2, '2024-07-10 11:30:00'),
       (3, '2024-07-10 14:45:00');

-- Sample data for cart_items
INSERT INTO cart_items (cart_id, album_id, quantity)
VALUES (1, 1, 2), -- John's cart: 2 copies of "Wall of Eyes"
       (1, 3, 1), -- John's cart: 1 copy of "Talk Memory"
       (2, 2, 1), -- Jane's cart: 1 copy of "The Beggar"
       (2, 5, 1), -- Jane's cart: 1 copy of "OK Computer"
       (3, 4, 3), -- Mike's cart: 3 copies of "folklore"
       (3, 7, 1); -- Mike's cart: 1 copy of "Different Class"

-- Verify data
SELECT * FROM Albums;
SELECT * FROM users;
SELECT * FROM user_roles;
SELECT * FROM shopping_carts;
SELECT * FROM cart_items;
