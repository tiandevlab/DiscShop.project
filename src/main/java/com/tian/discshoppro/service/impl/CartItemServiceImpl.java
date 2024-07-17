package com.tian.discshoppro.service.impl;

import com.tian.discshoppro.model.CartItem;
import com.tian.discshoppro.repository.CartItemRepository;
import com.tian.discshoppro.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    @Autowired
    public CartItemServiceImpl(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    @Override
    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    @Override
    public Optional<CartItem> getCartItemById(Long id) {
        return cartItemRepository.findById(id);
    }

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    @Override
    public CartItem updateCartItem(Long id, CartItem cartItemDetails) {
        return cartItemRepository.findById(id)
                .map(existingCartItem -> {
                    existingCartItem.setCart(cartItemDetails.getCart());
                    existingCartItem.setAlbum(cartItemDetails.getAlbum());
                    existingCartItem.setQuantity(cartItemDetails.getQuantity());
                    return cartItemRepository.save(existingCartItem);
                })
                .orElse(null);
    }

    @Override
    public void deleteCartItem(Long id) {
        cartItemRepository.deleteById(id);
    }

    @Override
    public List<CartItem> getCartItemsByCartId(Long cartId) {
        return cartItemRepository.findByCartId(cartId);
    }

    @Override
    public List<CartItem> getCartItemsByAlbumId(Long albumId) {
        return cartItemRepository.findByAlbumId(albumId);
    }

    @Override
    @Transactional
    public void deleteCartItemsByCartId(Long cartId) {
        cartItemRepository.deleteByCartId(cartId);
    }
}