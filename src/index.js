import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css'; // Ensure this path matches your project structure
import App from './App';

// Create root and render the main App component inside StrictMode
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
