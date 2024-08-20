import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import Login from './components/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

// PrivateRoute component to protect routes that require authentication
const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/albums" element={<Albums />} />
                        <Route path="/albums/:id" element={<AlbumDetail />} />
                        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;