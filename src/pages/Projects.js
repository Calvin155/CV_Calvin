import React from 'react';
import '../css/project.css';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Air Quality Monitoring with Raspberry Pi',
      description: 'Portable air quality monitor using a Pi, sensors, FastAPI, and InfluxDB.',
      image: '/Images/AirQualityMonitoring/Raspberry Pi Image.png',
      path: '/projects/air-quality-monitor',
    },
    {
      title: 'Monitoring & Alerting with Prometheus',
      description: 'Node Exporter + Grafana dashboard to track system performance using Docker.',
      image: '/Images/MonitoringAndAlertingImages/Prometheus Image.png',
      path: '/projects/MonitoringAndAlerting',
    },
    {
      title: '3rd Year Group Project',
      description: 'Collaborative college project focused on an e-learning platform prototype.',
      image: '/Images/GroupProj/GroupProj.jpg',
      path: '/projects/group-project',
    },
    {
      title: 'Java Spring REST API',
      description: 'Designed and built a RESTful API using Spring Boot and tested via Postman.',
      image: '/Images/SpringProject/SpringBoot Image.png',
      path: '/projects/spring-api',
    },
    {
      title: 'IoT Network Mapper',
      description: 'IoT device used for discovering and mapping active devices in a LAN.',
      image: '/Images/placeholder.png',
      path: '/projects/network-mapper',
    },
    {
      title: 'CV - Website',
      description: 'How I created this website using React on the front-end, GitHub to store source code and Vercel to build & deploy the Application.',
      image: '/Images/CV/Vercel Project Deployment.png',
      path: '/projects/my-cv',
    }
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
