import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="section-title">Get OpenRefine</h3>
          <ul className="section-links">
            <li><a href="/download">Download</a></li>
            <li><a href="/whatsnew">What's new</a></li>
            <li><a href="/extensions">Extensions</a></li>
            <li><a href="/otherdistributions">Other distributions</a></li>
            <li><a href="/github">GitHub repository</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="section-title">Documentation</h3>
          <ul className="section-links">
            <li><a href="/documentation/user-manual">User Manual</a></li>
            <li><a href="/documentation/contributing">Contributing</a></li>
            <li><a href="/documentation/externalresources">External resources</a></li>
            <li><a href="/documentation/privacynotice">Privacy notice</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="section-title">Community</h3>
          <ul className="section-links">
            <li><a href="/community/get-involved">Get involved</a></li>
            <li><a href="/community/forum">Forum</a></li>
            <li><a href="/community/chat">Gitter chat</a></li>
            <li><a href="/community/twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">&copy; {new Date().getFullYear()} OpenRefine. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
