import React from 'react';
import { Mail, Linkedin, Github, FileText, Send } from 'lucide-react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Calvin Lynch – Software Developer</p>

        <div className="footer-links">
          <a href="https://www.linkedin.com/in/calvin-lynch-9620b4321" target="_blank" rel="noopener noreferrer" className="btn">
            <Linkedin size={18} /> LinkedIn
          </a>

          <a href="mailto:calvinlynch181@outlook.com" className="btn">
            <Mail size={18} /> Email Me
          </a>

          <a href="https://github.com/Calvin155" target="_blank" rel="noopener noreferrer" className="btn">
            <Github size={18} /> GitHub
          </a>
        </div>

        <div className="contact-buttons">
          <a href="/contact" className="btn">
            <Send size={18} /> Contact Me
          </a>

          <a href="Images/CV/Calvin Lynch - CV 2025.pdf" className="btn" target="_blank" rel="noopener noreferrer">
            <FileText size={18} /> Download CV
          </a>
        </div>

        <p className="updated-note">Last Updated: 09/06/2025</p>
      </div>
    </footer>
  );
}

export default Footer;
