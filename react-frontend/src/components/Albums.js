import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Albums() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // Function to fetch albums from the backend
        const fetchAlbums = async () => {
            try {
                const response = await fetch('http://localhost:8080/discshoppro/albums');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAlbums(data);
            } catch (error) {
                console.error("Could not fetch albums:", error);
            }
        };

        fetchAlbums();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <Container className="py-5">
            <h2 className="mb-4">Our Album Collection</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {albums.map((album) => (
                    <Col key={album.id}>
                        <Card className="h-100">
                            <Link to={`/albums/${album.id}`}>
                                <Card.Img
                                    variant="top"
                                    src={`images/${album.coverImageName}`}
                                    alt={album.title}
                                />
                            </Link>
                            <Card.Body>
                                <Card.Title>{album.title}</Card.Title>
                                <Card.Text>
                                    {album.artist} - {album.releaseYear}
                                </Card.Text>
                                <Link to={`/albums/${album.id}`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Albums;