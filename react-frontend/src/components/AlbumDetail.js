import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Heart, HeartFill, Cart } from 'react-bootstrap-icons';

const AlbumDetail = () => {
    const [album, setAlbum] = useState(null);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        // Fetch album details when component mounts
        fetchAlbumDetails();
        // Check if the album is in the wishlist
        checkWishlistStatus();
    }, [id]);

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
        try {
            // This is a mock API call. Replace with your actual API endpoint when available
            const response = await fetch(`http://localhost:8080/api/wishlist/check/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setIsInWishlist(data.isInWishlist);
        } catch (error) {
            console.error("Could not check wishlist status:", error);
        }
    };

    const toggleWishlist = async () => {
        try {
            const method = isInWishlist ? 'DELETE' : 'POST';
            const response = await fetch(`http://localhost:8080/api/wishlist/${id}`, { method });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setIsInWishlist(!isInWishlist);
        } catch (error) {
            console.error("Could not update wishlist:", error);
        }
    };

    const addToCart = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ albumId: id, quantity: 1 }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            alert('Album added to cart successfully!');
        } catch (error) {
            console.error("Could not add to cart:", error);
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