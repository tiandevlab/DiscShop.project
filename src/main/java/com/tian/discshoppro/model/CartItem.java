package com.tian.discshoppro.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cart_items")
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = false)
    private ShoppingCart cart;

    @ManyToOne
    @JoinColumn(name = "album_id", nullable = false)
    private Album album;

    @Column(nullable = false)
    private Integer quantity;

    public CartItem() {
    }

    public CartItem(Long id, ShoppingCart cart, Album album, Integer quantity) {
        this.id = id;
        this.cart = cart;
        this.album = album;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ShoppingCart getCart() {
        return cart;
    }

    public void setCart(ShoppingCart cart) {
        this.cart = cart;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
