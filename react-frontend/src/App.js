import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Albums from './components/Albums';
import Admin from './components/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <HomePage/>
            <Albums />
            <Admin />
        </div>
    );
}

export default App;