import React from 'react';
import '../css/project.css';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Air Quality Monitoring with Raspberry Pi',
      description: 'Portable air quality monitor built with a Raspberry Pi 5, environmental sensors, a Swift mobile app, React web app, FastAPI REST server, InfluxDB, Docker, and AWS cloud hosting.',
      image: '/Images/AirQualityMonitoring/Raspberry Pi Image.png',
      path: '/projects/fyp_project',
      tags: ['Raspberry Pi', 'React', 'Swift', 'FastAPI', 'InfluxDB', 'Docker', 'AWS'],
      badge: { label: 'FYP · 78%', type: 'gold' },
    },
    {
      title: 'Monitoring & Alerting with Prometheus',
      description: 'Node Exporter + Grafana dashboard to track system performance, containerised with Docker.',
      image: '/Images/MonitoringAndAlertingImages/Prometheus Image.png',
      path: '/projects/MonitoringAndAlerting',
      tags: ['Prometheus', 'Grafana', 'Node Exporter', 'Docker'],
    },
    {
      title: '3rd Year Group Project — Farm Management System',
      description: 'College group project built with C# WinForms and Azure-hosted SQL. Followed Agile methodology, Singleton design pattern, and team collaboration via GitHub.',
      image: '/Images/GroupProj/GroupProj.jpg',
      path: '/projects/ThirdYearGroupProject',
      tags: ['C#', 'WinForms', 'Azure', 'SQL', 'Agile', 'GitHub'],
      badge: { label: 'Group Project', type: 'blue' },
    },
    {
      title: 'Java Spring REST API',
      description: 'RESTful Task Management API built with Spring Boot. Includes Swagger docs, SQL integration, Google Auth, JWT security, and GitHub Actions CI/CD with Postman endpoint validation.',
      image: '/Images/SpringProject/SpringBoot Image.png',
      path: '/projects/spring_boot_app',
      tags: ['Java', 'Spring Boot', 'JWT', 'Swagger', 'SQL', 'GitHub Actions'],
    },
    {
      title: 'VulnMonitor — AI Pentesting Dashboard',
      description: 'Full-stack AI-assisted penetration testing dashboard. Features live scan streaming via SSE, JWT authentication, role-based access control, vulnerability tracking, network discovery (Nmap/tshark), and Docker/K3s deployment on Raspberry Pi edge devices.',
      image: '/Images/AIPentester/image for pentester.jpg',
      path: '/projects/ai_pentester',
      tags: ['React', 'Express.js', 'PostgreSQL', 'FastAPI', 'Docker', 'K3s', 'SSE'],
    },
    {
      title: 'CV Website',
      description: 'How I built this site — React on the frontend, GitHub for source control, and Vercel for CI/CD build and deployment.',
      image: '/Images/CV/Building new update.png',
      path: '/projects/website',
      tags: ['React', 'Vercel', 'GitHub', 'CI/CD'],
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-hero">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          A collection of work spanning full-stack development, DevOps, IoT, security engineering, and more.
        </p>
        <div className="projects-stats">
          <span className="stat-item"><strong>{projects.length}</strong> Projects</span>
          <span className="stat-divider">·</span>
          <span className="stat-item">Full-Stack · DevOps · Security · IoT</span>
        </div>
      </div>

      <div className="card-grid">
        {projects.map(({ title, description, image, fallbackImage, path, tags, badge }) => (
          <div key={title} className="project-card" onClick={() => navigate(path)}>
            {badge && (
              <span className={`project-badge badge-${badge.type}`}>{badge.label}</span>
            )}
            <div className="project-image-wrapper">
              <img
                src={image}
                alt={title}
                className="project-image"
                loading="lazy"
                decoding="async"
                onError={e => { if (fallbackImage) e.target.src = fallbackImage; }}
              />
              <div className="project-image-overlay" />
            </div>
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-footer">
                {tags && (
                  <div className="project-tags">
                    {tags.slice(0, 4).map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                    {tags.length > 4 && (
                      <span className="project-tag tag-more">+{tags.length - 4}</span>
                    )}
                  </div>
                )}
                <button className="details-button">View Details →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
