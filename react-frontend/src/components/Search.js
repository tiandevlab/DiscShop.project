import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // Navigate to search results page with the search term
        navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <Form onSubmit={handleSearch}>
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Search albums..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline-secondary" type="submit">
                    Search
                </Button>
            </InputGroup>
        </Form>
    );
};

export default Search;