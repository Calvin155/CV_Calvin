import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <section className="home-container">
      <div className="intro">
        <img src="/Images/Calvin_Profile_Photo.JPG" alt="Calvin Lynch" className="profile-photo" />
        <h1 className="name-heading">Calvin Lynch</h1>
        <p className="title">Software Developer | Engineer |</p>
        <p className="summary">
          Welcome to my personal website! 
        <br />
          I am a soon-to-be graduate in Software Development, eager to advance my career as a Software Developer, Software Engineer & Dev-Ops Engineer. 
          I am passionate about building impactful software solutions and continuously developing my skills in modern technologies.<br />
          Through college, CO-OP placements, and other experiences, I have gained a strong foundation in software development & Dev-Ops practices. I am familiar with key concepts and practices such as the Software Development Life Cycle (SDLC), MVC architecture, REST API design and development, DevOps methodologies and tools such as Docker & Kubernetes, CI/CD pipelines, cloud platforms like AWS and Azure, database design and more !
        <br />
          Feel free to check out my projects and get in touch.
        </p>
      </div>
    </section>
  );
}

export default Home;
