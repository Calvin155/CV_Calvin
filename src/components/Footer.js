import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Calvin Lynch - Software Developer</p>
        <p>
            LinkedIn: <a href="https://www.linkedin.com/in/calvin-lynch-9620b4321" target="_blank" rel="noopener noreferrer">
                www.linkedin.com/in/calvin-lynch-9620b4321
            </a>
            </p>
        <p>Email: <a href="mailto:calvinlynch181@outlook.com">calvinlynch181@outlook.com</a></p>

        <div className="contact-buttons">
          <a href="/contact" className="btn btn-primary">Contact Me</a>
          <a href="/CV/Calvin Lynch - CV 2025.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Download My CV</a>
        </div>

        <p>Last Updated: 24/05/2025 - Website Updated Regularly</p>
      </div>
    </footer>
  );
}

export default Footer;
