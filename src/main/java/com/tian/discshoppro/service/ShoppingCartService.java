package com.tian.discshoppro.service;

import com.tian.discshoppro.model.dto.ShoppingCartDTO;
import java.util.List;
import java.util.Optional;

public interface ShoppingCartService {
    List<ShoppingCartDTO> getAllShoppingCarts();
    Optional<ShoppingCartDTO> getShoppingCartById(Long id);
    List<ShoppingCartDTO> getShoppingCartsByUserId(Long userId);
    ShoppingCartDTO createShoppingCart(ShoppingCartDTO shoppingCartDTO);
    ShoppingCartDTO updateShoppingCart(Long id, ShoppingCartDTO shoppingCartDTO);
    void deleteShoppingCart(Long id);
}