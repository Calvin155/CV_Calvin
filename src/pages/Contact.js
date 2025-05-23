import React, { useState } from 'react';
import '../css/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        placeholder="your.email@example.com"
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your message here..."
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
