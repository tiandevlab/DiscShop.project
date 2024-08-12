import React, { useState } from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const paymentMethods = ['Apple Pay', 'Google Pay', 'Visa', 'Mastercard'];

    return (
        <Container className="my-5" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4">Checkout</h2>
            <Card className="shadow-sm">
                <Card.Body>
                    <h5 className="mb-3">Select Payment Method</h5>
                    <Row className="g-2 mb-3">
                        {paymentMethods.map((method) => (
                            <Col xs={6} key={method}>
                                <Button
                                    variant={paymentMethod === method ? "primary" : "outline-primary"}
                                    onClick={() => handlePaymentMethodChange(method)}
                                    className="w-100 text-center py-2"
                                    style={{ borderRadius: '8px' }}
                                >
                                    {method}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                    {paymentMethod && (
                        <p className="text-center mb-3">Selected: {paymentMethod}</p>
                    )}
                    <Button
                        variant="success"
                        disabled={!paymentMethod}
                        className="w-100 py-2"
                        style={{ borderRadius: '8px' }}
                    >
                        Proceed to Payment
                    </Button>
                </Card.Body>
            </Card>
            <p className="text-muted text-center mt-3">
                Note: This is a placeholder for the checkout process. No actual payment will be processed.
            </p>
            <div className="text-center mt-3">
                <Button variant="outline-secondary" onClick={() => navigate('/cart')}>
                    Back to Cart
                </Button>
            </div>
        </Container>
    );
};

export default Checkout;