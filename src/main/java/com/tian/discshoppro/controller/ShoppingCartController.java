package com.tian.discshoppro.controller;

import com.tian.discshoppro.model.dto.ShoppingCartDTO;
import com.tian.discshoppro.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shopping-carts")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    @GetMapping
    public List<ShoppingCartDTO> getAllShoppingCarts() {
        return shoppingCartService.getAllShoppingCarts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShoppingCartDTO> getShoppingCartById(@PathVariable Long id) {
        return shoppingCartService.getShoppingCartById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public List<ShoppingCartDTO> getShoppingCartsByUserId(@PathVariable Long userId) {
        return shoppingCartService.getShoppingCartsByUserId(userId);
    }

    @PostMapping
    public ShoppingCartDTO createShoppingCart(@RequestBody ShoppingCartDTO shoppingCartDTO) {
        return shoppingCartService.createShoppingCart(shoppingCartDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShoppingCartDTO> updateShoppingCart(@PathVariable Long id, @RequestBody ShoppingCartDTO shoppingCartDTO) {
        ShoppingCartDTO updatedShoppingCart = shoppingCartService.updateShoppingCart(id, shoppingCartDTO);
        return ResponseEntity.ok(updatedShoppingCart);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShoppingCart(@PathVariable Long id) {
        shoppingCartService.deleteShoppingCart(id);
        return ResponseEntity.ok().build();
    }
}