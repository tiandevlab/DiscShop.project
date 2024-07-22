package com.tian.discshoppro.model.dto;

import java.util.Date;
import java.util.List;

public class ShoppingCartDTO {
    private Long id;
    private Long userId;
    private String username;
    private Date createdAt;
    private List<CartItemDTO> items;

    public ShoppingCartDTO() {}

    public ShoppingCartDTO(Long id, Long userId, String username, Date createdAt, List<CartItemDTO> items) {
        this.id = id;
        this.userId = userId;
        this.username = username;
        this.createdAt = createdAt;
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public List<CartItemDTO> getItems() {
        return items;
    }

    public void setItems(List<CartItemDTO> items) {
        this.items = items;
    }
}