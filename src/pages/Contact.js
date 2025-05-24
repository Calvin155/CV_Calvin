import React from 'react';
import '../css/ContactForm.css';
import { Mail, Linkedin } from 'lucide-react';

function ContactForm() {
  return (
    <div className="contact-page">
      <h2>Let's Connect</h2>
      <p>If you'd like to get in touch, feel free to reach out through email or LinkedIn.</p>

      <div className="contact-buttons">
        <a href="mailto:calvinlynch181@outlook.com" className="btn email-btn">
          <Mail size={18} /> Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/calvin-lynch-9620b4321/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn linkedin-btn"
        >
          <Linkedin size={18} /> Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
