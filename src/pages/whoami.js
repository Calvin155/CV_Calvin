import React from 'react';
import '../css/About.css';

const whoami = () => {
    return (
    <>
        <section id="about" className="about-section">
        <h2 className="about-heading">About Me</h2>
        <p className="about-paragraph">
          Hi, I'm <strong>Calvin Lynch</strong>, I am a Graduate Software Test Engineer with Kneat Solutions. I have a strong passion for software development, testing, and DevOps practices. I thrive on building high-quality software solutions and ensuring they meet the highest standards of reliability and performance.
          I recieved my Bachelor's degree in Software Development in 2025 from the Technological University of the Shannon Midlands (TUS) recieving a First Class Honours (Grade: 1:1).
        </p>
        <p className="about-paragraph">
          Through my role at Kneat Solutions, I have developed a strong foundation in software quality engineering. I actively contribute to regression cycles, exploratory testing, and pull request validation while using Azure DevOps for structured test management and defect tracking. Being ISTQB Foundation Level certified has strengthened my understanding of testing principles, risk-based testing, and quality assurance processes. I take a proactive approach to identifying edge cases, improving test coverage, and collaborating closely with developers to ensure robust, reliable releases.
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