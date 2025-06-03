import React from 'react';
import '../css/About.css';

const whoami = () => {
    return (
    <>
        <section id="about" className="about-section">
        <h2 className="about-heading">About Me</h2>
        <p className="about-paragraph">
          Hi, I'm <strong>Calvin Lynch</strong>, a software developer with a background in full-stack development, cloud computing, and IoT-based projects.
          I'm currently completing my Bachelor's degree in Software Development and have experience working with technologies such as Python, Java, React, FastAPI, and AWS.
        </p>
        <p className="about-paragraph">
          As part of my third-year CO-OP/work placement, I completed an 8-month internship with a Platform Operations team. This experience allowed me to deepen my understanding of DevOps methodologies, automation, and system reliability.
        </p>
        <p className="about-paragraph">
          My interests include building scalable web applications, developing IoT systems, and visualizing data to solve real-world problems — like my recent project:
          a portable air quality monitoring system using a Raspberry Pi and cloud-based dashboards.
        </p>
        <p className="about-paragraph">
          In my free time, I enjoy sports, music, and continually learning new technologies to stay sharp and creative in the ever-evolving tech world.
        </p>

      </section>
    </>
    );
}

export default whoami;