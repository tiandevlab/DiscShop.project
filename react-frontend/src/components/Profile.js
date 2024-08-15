import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Profile() {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        joinDate: '2024-01-01'
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="mx-auto">
                    <Card>
                        <Card.Header as="h5">User Profile</Card.Header>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>
                                <strong>Email:</strong> {user.email}<br />
                                <strong>Joined:</strong> {user.joinDate}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;