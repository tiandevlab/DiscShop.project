import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Heart, HeartFill, Cart } from 'react-bootstrap-icons';
import { useAuth } from '../context/AuthContext';

const AlbumDetail = () => {
    const [album, setAlbum] = useState(null);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const { id } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetchAlbumDetails();
        if (user) {
            checkWishlistStatus();
        }
    }, [id, user]);

    const fetchAlbumDetails = async () => {
        try {
            const response = await fetch(`http://localhost:8080/discshoppro/albums/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setAlbum(data);
        } catch (error) {
            console.error("Could not fetch album details:", error);
        }
    };

    const checkWishlistStatus = async () => {
        // Implement wishlist check logic here
    };

    const toggleWishlist = async () => {
        // Implement wishlist toggle logic here
    };

    const addToCart = async () => {
        if (!user) {
            alert('Please log in to add items to your cart.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/cart-items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.id,
                    albumId: album.id,
                    quantity: 1
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            alert('Album added to cart successfully!');
        } catch (error) {
            console.error("Could not add to cart:", error);
            alert('Failed to add album to cart. Please try again.');
        }
    };

    if (!album) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="my-5">
            <Row>
                <Col md={4}>
                    <Image src={`/images/${album.coverImageName}`} alt={album.title} fluid />
                </Col>
                <Col md={8}>
                    <h2>{album.title}</h2>
                    <h4>{album.artist}</h4>
                    <p>Release Year: {album.releaseYear}</p>
                    <p>Price: ${album.price}</p>
                    <p>Copyright: {album.copyright}</p>
                    <Button variant="primary" className="me-2" onClick={addToCart}>
                        <Cart className="me-2" />
                        Add to Cart
                    </Button>
                    <Button
                        variant={isInWishlist ? "danger" : "outline-danger"}
                        onClick={toggleWishlist}
                    >
                        {isInWishlist ? <HeartFill className="me-2" /> : <Heart className="me-2" />}
                        {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </Button>
                    <Link to="/albums" className="btn btn-secondary ms-2">
                        Back to Albums
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default AlbumDetail;