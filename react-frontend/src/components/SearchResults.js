import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function SearchResults() {
    const [results, setResults] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const term = searchParams.get('term');

        // Fetch search results
        fetch(`http://localhost:8080/discshoppro/albums/search?searchTerm=${term}`)
            .then(response => response.json())
            .then(data => setResults(data))
            .catch(error => console.error('Error:', error));
    }, [location]);

    return (
        <Container className="py-5">
            <h2 className="mb-4">Search Results</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {results.map((album) => (
                    <Col key={album.id}>
                        <Card className="h-100">
                            <Link to={`/albums/${album.id}`}>
                                <Card.Img
                                    variant="top"
                                    src={`/images/${album.coverImageName}`}
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

export default SearchResults;