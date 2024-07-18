package com.tian.discshoppro.service.impl;

import com.tian.discshoppro.model.ShoppingCart;
import com.tian.discshoppro.repository.ShoppingCartRepository;
import com.tian.discshoppro.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    private final ShoppingCartRepository shoppingCartRepository;

    @Autowired
    public ShoppingCartServiceImpl(ShoppingCartRepository shoppingCartRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
    }

    @Override
    public List<ShoppingCart> getAllShoppingCarts() {
        return shoppingCartRepository.findAll();
    }

    @Override
    public Optional<ShoppingCart> getShoppingCartById(Long id) {
        return shoppingCartRepository.findById(id);
    }

    @Override
    public ShoppingCart createShoppingCart(ShoppingCart shoppingCart) {
        return shoppingCartRepository.save(shoppingCart);
    }

    @Override
    public ShoppingCart updateShoppingCart(Long id, ShoppingCart shoppingCartDetails) {
        return shoppingCartRepository.findById(id)
                .map(existingCart -> {
                    existingCart.setUser(shoppingCartDetails.getUser());
                    existingCart.setItems(shoppingCartDetails.getItems());
                    existingCart.setCreatedAt(shoppingCartDetails.getCreatedAt());
                    return shoppingCartRepository.save(existingCart);
                })
                .orElse(null);
    }

    @Override
    public void deleteShoppingCart(Long id) {
        shoppingCartRepository.deleteById(id);
    }

    @Override
    public List<ShoppingCart> getShoppingCartsByUserId(Long userId) {
        return shoppingCartRepository.findByUserId(userId);
    }

    @Override
    public Optional<ShoppingCart> getShoppingCartByUserIdAndCartId(Long userId, Long cartId) {
        return shoppingCartRepository.findByUserIdAndId(userId, cartId);
    }

    @Override
    @Transactional
    public void deleteShoppingCartByUserIdAndCartId(Long userId, Long cartId) {
        shoppingCartRepository.deleteByUserIdAndId(userId, cartId);
    }
}