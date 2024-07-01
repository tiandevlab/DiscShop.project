CREATE DATABASE IF NOT EXISTS DiscShop;
USE DiscShop;

DROP TABLE IF EXISTS Albums;
CREATE TABLE IF NOT EXISTS Albums(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    release_year INT,
    cover_image_name VARCHAR(255),
    copyright VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL
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

SELECT * FROM Albums;
