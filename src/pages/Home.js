import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <section className="home-container">
      <div className="intro">
        <img src="/Images/Calvin_Profile_Photo.JPG" alt="Calvin Lynch" className="profile-photo" />
        <h1 className="name-heading">Calvin Lynch</h1>
        <p className="title">Graduate Software Test Engineer</p>
        <p className="summary">
          Welcome to my personal website! 
          <br />
          I am a Graduate Software Test Engineer, having achieved a 1:1 (1st Class Honours) degree at the Technological University of the Shannon Midlands (TUS) in 2025 
          (Graduation Ceremony in October 2025). I’m eager to advance my career in software testing and development, driven by a passion for building and ensuring high-quality, impactful software solutions.
          <br />
          Through college, CO-OP placements, and various experiences, I have developed a strong foundation in software development and DevOps practices, 
          along with a growing expertise in software quality assurance and automated testing. I am familiar with key concepts and practices such as the Software Development Life Cycle (SDLC), 
          MVC architecture, REST API design and testing, DevOps methodologies and tools like Docker & Kubernetes, CI/CD pipelines, cloud platforms (AWS and Azure), 
          database design, and modern test automation frameworks.
          <br />
          I'm actively exploring opportunities where I can grow, contribute, and take on new challenges as part of a collaborative and innovative team.
          <br />
          Feel free to check out my projects and get in touch.
        </p>
      </div>
    </section>
  );
}

export default Home;
