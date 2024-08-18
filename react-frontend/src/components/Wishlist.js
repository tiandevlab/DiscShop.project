import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        // Fetch wishlist items when component mounts
        fetchWishlistItems();
    }, []);

    const fetchWishlistItems = async () => {
        try {
            // This is a mock API call. Replace with your actual API endpoint when available
            const response = await fetch('http://localhost:8080/api/wishlist');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setWishlistItems(data);
        } catch (error) {
            console.error("Could not fetch wishlist items:", error);
        }
    };

    const removeFromWishlist = async (itemId) => {
        try {
            // This is a mock API call. Replace with your actual API endpoint when available
            const response = await fetch(`http://localhost:8080/api/wishlist/${itemId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Refresh wishlist items after removal
            fetchWishlistItems();
        } catch (error) {
            console.error("Could not remove item from wishlist:", error);
        }
    };

    return (
        <Container className="my-5">
            <h2 className="mb-4">Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {wishlistItems.map((item) => (
                        <Col key={item.id}>
                            <Card>
                                <Link to={`/albums/${item.id}`}>
                                    <Card.Img variant="top" src={`/images/${item.coverImageName}`} alt={item.title} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.artist}</Card.Text>
                                    <Button variant="primary" className="me-2">
                                        Add to Cart
                                    </Button>
                                    <Button variant="danger" onClick={() => removeFromWishlist(item.id)}>
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Wishlist;