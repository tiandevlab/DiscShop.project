import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Trigger initial animation
        setTimeout(() => setIsVisible(true), 500);
    }, []);

    const handleExplore = () => {
        navigate('/albums');
    };

    return (
        <div className="home-page">
            <Container>
                <Row className="justify-content-center align-items-center min-vh-100">
                    <Col md={8} className="text-center">
                        <h1 className={`main-title ${isVisible ? 'visible' : ''}`}>Welcome to Frank Disc</h1>
                        <p className={`subtitle ${isVisible ? 'visible' : ''}`}>Discover the finest music here.</p>
                        <div className={`cta-container ${isVisible ? 'visible' : ''}`}>
                            <button className="cta-button" onClick={handleExplore}>Explore Albums</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;