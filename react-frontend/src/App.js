import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <HomePage/>
        </div>
    );
}

export default App;