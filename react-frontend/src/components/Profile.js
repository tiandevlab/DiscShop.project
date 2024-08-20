import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

function Profile() {
    const { user } = useAuth();

    if (!user) {
        return <Container className="mt-5"><p>Please log in to view this page.</p></Container>;
    }

    return (
        <Container className="mt-5">
            <Card>
                <Card.Header as="h5">User Profile</Card.Header>
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>
                        <strong>Email:</strong> {user.email}<br />
                        <strong>Roles:</strong> {user.roles.join(', ')}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Profile;