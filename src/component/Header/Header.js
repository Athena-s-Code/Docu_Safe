import React from 'react';
import './Header.css'; // Import your CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="docu-safe">Docu Safe</div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Documentation</a></li>
          <li className="nav-item"><a href="#">Community</a></li>
          <li className="nav-item"><a href="#">Blog</a></li>
          <li className="nav-item"><a href="#">Donate</a></li>
          <li className="nav-item"><a href="#">Search</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
