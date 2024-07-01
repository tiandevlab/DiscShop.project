package com.tian.discshoppro.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Albums")
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String artist;

    @Column(name = "release_year")
    private Integer releaseYear;

    @Column(name = "cover_image_name")
    private String coverImageName;

    @Column(name = "price")
    private Double price;

    @Column
    private String copyright;

    // Constructors

    public Album() {
    }

    public Album(Long id, String title, String artist, Integer releaseYear, String coverImageName, Double price, String copyright) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.releaseYear = releaseYear;
        this.coverImageName = coverImageName;
        this.price = price;
        this.copyright = copyright;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public Integer getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(Integer releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getCoverImageName() {
        return coverImageName;
    }

    public void setCoverImageName(String coverImageName) {
        this.coverImageName = coverImageName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getCopyright() {
        return copyright;
    }

    public void setCopyright(String copyright) {
        this.copyright = copyright;
    }

    @Override
    public String toString() {
        return "Album{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", artist='" + artist + '\'' +
                ", releaseYear=" + releaseYear +
                ", coverImageName='" + coverImageName + '\'' +
                ", price=" + price +
                ", copyright='" + copyright + '\'' +
                '}';
    }
}
