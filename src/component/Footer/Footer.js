// import React from 'react';

// import './Footer.css';

// const Footer = () => {
//   return (
//     <div className="desktop">
//       <div className="overlap-wrapper">
//         {/* <div className="overlap"> */}
//           <footer className="footer">
//             <div className="overlap-7">
//               <div className="text-wrapper-11">Get OpenRefine</div>
//               <a
//                 className="text-wrapper-12"
//                 href="https://openrefine.org/download"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Download
//               </a>
//               <div className="text-wrapper-13">User manual</div>
//               <div className="text-wrapper-14">Get involved</div>
//               <div className="text-wrapper-15">Extensions</div>
//               <div className="text-wrapper-16">External resources</div>
//               <div className="text-wrapper-17">Gitter chat</div>
//               <div className="text-wrapper-18">GitHub repository</div>
//               <div className="what-s-new">What&#39;s new</div>
//               <div className="text-wrapper-19">Contributing</div>
//               <div className="text-wrapper-20">Forum</div>
//               <div className="text-wrapper-21">Other distributions</div>
//               <div className="text-wrapper-22">Privacy notice</div>
//               <div className="text-wrapper-23">Twitter</div>
//               <div className="text-wrapper-24">Documentation</div>
//               <div className="text-wrapper-25">Community</div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     // </div>
//   );
// };

// export default Footer;

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

