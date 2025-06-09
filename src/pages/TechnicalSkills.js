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
            <li><strong>Programming Languages:</strong> Java, JavaScript, C#, HTML, CSS, PHP, Python</li>
            <li><strong>Databases:</strong> SQL, InfluxDB, CassandraDB, Postgres</li>
            <li><strong>DevOps & Tools:</strong> Docker, Kubernetes (K3s), DevOps methodology, CI/CD, Automation, GitHub, GitHub Actions, Bash, Prometheus, Grafana</li>
            <li><strong>Cloud:</strong> AWS (College Level) & Azure</li>
            <li><strong>IDEs:</strong> Visual Studio Code, VS Code, NetBeans, IntelliJ</li>
            <li><strong>Frameworks:</strong> Spring Boot, React, FastAPI, Flask</li>
            <li><strong>Project Management:</strong> Jira & Miro</li>
            <li><strong>Linux:</strong> Linux CLI, WSL & Ubuntu</li>
            <li><strong>Design & Methodologies:</strong> SDLC, MVC, Dev-Ops, Agile, Safe, REST API Design & Development</li>
            <li><strong>Other:</strong> MS Office (Word, Excel, Access, PowerPoint), Azure cli, Email, Internet, Problem Solving, Computer Science, IT, Networking, Algorithms, SSH & GitHub CO-Pilot</li>
          </ul>
        </div>

        <div>
          <h3>Personal Skills</h3>
          <ul>
            <li><strong>Skills:</strong> Excellent customer service, communication, and telephone handling; dependable, attentive, and confident</li>
            <li><strong>Interests:</strong> Sports (hurling, football), music (listening and playing), IT</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnicalandPersonalSkills;
