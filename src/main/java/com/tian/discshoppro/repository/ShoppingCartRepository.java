package com.tian.discshoppro.repository;

import com.tian.discshoppro.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
    List<ShoppingCart> findByUserId(Long userId);
    Optional<ShoppingCart> findByUserIdAndId(Long userId, Long cartId);
    void deleteByUserIdAndId(Long userId, Long cartId);
}