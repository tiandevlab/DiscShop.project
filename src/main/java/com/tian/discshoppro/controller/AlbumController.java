package com.tian.discshoppro.controller;

import com.tian.discshoppro.model.Album;
import com.tian.discshoppro.repository.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/discshoppro/albums")
public class AlbumController {

    @Autowired
    private AlbumRepository albumRepository;

    @GetMapping
    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Album> getAlbumById(@PathVariable Long id) {
        return albumRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Album createAlbum(@RequestBody Album newAlbum) {
        return albumRepository.save(newAlbum);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Album> updateAlbum(@PathVariable Long id, @RequestBody Album albumDetails) {
        return albumRepository.findById(id)
                .map(album -> {
                    album.setTitle(albumDetails.getTitle());
                    album.setArtist(albumDetails.getArtist());
                    album.setReleaseYear(albumDetails.getReleaseYear());
                    album.setCoverImageName(albumDetails.getCoverImageName());
                    album.setPrice(albumDetails.getPrice());
                    album.setCopyright(albumDetails.getCopyright());
                    Album updatedAlbum = albumRepository.save(album);
                    return ResponseEntity.ok(updatedAlbum);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAlbum(@PathVariable Long id) {
        return albumRepository.findById(id)
                .map(album -> {
                    albumRepository.delete(album);
                    return ResponseEntity.ok().build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/search")
    public List<Album> searchAlbums(@RequestParam String searchTerm) {
        return albumRepository.searchByTitleOrArtist(searchTerm);
    }

    @GetMapping("/searchTitle")
    public List<Album> searchAlbumsByTitle(@RequestParam String searchTerm) {
        return albumRepository.searchByTitleIgnoringCaseAndSpace(searchTerm);
    }

    @GetMapping("/artist")
    public List<Album> getAlbumsByArtist(@RequestParam String artist) {
        return albumRepository.findByArtistIgnoreCase(artist);
    }

    @GetMapping("/year/{year}")
    public List<Album> getAlbumsByYear(@PathVariable Integer year) {
        return albumRepository.findByReleaseYear(year);
    }

    @GetMapping("/price")
    public List<Album> getAlbumsByPriceRange(@RequestParam Double minPrice,
                                             @RequestParam Double maxPrice) {
        return albumRepository.findByPriceBetween(minPrice, maxPrice);
    }

    @GetMapping("/artist/{artist}/after/{year}")
    public List<Album> getAlbumsByArtistAfterYear(@PathVariable String artist,
                                                  @PathVariable Integer year) {
        return albumRepository.findByArtistAndReleaseYearAfter(artist, year);
    }

    @GetMapping("/count/{artist}")
    public ResponseEntity<Long> countAlbumsByArtist(@PathVariable String artist) {
        Long count = albumRepository.countAlbumsByArtist(artist);
        return ResponseEntity.ok(count);
    }

    @GetMapping("/top-expensive")
    public List<Album> getTopExpensiveAlbums(@RequestParam(defaultValue = "10") int limit) {
        return albumRepository.findTopExpensiveAlbums(PageRequest.of(0, limit));
    }

}
