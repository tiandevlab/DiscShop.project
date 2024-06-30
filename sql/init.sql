CREATE DATABASE IF NOT EXISTS DiscShop;
USE DiscShop;

DROP TABLE IF EXISTS Albums;
CREATE TABLE IF NOT EXISTS Albums(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    release_year INT,
    cover_image_name VARCHAR(255),
    copyright VARCHAR(255)
);


INSERT INTO Albums (title, artist, release_year, cover_image_name, copyright) VALUES
       ('Wall of Eyes', 'The Smile', 2024, 'wallofeyes.jpg', 'XL Recordings Ltd'),
       ('The Beggar', 'Swans', 2023, 'thebeggar.jpg', 'Young God Records'),
       ('Talk Memory', 'BADBADNOTGOOD', 2021, 'talkmemory.jpg', 'XL Recordings Ltd'),
       ('folklore', 'Taylor Swift', 2020, 'folklore.jpg', 'Taylor Swift'),
       ('OK Computer', 'Radiohead', 1997, 'okcomputer.jpg', 'XL Recordings Ltd'),
       ('Bitches Brew', 'Miles Davis', 1970, 'bitchesbrew.jpg', 'Sony Music Entertainment Inc'),
       ('Different Class', 'Pulp', 1995, 'differentclass.jpg', 'Island Records'),
       ('Daydream Nation', 'Sonic Youth', 1988, 'daydreamnation.jpg', 'Squeaky Squawk');

SELECT * FROM Albums;
