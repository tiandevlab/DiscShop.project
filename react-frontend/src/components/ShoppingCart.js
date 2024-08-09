import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch cart items when component mounts
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            // Assuming you have an endpoint to fetch cart items
            const response = await fetch('http://localhost:8080/api/cart-items');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCartItems(data);
        } catch (error) {
            console.error("Could not fetch cart items:", error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/cart-items/${itemId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Refresh cart items after removal
            fetchCartItems();
        } catch (error) {
            console.error("Could not remove item from cart:", error);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.album.price * item.quantity, 0).toFixed(2);
    };

    return (
        <Container className="my-5">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Album</th>
                            <th>Artist</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.album.title}</td>
                                <td>{item.album.artist}</td>
                                <td>${item.album.price}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.album.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <h4>Total: ${calculateTotal()}</h4>
                    <Button variant="primary" onClick={() => navigate('/checkout')}>
                        Proceed to Checkout
                    </Button>
                </>
            )}
        </Container>
    );
};

export default ShoppingCart;