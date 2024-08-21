package com.tian.discshoppro.service.impl;

import com.tian.discshoppro.model.CartItem;
import com.tian.discshoppro.model.ShoppingCart;
import com.tian.discshoppro.model.Album;
import com.tian.discshoppro.model.User;
import com.tian.discshoppro.model.dto.CartItemDTO;
import com.tian.discshoppro.repository.CartItemRepository;
import com.tian.discshoppro.repository.ShoppingCartRepository;
import com.tian.discshoppro.repository.AlbumRepository;
import com.tian.discshoppro.repository.UserRepository;
import com.tian.discshoppro.service.CartItemService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.Date;

@Service
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;
    private final ShoppingCartRepository shoppingCartRepository;
    private final AlbumRepository albumRepository;
    private final UserRepository userRepository;

    public CartItemServiceImpl(CartItemRepository cartItemRepository,
                               ShoppingCartRepository shoppingCartRepository,
                               AlbumRepository albumRepository,
                               UserRepository userRepository) {
        this.cartItemRepository = cartItemRepository;
        this.shoppingCartRepository = shoppingCartRepository;
        this.albumRepository = albumRepository;
        this.userRepository = userRepository;
    }

    private CartItemDTO convertToDTO(CartItem cartItem) {
        return new CartItemDTO(
                cartItem.getId(),
                cartItem.getCart().getId(),
                cartItem.getCart().getUser().getId(),
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
        User user = userRepository.findById(cartItemDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        ShoppingCart cart = shoppingCartRepository.findByUserId(user.getId())
                .stream().findFirst()
                .orElseGet(() -> {
                    ShoppingCart newCart = new ShoppingCart();
                    newCart.setUser(user);
                    newCart.setCreatedAt(new Date());
                    return shoppingCartRepository.save(newCart);
                });

        Album album = albumRepository.findById(cartItemDTO.getAlbumId())
                .orElseThrow(() -> new RuntimeException("Album not found"));

        Optional<CartItem> existingItem = cartItemRepository.findByCartIdAndAlbumId(cart.getId(), album.getId());
        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + cartItemDTO.getQuantity());
            CartItem updatedItem = cartItemRepository.save(item);
            return convertToDTO(updatedItem);
        } else {
            CartItem newItem = new CartItem();
            newItem.setCart(cart);
            newItem.setAlbum(album);
            newItem.setQuantity(cartItemDTO.getQuantity());
            CartItem savedItem = cartItemRepository.save(newItem);
            return convertToDTO(savedItem);
        }
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