package com.tian.discshoppro.service;

import com.tian.discshoppro.model.ShoppingCart;
import java.util.List;
import java.util.Optional;

public interface ShoppingCartService {
    List<ShoppingCart> getAllShoppingCarts();
    Optional<ShoppingCart> getShoppingCartById(Long id);
    ShoppingCart createShoppingCart(ShoppingCart shoppingCart);
    ShoppingCart updateShoppingCart(Long id, ShoppingCart shoppingCartDetails);
    void deleteShoppingCart(Long id);
    List<ShoppingCart> getShoppingCartsByUserId(Long userId);
    Optional<ShoppingCart> getShoppingCartByUserIdAndCartId(Long userId, Long cartId);
    void deleteShoppingCartByUserIdAndCartId(Long userId, Long cartId);
}