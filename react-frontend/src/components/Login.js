import React, { useState } from 'react';
import { Container, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

const appleStyle = {
    card: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
    },
    title: {
        fontSize: '24px',
        fontWeight: '500',
        marginBottom: '30px',
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: '20px',
    },
    input: {
        borderRadius: '8px',
        border: '1px solid #d1d1d1',
        padding: '12px',
        fontSize: '16px',
        width: '100%',
    },
    button: {
        background: '#0071e3',
        border: 'none',
        borderRadius: '8px',
        padding: '12px',
        fontSize: '16px',
        fontWeight: '500',
        width: '100%',
        marginTop: '10px',
    },
    toggleButton: {
        background: 'transparent',
        border: 'none',
        color: '#0071e3',
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
    },
    inputGroup: {
        position: 'relative',
    },
};

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const user = await response.json();
                login(user);
                navigate('/'); // Redirect to home page after successful login
            } else {
                const errorData = await response.text();
                setError(errorData || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Login error:', err);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container>
            <Card style={appleStyle.card}>
                <Card.Body>
                    <h2 style={appleStyle.title}>Welcome Back</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group style={appleStyle.formGroup}>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                style={appleStyle.input}
                            />
                        </Form.Group>

                        <Form.Group style={appleStyle.formGroup}>
                            <div style={appleStyle.inputGroup}>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={appleStyle.input}
                                />
                                <Button
                                    variant="link"
                                    onClick={togglePasswordVisibility}
                                    style={appleStyle.toggleButton}
                                >
                                    {showPassword ? <EyeSlash /> : <Eye />}
                                </Button>
                            </div>
                        </Form.Group>

                        {error && <p className="text-danger">{error}</p>}

                        <Button variant="primary" type="submit" style={appleStyle.button}>
                            Sign In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;