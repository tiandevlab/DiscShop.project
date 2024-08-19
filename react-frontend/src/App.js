// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Albums from './components/Albums';
import Admin from './components/Admin';
import AlbumDetail from './components/AlbumDetail';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import SearchResults from './components/SearchResults';
import Profile from './components/Profile';
import Login from './components/Login'; // Import the new Login component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/albums" element={<Albums />} />
                    <Route path="/albums/:id" element={<AlbumDetail />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} /> {/* Add this new route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;