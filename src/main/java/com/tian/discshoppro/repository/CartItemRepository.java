package com.tian.discshoppro.repository;

import com.tian.discshoppro.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByCartId(Long cartId);
    List<CartItem> findByAlbumId(Long albumId);
    void deleteByCartId(Long cartId);
}