import React from 'react';
import '../css/project.css';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Air Quality Monitoring with Raspberry Pi',
      description: 'Portable air quality monitor system using a Raspberry Pi 5, Enviromental Sensors, Mobile Application developed using Swift, Web Applciation using React, FastAPI (Restful-Server) (Docker), InfluxDB (Docker) & AWS Cloud hosting for Rest server & database. Final Year Project (FYP - Grade 78%).',
      image: '/Images/AirQualityMonitoring/Raspberry Pi Image.png',
      path: '/projects/fyp_project',
    },
    {
      title: 'Monitoring & Alerting with Prometheus',
      description: 'Node Exporter + Grafana dashboard to track system performance using Docker.',
      image: '/Images/MonitoringAndAlertingImages/Prometheus Image.png',
      path: '/projects/MonitoringAndAlerting',
    },
    {
      title: '3rd Year Group Project - Farm Management System',
      description: 'College group project. Practiced: Team Work & Collaboration, Followed the Agile Methodology, Singlton design pattern, C# win-forms, GitHub & Azure (Cloud Hosted SQL database)',
      image: '/Images/GroupProj/GroupProj.jpg',
      path: '/projects/ThirdYearGroupProject',
    },
    {
      title: 'Java Spring REST API',
      description: 'Designed and developed RESTful APIs for a Task Management System using Spring Boot and Java. Documented APIs with Swagger, and implemented SQL database integration. Integrated Google Authentication and JWT-based security. Configured GitHub Actions for automated testing & Code Coverage, and validated endpoints using Postman.',
      image: '/Images/SpringProject/SpringBoot Image.png',
      path: '/projects/spring_boot_app',
    },
    {
      title: 'IoT Network Mapper',
      description: 'IoT device used for discovering and mapping active devices in a LAN.',
      image: '/Images/placeholder.png',
      path: '/PageUnderConstruction',
    },
    {
      title: 'CV - Website',
      description: 'How I created this website using React on the front-end, GitHub to store source code and Vercel to build & deploy the Application. CI/CD, GitHub & React',
      image: '/Images/CV/Building new update.png',
      path: '/projects/website',
    },

    {
      title: 'Expense Tracker Application',
      description: 'Application to track personal expenses. Developed using a React front-end & Spring Boot back-end with RESTful APIs. Features include user authentication, expense categorization, and data visualization with charts.',
      image: '/Images/placeholder.png',
      path: '/PageUnderConstruction',
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
