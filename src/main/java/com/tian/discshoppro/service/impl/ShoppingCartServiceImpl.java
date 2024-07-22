package com.tian.discshoppro.service.impl;

import com.tian.discshoppro.model.ShoppingCart;
import com.tian.discshoppro.model.dto.ShoppingCartDTO;
import com.tian.discshoppro.repository.ShoppingCartRepository;
import com.tian.discshoppro.repository.UserRepository;
import com.tian.discshoppro.service.ShoppingCartService;
import com.tian.discshoppro.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartItemService cartItemService;

    private ShoppingCartDTO convertToDTO(ShoppingCart shoppingCart) {
        return new ShoppingCartDTO(
                shoppingCart.getId(),
                shoppingCart.getUser().getId(),
                shoppingCart.getUser().getUsername(),
                shoppingCart.getCreatedAt(),
                cartItemService.getCartItemsByCartId(shoppingCart.getId())
        );
    }

    private ShoppingCart convertToEntity(ShoppingCartDTO shoppingCartDTO) {
        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setId(shoppingCartDTO.getId());
        shoppingCart.setUser(userRepository.findById(shoppingCartDTO.getUserId()).orElse(null));
        shoppingCart.setCreatedAt(shoppingCartDTO.getCreatedAt());
        // Note: We don't set items here as they are managed separately
        return shoppingCart;
    }

    @Override
    public List<ShoppingCartDTO> getAllShoppingCarts() {
        return shoppingCartRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<ShoppingCartDTO> getShoppingCartById(Long id) {
        return shoppingCartRepository.findById(id).map(this::convertToDTO);
    }

    @Override
    public List<ShoppingCartDTO> getShoppingCartsByUserId(Long userId) {
        return shoppingCartRepository.findByUserId(userId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ShoppingCartDTO createShoppingCart(ShoppingCartDTO shoppingCartDTO) {
        ShoppingCart shoppingCart = convertToEntity(shoppingCartDTO);
        ShoppingCart savedShoppingCart = shoppingCartRepository.save(shoppingCart);
        return convertToDTO(savedShoppingCart);
    }

    @Override
    public ShoppingCartDTO updateShoppingCart(Long id, ShoppingCartDTO shoppingCartDTO) {
        return shoppingCartRepository.findById(id)
                .map(existingCart -> {
                    existingCart.setUser(userRepository.findById(shoppingCartDTO.getUserId()).orElse(null));
                    existingCart.setCreatedAt(shoppingCartDTO.getCreatedAt());
                    ShoppingCart updatedCart = shoppingCartRepository.save(existingCart);
                    return convertToDTO(updatedCart);
                })
                .orElse(null);
    }

    @Override
    public void deleteShoppingCart(Long id) {
        shoppingCartRepository.deleteById(id);
    }
}