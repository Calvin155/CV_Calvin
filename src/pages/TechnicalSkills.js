import React from 'react';
import '../css/TechnicalSkills.css';

const TechnicalandPersonalSkills = () => {
  return (
    <section id="technical" className="technical-section">
      <h2 className="technical-heading">Technical & Personal Skills</h2>

      <div className="skills-grid">
        <div>
          <h3>Technical Skills</h3>
          <ul>
            <li><strong>Programming Languages:</strong> Java, JavaScript, C#, Python, PHP, HTML, CSS</li>

            <li><strong>Frameworks & Development:</strong> Spring Boot, React, FastAPI, Flask, REST API Design & Development, MVC Architecture</li>

            <li><strong>Software Testing:</strong> Manual Testing, Exploratory Testing, Regression Testing, PR Validation Testing, Test Case Design, Bug Tracking & Reporting, Risk-Based Testing, Functional & Non-Functional Testing, Black-Box Testing</li>

            <li><strong>Testing Tools:</strong> Azure DevOps (Boards & Test Plans), ADO Repos (Git), Postman, Browser DevTools</li>

            <li><strong>DevOps & Automation:</strong> Docker, Kubernetes (K3s), CI/CD Pipelines, GitHub Actions, Bash Scripting, DevOps Methodology, Infrastructure Awareness</li>

            <li><strong>Databases:</strong> SQL, PostgreSQL, InfluxDB, Cassandra</li>

            <li><strong>Cloud:</strong> AWS (Academic Projects), Microsoft Azure</li>

            <li><strong>Monitoring & Observability:</strong> Prometheus, Grafana</li>

            <li><strong>Tools & Environments:</strong> Git, GitHub, Linux CLI, Ubuntu, WSL, IntelliJ, NetBeans, Visual Studio Code, Azure CLI</li>

            <li><strong>Methodologies:</strong> SDLC, Agile, SAFe, DevOps Practices</li>

            <li><strong>Certifications:</strong> ISTQB Foundation Level Tester</li>
          </ul>
        </div>

        <div>
          <h3>Personal Skills</h3>
          <ul>
            <li><strong>Professional Skills:</strong> Strong communication, cross-team collaboration, analytical thinking, attention to detail, problem-solving, dependable and adaptable</li>
            <li><strong>Interests:</strong> Sports (hurling, football), music (listening and playing), continuous learning in technology</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnicalandPersonalSkills;