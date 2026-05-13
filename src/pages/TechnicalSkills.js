import React from 'react';
import '../css/TechnicalSkills.css';

const skillGroups = [
  { category: 'Languages',            skills: ['Java', 'JavaScript', 'C#', 'Python', 'PHP', 'HTML', 'CSS'] },
  { category: 'Frameworks',           skills: ['Spring Boot', 'React', 'FastAPI', 'Flask', 'REST API Design', 'MVC Architecture'] },
  { category: 'Software Testing',     skills: ['Manual Testing', 'Exploratory Testing', 'Regression Testing', 'PR Validation', 'Test Case Design', 'Bug Tracking & Reporting', 'Risk-Based Testing', 'Black-Box Testing', 'Functional Testing', 'Non-Functional Testing'] },
  { category: 'Testing Tools',        skills: ['Azure DevOps', 'ADO Repos (Git)', 'Postman', 'Browser DevTools'] },
  { category: 'DevOps & Automation',  skills: ['Docker', 'Kubernetes (K3s)', 'CI/CD Pipelines', 'GitHub Actions', 'Bash Scripting', 'Argo CD'] },
  { category: 'Databases',            skills: ['SQL', 'PostgreSQL', 'InfluxDB', 'Cassandra'] },
  { category: 'Cloud',                skills: ['AWS', 'Microsoft Azure'] },
  { category: 'Monitoring',           skills: ['Prometheus', 'Grafana', 'Jaeger'] },
  { category: 'Tools',                skills: ['Git', 'GitHub', 'Linux CLI', 'Ubuntu', 'WSL', 'IntelliJ', 'VS Code', 'Azure CLI'] },
  { category: 'Methodologies',        skills: ['SDLC', 'Agile', 'SAFe', 'DevOps Practices'] },
];

const personalSkills = [
  'Strong Communication', 'Cross-team Collaboration', 'Analytical Thinking',
  'Attention to Detail', 'Problem-Solving', 'Adaptable', 'Dependable',
];

const interests = ['Sports (Hurling, Football)', 'Music', 'Continuous Learning in Technology'];

const TechnicalandPersonalSkills = () => {
  return (
    <section id="technical" className="technical-section">
      <h2 className="technical-heading">Technical & Personal Skills</h2>

      <div className="skills-content">
        <div className="skills-block">
          <h3 className="skills-block-title">Technical Skills</h3>
          <div className="skill-groups">
            {skillGroups.map(({ category, skills }) => (
              <div key={category} className="skill-group">
                <span className="skill-category">{category}</span>
                <div className="skill-tags">
                  {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-block">
          <h3 className="skills-block-title">Personal Skills</h3>
          <div className="skill-tags">
            {personalSkills.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>

        <div className="skills-block">
          <h3 className="skills-block-title">Interests</h3>
          <div className="skill-tags">
            {interests.map(s => <span key={s} className="skill-tag skill-tag-personal">{s}</span>)}
          </div>
        </div>
      </div>

      <div className="certifications-note">
        <span className="cert-badge">ISTQB Foundation Level Certified</span>
      </div>
    </section>
  );
};

export default TechnicalandPersonalSkills;
