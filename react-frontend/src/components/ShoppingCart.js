import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/cart-items');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched cart items:", data);
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
            fetchCartItems();
        } catch (error) {
            console.error("Could not remove item from cart:", error);
        }
    };

    // Note: We'll need to fetch album details separately to get prices
    const calculateTotal = () => {
        // For now, we can't calculate the total without price information
        return "N/A";
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
                            <th>Album Title</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.albumTitle}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <h4>Total: {calculateTotal()}</h4>
                    <Button variant="primary" onClick={() => navigate('/checkout')}>
                        Proceed to Checkout
                    </Button>
                </>
            )}
        </Container>
    );
};

export default ShoppingCart;