package com.tian.discshoppro.repository;

import com.tian.discshoppro.model.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AlbumRepository extends JpaRepository<Album, Long> {
    @Query("SELECT a FROM Album a WHERE LOWER(REPLACE(a.title, ' ', '')) LIKE LOWER(CONCAT('%', REPLACE(:searchTerm, ' ', ''), '%'))")
    List<Album> searchByTitleIgnoringCaseAndSpace(@Param("searchTerm") String searchTerm);

    // Find albums by artist, ignoring case
    List<Album> findByArtistIgnoreCase(String artist);

    // Find albums released in a specific year
    List<Album> findByReleaseYear(Integer releaseYear);

    // Find albums within a price range
    List<Album> findByPriceBetween(Double minPrice, Double maxPrice);

    // Find albums by a specific artist and released after a certain year
    @Query("SELECT a FROM Album a WHERE LOWER(a.artist) = LOWER(:artist) AND a.releaseYear >= :year")
    List<Album> findByArtistAndReleaseYearAfter(@Param("artist") String artist, @Param("year") Integer year);

    // Count the number of albums by a specific artist
    @Query("SELECT COUNT(a) FROM Album a WHERE LOWER(a.artist) = LOWER(:artist)")
    Long countAlbumsByArtist(@Param("artist") String artist);

    // Find top N expensive albums
    @Query("SELECT a FROM Album a ORDER BY a.price DESC")
    List<Album> findTopExpensiveAlbums(org.springframework.data.domain.Pageable pageable);

    // Search albums by title or artist, ignoring case
    @Query("SELECT a FROM Album a WHERE LOWER(a.title) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR LOWER(a.artist) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Album> searchByTitleOrArtist(@Param("searchTerm") String searchTerm);

}
