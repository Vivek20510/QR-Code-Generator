import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Ensure this path points correctly to your CSS file

const Home = () => {
  return (
    <div>
      {/* Main content */}
      <div className="home-container">
        <h1>Welcome to the QR Code Generator</h1>
        <p>
          Easily create custom QR codes with our simple-to-use generator. Just enter the text or URL you want to convert, choose the size and error correction level, and you're all set.
        </p>
        <div className="button-container">
          <Link to="/qr-generator">
            <button>Generate QR Code</button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 QR Code Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
