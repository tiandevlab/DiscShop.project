import React, { useState, useEffect, useCallback } from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useAuth();

    const fetchAlbumDetails = async (albumId) => {
        try {
            const response = await fetch(`http://localhost:8080/discshoppro/albums/${albumId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to fetch details for album ${albumId}:`, error);
            return null;
        }
    };

    const fetchCartItems = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            console.log("Fetching cart items for user:", user);
            const response = await fetch(`http://localhost:8080/api/shopping-carts/user/${user.id}`);
            console.log("API Response status:", response.status);
            const responseText = await response.text();
            console.log("API Response text:", responseText);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let data = JSON.parse(responseText);
            console.log("Raw cart data:", data);

            if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0].items)) {
                const items = data[0].items;
                const itemsWithDetails = await Promise.all(items.map(async (item) => {
                    const albumDetails = await fetchAlbumDetails(item.albumId);
                    return { ...item, album: albumDetails };
                }));
                console.log("Processed items with details:", itemsWithDetails);
                setCartItems(itemsWithDetails);
            } else {
                console.log("Unexpected data structure:", data);
                setCartItems([]);
            }
        } catch (error) {
            console.error("Could not fetch cart items:", error);
            setError("Failed to load cart items. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            fetchCartItems();
        }
    }, [user, fetchCartItems]);

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
            setError("Failed to remove item. Please try again.");
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = item.album && typeof item.album.price === 'number' ? item.album.price : 0;
            return total + (price * item.quantity);
        }, 0).toFixed(2);
    };

    if (!user) {
        return <Container className="my-5"><p>Please log in to view your cart.</p></Container>;
    }

    if (isLoading) {
        return <Container className="my-5"><p>Loading cart items...</p></Container>;
    }

    if (error) {
        return <Container className="my-5"><Alert variant="danger">{error}</Alert></Container>;
    }

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
                            <th>Price</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item) => {
                            console.log("Rendering item:", item);
                            const price = item.album && typeof item.album.price === 'number' ? item.album.price : 0;
                            const subtotal = price * item.quantity;
                            return (
                                <tr key={item.id}>
                                    <td>{item.albumTitle || 'N/A'}</td>
                                    <td>{item.quantity}</td>
                                    <td>€{price.toFixed(2)}</td>
                                    <td>€{subtotal.toFixed(2)}</td>
                                    <td>
                                        <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                    <h4>Total: €{calculateTotal()}</h4>
                    <Button variant="primary" onClick={() => navigate('/checkout')}>
                        Proceed to Checkout
                    </Button>
                </>
            )}
        </Container>
    );
};

export default ShoppingCart;