package com.tian.discshoppro.model.dto;

public class CartItemDTO {
    private Long id;
    private Long cartId;
    private Long userId;  // Add this line
    private Long albumId;
    private String albumTitle;
    private Integer quantity;

    public CartItemDTO() {}

    public CartItemDTO(Long id, Long cartId, Long userId, Long albumId, String albumTitle, Integer quantity) {
        this.id = id;
        this.cartId = cartId;
        this.userId = userId;
        this.albumId = albumId;
        this.albumTitle = albumTitle;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getAlbumId() {
        return albumId;
    }

    public void setAlbumId(Long albumId) {
        this.albumId = albumId;
    }

    public String getAlbumTitle() {
        return albumTitle;
    }

    public void setAlbumTitle(String albumTitle) {
        this.albumTitle = albumTitle;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}