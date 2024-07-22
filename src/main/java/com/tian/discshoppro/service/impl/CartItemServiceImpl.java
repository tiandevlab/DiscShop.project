package com.tian.discshoppro.service.impl;

import com.tian.discshoppro.model.CartItem;
import com.tian.discshoppro.model.dto.CartItemDTO;
import com.tian.discshoppro.repository.CartItemRepository;
import com.tian.discshoppro.repository.ShoppingCartRepository;
import com.tian.discshoppro.repository.AlbumRepository;
import com.tian.discshoppro.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CartItemServiceImpl implements CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @Autowired
    private AlbumRepository albumRepository;

    private CartItemDTO convertToDTO(CartItem cartItem) {
        return new CartItemDTO(
                cartItem.getId(),
                cartItem.getCart().getId(),
                cartItem.getAlbum().getId(),
                cartItem.getAlbum().getTitle(),
                cartItem.getQuantity()
        );
    }

    private CartItem convertToEntity(CartItemDTO cartItemDTO) {
        CartItem cartItem = new CartItem();
        cartItem.setId(cartItemDTO.getId());
        cartItem.setCart(shoppingCartRepository.findById(cartItemDTO.getCartId()).orElse(null));
        cartItem.setAlbum(albumRepository.findById(cartItemDTO.getAlbumId()).orElse(null));
        cartItem.setQuantity(cartItemDTO.getQuantity());
        return cartItem;
    }

    @Override
    public List<CartItemDTO> getAllCartItems() {
        return cartItemRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<CartItemDTO> getCartItemById(Long id) {
        return cartItemRepository.findById(id).map(this::convertToDTO);
    }

    @Override
    public List<CartItemDTO> getCartItemsByCartId(Long cartId) {
        return cartItemRepository.findByCartId(cartId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CartItemDTO createCartItem(CartItemDTO cartItemDTO) {
        CartItem cartItem = convertToEntity(cartItemDTO);
        CartItem savedCartItem = cartItemRepository.save(cartItem);
        return convertToDTO(savedCartItem);
    }

    @Override
    public CartItemDTO updateCartItem(Long id, CartItemDTO cartItemDTO) {
        return cartItemRepository.findById(id)
                .map(existingCartItem -> {
                    existingCartItem.setCart(shoppingCartRepository.findById(cartItemDTO.getCartId()).orElse(null));
                    existingCartItem.setAlbum(albumRepository.findById(cartItemDTO.getAlbumId()).orElse(null));
                    existingCartItem.setQuantity(cartItemDTO.getQuantity());
                    CartItem updatedCartItem = cartItemRepository.save(existingCartItem);
                    return convertToDTO(updatedCartItem);
                })
                .orElse(null);
    }

    @Override
    public void deleteCartItem(Long id) {
        cartItemRepository.deleteById(id);
    }
}