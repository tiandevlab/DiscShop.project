package com.tian.discshoppro.service;

import com.tian.discshoppro.model.CartItem;
import java.util.List;
import java.util.Optional;

public interface CartItemService {
    List<CartItem> getAllCartItems();
    Optional<CartItem> getCartItemById(Long id);
    CartItem createCartItem(CartItem cartItem);
    CartItem updateCartItem(Long id, CartItem cartItemDetails);
    void deleteCartItem(Long id);
    List<CartItem> getCartItemsByCartId(Long cartId);
    List<CartItem> getCartItemsByAlbumId(Long albumId);
    void deleteCartItemsByCartId(Long cartId);
}