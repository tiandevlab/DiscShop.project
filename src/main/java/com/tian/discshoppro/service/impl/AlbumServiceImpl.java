package com.tian.discshoppro.service.impl;

import com.tian.discshoppro.model.Album;
import com.tian.discshoppro.repository.AlbumRepository;
import com.tian.discshoppro.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.List;
import com.tian.discshoppro.exception.AlbumNotFoundException;

@Service
public class AlbumServiceImpl implements AlbumService {

    private final AlbumRepository albumRepository;

    @Autowired
    public AlbumServiceImpl(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    @Override
    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    @Override
    public Album getAlbumById(Long id) {
        return albumRepository.findById(id)
                .orElseThrow(() -> new AlbumNotFoundException("Album not found with id: " + id));
    }

    @Override
    public Album createAlbum(Album album) {
        return albumRepository.save(album);
    }

    @Override
    public Album updateAlbum(Long id, Album albumDetails) {
        return albumRepository.findById(id)
                .map(existingAlbum -> {
                    existingAlbum.setTitle(albumDetails.getTitle());
                    existingAlbum.setArtist(albumDetails.getArtist());
                    existingAlbum.setReleaseYear(albumDetails.getReleaseYear());
                    existingAlbum.setCoverImageName(albumDetails.getCoverImageName());
                    existingAlbum.setPrice(albumDetails.getPrice());
                    existingAlbum.setCopyright(albumDetails.getCopyright());
                    return albumRepository.save(existingAlbum);
                })
                .orElse(null);
    }

    @Override
    public void deleteAlbum(Long id) {
        albumRepository.deleteById(id);
    }

    @Override
    public List<Album> searchAlbums(String searchTerm) {
        return albumRepository.searchByTitleOrArtist(searchTerm);
    }

    @Override
    public List<Album> searchAlbumsByTitle(String searchTerm) {
        return albumRepository.searchByTitleIgnoringCaseAndSpace(searchTerm);
    }

    @Override
    public List<Album> getAlbumsByArtist(String artist) {
        return albumRepository.findByArtistIgnoreCase(artist);
    }

    @Override
    public List<Album> getAlbumsByYear(Integer year) {
        return albumRepository.findByReleaseYear(year);
    }

    @Override
    public List<Album> getAlbumsByPriceRange(Double minPrice, Double maxPrice) {
        return albumRepository.findByPriceBetween(minPrice, maxPrice);
    }

    @Override
    public List<Album> getAlbumsByArtistAfterYear(String artist, Integer year) {
        return albumRepository.findByArtistAndReleaseYearAfter(artist, year);
    }

    @Override
    public Long countAlbumsByArtist(String artist) {
        return albumRepository.countAlbumsByArtist(artist);
    }

    @Override
    public List<Album> getTopExpensiveAlbums(int limit) {
        return albumRepository.findTopExpensiveAlbums(PageRequest.of(0, limit));
    }
}