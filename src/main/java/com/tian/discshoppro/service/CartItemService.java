package com.tian.discshoppro.service;

import com.tian.discshoppro.model.dto.CartItemDTO;
import java.util.List;
import java.util.Optional;

public interface CartItemService {
    List<CartItemDTO> getAllCartItems();
    Optional<CartItemDTO> getCartItemById(Long id);
    List<CartItemDTO> getCartItemsByCartId(Long cartId);
    CartItemDTO createCartItem(CartItemDTO cartItemDTO);
    CartItemDTO updateCartItem(Long id, CartItemDTO cartItemDTO);
    void deleteCartItem(Long id);
}