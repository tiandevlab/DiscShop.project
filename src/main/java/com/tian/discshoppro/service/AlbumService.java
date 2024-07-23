package com.tian.discshoppro.service;

import com.tian.discshoppro.model.Album;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

public interface AlbumService {
    List<Album> getAllAlbums();
    Album getAlbumById(Long id);
    Album createAlbum(Album album);
    Album updateAlbum(Long id, Album albumDetails);
    void deleteAlbum(Long id);
    List<Album> searchAlbums(String searchTerm);
    List<Album> searchAlbumsByTitle(String searchTerm);
    List<Album> getAlbumsByArtist(String artist);
    List<Album> getAlbumsByYear(Integer year);
    List<Album> getAlbumsByPriceRange(Double minPrice, Double maxPrice);
    List<Album> getAlbumsByArtistAfterYear(String artist, Integer year);
    Long countAlbumsByArtist(String artist);
    List<Album> getTopExpensiveAlbums(int limit);
}
