import React from 'react';
import '../css/About.css';

const facts = [
  { label: 'Role',      value: 'Graduate Software Test Engineer' },
  { label: 'Company',   value: 'Kneat Solutions' },
  { label: 'Degree',    value: 'BSc (Hons) 1:1 · TUS 2025' },
  { label: 'Certified', value: 'ISTQB Foundation Level' },
];

const whoami = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About Me</h2>

      <div className="whoami-facts">
        {facts.map(({ label, value }) => (
          <div key={label} className="whoami-fact">
            <span className="whoami-fact-label">{label}</span>
            <span className="whoami-fact-value">{value}</span>
          </div>
        ))}
      </div>

      <p className="about-paragraph">
        Hi, I'm <strong>Calvin Lynch</strong> — a Graduate Software Test Engineer at Kneat Solutions. I have a strong passion for software development, testing, and DevOps practices. I thrive on building high-quality software solutions and ensuring they meet the highest standards of reliability and performance. I received my Bachelor's degree in Software Development in 2025 from the Technological University of the Shannon Midlands (TUS), achieving First Class Honours (Grade: 1:1).
      </p>
      <p className="about-paragraph">
        Through my role at Kneat Solutions, I've developed a strong foundation in software quality engineering. I actively contribute to regression cycles, exploratory testing, and pull request validation while using Azure DevOps for structured test management and defect tracking. Being ISTQB Foundation Level certified has strengthened my understanding of testing principles, risk-based testing, and quality assurance processes. I take a proactive approach to identifying edge cases, improving test coverage, and collaborating closely with developers to ensure robust, reliable releases.
      </p>
      <p className="about-paragraph">
        As part of my third-year CO-OP, I completed an 8-month internship at Progress Software's Platform Operations Team. This gave me deep hands-on experience in DevOps methodologies, CI/CD automation, Prometheus observability, distributed tracing with Jaeger, and cloud infrastructure on Microsoft Azure.
      </p>
      <p className="about-paragraph">
        My interests include building scalable web applications, developing IoT systems, and visualizing data to solve real-world problems — like my Final Year Project: a portable air quality monitoring system built with a Raspberry Pi 5, FastAPI, InfluxDB, and cloud dashboards.
      </p>
      <p className="about-paragraph">
        In my free time, I enjoy sports (hurling and football), music, and continuously learning new technologies to stay sharp in the ever-evolving tech world.
      </p>
    </section>
  );
};

export default whoami;
