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
            <li><strong>Cloud:</strong> AWS</li>
            <li><strong>IDEs:</strong> Visual Studio Code, VS Code, NetBeans, IntelliJ</li>
            <li><strong>Frameworks:</strong> Spring Boot, React, FastAPI, Flask</li>
            <li><strong>Other:</strong> MS Office (Word, Excel, Access, PowerPoint), Email, Internet, Jira, Miro, Linux CLI, WSL, Ubuntu, SDLC, MVC, Problem Solving, Agile, SAFe, Algorithms, SSH, REST API Design & Development</li>
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
