import React from 'react';
import './Header.css';
import docuSafeImg from '../../assets/Docu_Safe.png';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="docu-safe">
          <a href="/" aria-label="Home">
            <img className='img-doc-safe' src={docuSafeImg} alt="Docu Safe Logo" />
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#" aria-label="Documentation">Documentation</a></li>
          <li className="nav-item"><a href="#" aria-label="Community">Community</a></li>
          <li className="nav-item"><a href="#" aria-label="Blog">Blog</a></li>
          <li className="nav-item"><a href="#" aria-label="Donate">Donate</a></li>
          <li className="nav-item">
            <a href="#" aria-label="Search">
              Search <i className="fas fa-search"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
