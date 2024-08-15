import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setWishlist(storedWishlist);
    }, []);

    return (
        <Container className="mt-5">
            <h2>Your Wishlist</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {wishlist.map((item) => (
                    <Col key={item.id}>
                        <Card>
                            <Card.Img variant="top" src={`/images/${item.coverImageName}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.artist}</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Wishlist;