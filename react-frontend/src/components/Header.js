import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from './Search';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Frank Disc</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
                        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                    </Nav>
                    <Search />
                    <Nav>
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wishlist">Wishlist</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/admin">Admin</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;