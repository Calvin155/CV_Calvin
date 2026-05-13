import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import '../css/Home.css';

function Home() {
  return (
    <section className="home-container">
      <div className="intro">
        <img
          src="/Images/Calvin_Profile_Photo.JPG"
          alt="Calvin Lynch"
          className="profile-photo"
          loading="eager"
        />

        <h1 className="name-heading">Calvin Lynch</h1>
        <p className="title">Graduate Software Test Engineer</p>

        <div className="home-badges">
          <span className="home-badge">🎓 1:1 First Class Honours · TUS 2025</span>
          <span className="home-badge">💼 Kneat Solutions</span>
          <span className="home-badge">🛡️ ISTQB Certified</span>
        </div>

        <p className="summary">
          Welcome to my personal website. I'm a Graduate Software Test Engineer with a passion for building and testing high-quality, reliable software. I hold a First Class Honours degree in Software Development from TUS and am ISTQB Foundation Level Certified.
        </p>
        <p className="summary">
          Through college, a CO-OP placement at Progress Software, and my current role at Kneat Solutions, I've developed hands-on experience across software testing, DevOps, full-stack development, and cloud infrastructure — from writing test cases and CI/CD pipelines to building IoT systems and AI-assisted security tools.
        </p>

        <div className="home-actions">
          <Link to="/projects" className="home-btn home-btn-primary">View Projects →</Link>
          <a
            href="https://www.linkedin.com/in/calvin-lynch-9620b4321/"
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn-outline"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/Calvin155"
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn-outline"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
