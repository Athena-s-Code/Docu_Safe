import React from 'react';
import './Header.css'; // Import your CSS file for styling
import docuSafeImg from '../../assets/Docu_Safe.png'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="docu-safe"><img className='img-doc-safe' src={docuSafeImg}/></div>
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
