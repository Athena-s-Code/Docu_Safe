import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Get OpenRefine</h3>
          <ul>
            <li><a >User Manual</a></li>
            <li><a >Get Involved</a></li>
            <li><a >Extensions</a></li>
            {/* Add other resource links here */}
          </ul>
          {/* <p>A powerful tool for data cleaning and transformation</p> */}
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a >User Manual</a></li>
            <li><a >Get Involved</a></li>
            <li><a >Extensions</a></li>
            {/* Add other resource links here */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li><a >Gitter Chat</a></li>
            <li><a >GitHub Repository</a></li>
            <li><a >Contributing Forum</a></li>
            {/* Add other community links here */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OpenRefine. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

