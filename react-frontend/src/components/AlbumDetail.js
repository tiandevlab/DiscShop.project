import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const AlbumDetail = () => {
    const [album, setAlbum] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Fetch album details when component mounts
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

        fetchAlbumDetails();
    }, [id]);

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
                    <Button variant="primary" className="me-2">Add to Cart</Button>
                    <Link to="/albums">
                        <Button variant="secondary">Back to Albums</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default AlbumDetail;