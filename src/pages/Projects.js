import React from 'react';
import '../css/project.css';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Air Quality Monitoring with Raspberry Pi',
      description: 'Portable air quality monitor using a Pi, sensors, FastAPI, and InfluxDB.',
      image: '/Images/placeholder.png',
      path: '/projects/air-quality-monitor',
    },
    {
      title: 'Monitoring & Alerting with Prometheus',
      description: 'Node Exporter + Grafana dashboard to track system performance.',
      image: '/Images/placeholder.png',
      path: '/projects/MonitoringAndAlerting',
    },
    {
      title: '3rd Year Group Project',
      description: 'Collaborative college project focused on an e-learning platform prototype.',
      image: '/Images/placeholder.png',
      path: '/projects/group-project',
    }
    // {
    //   title: 'Java Spring REST API',
    //   description: 'Designed and built a RESTful API using Spring Boot and tested via Postman.',
    //   image: '/Images/placeholder.png',
    //   path: '/projects/spring-api',
    // },
    // {
    //   title: 'IoT Network Mapper',
    //   description: 'IoT device used for discovering and mapping active devices in a LAN.',
    //   image: '/Images/placeholder.png',
    //   path: '/projects/network-mapper',
    // },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Project Work</h1>
      <p className="projects-subtitle">
        Here are some projects I’ve worked on — from college assignments to personal builds.
      </p>

      <div className="card-grid">
        {projects.map(({ title, description, image, path }) => (
          <div key={title} className="project-card" onClick={() => navigate(path)}>
            <img src={image} alt={title} className="project-image" />
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
