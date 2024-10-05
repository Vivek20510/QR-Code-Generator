// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this file exists or update the path if you have a different structure
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
