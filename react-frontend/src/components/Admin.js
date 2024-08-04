import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

function Admin() {
    const [albums, setAlbums] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentAlbum, setCurrentAlbum] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch albums when component mounts
        fetchAlbums();
    }, []);

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

    const handleClose = () => {
        setShowModal(false);
        setCurrentAlbum({});
        setIsEditing(false);
    };

    const handleShow = (album = {}) => {
        setCurrentAlbum(album);
        setIsEditing(Object.keys(album).length !== 0);
        setShowModal(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentAlbum({ ...currentAlbum, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const url = isEditing
                ? `http://localhost:8080/discshoppro/albums/${currentAlbum.id}`
                : 'http://localhost:8080/discshoppro/albums';
            const method = isEditing ? 'PUT' : 'POST';
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentAlbum),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            fetchAlbums();
            handleClose();
        } catch (error) {
            console.error("Error saving album:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this album?')) {
            try {
                const response = await fetch(`http://localhost:8080/discshoppro/albums/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                fetchAlbums();
            } catch (error) {
                console.error("Error deleting album:", error);
            }
        }
    };

    return (
        <Container className="my-5">
            <h2 className="mb-4">Album Management</h2>
            <Button variant="primary" onClick={() => handleShow()} className="mb-3">
                Add New Album
            </Button>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Release Year</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {albums.map((album) => (
                    <tr key={album.id}>
                        <td>{album.id}</td>
                        <td>{album.title}</td>
                        <td>{album.artist}</td>
                        <td>{album.releaseYear}</td>
                        <td>
                            <Button variant="info" size="sm" onClick={() => handleShow(album)} className="me-2">
                                Edit
                            </Button>
                            <Button variant="danger" size="sm" onClick={() => handleDelete(album.id)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Album' : 'Add New Album'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={currentAlbum.title || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Artist</Form.Label>
                            <Form.Control
                                type="text"
                                name="artist"
                                value={currentAlbum.artist || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Release Year</Form.Label>
                            <Form.Control
                                type="number"
                                name="releaseYear"
                                value={currentAlbum.releaseYear || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cover Image Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="coverImageName"
                                value={currentAlbum.coverImageName || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={currentAlbum.price || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Copyright</Form.Label>
                            <Form.Control
                                type="text"
                                name="copyright"
                                value={currentAlbum.copyright || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {isEditing ? 'Update' : 'Add'} Album
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Admin;