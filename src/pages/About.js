import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/About.css';

const AboutMe = () => {
  const navigate = useNavigate();

  //All images are from free sources
  const aboutCards = [
    {
      label: 'whoami',
      description: 'Learn about my background and personal story.',
      image: '/Images/AboutImages/whoamiImages.jpg', 
      path: '/about/whoami',
    },
    {
      label: 'Education',
      description: 'Academic qualifications.',
      image: '/Images/AboutImages/EducationImage.jpg',
      path: '/about/education',
    },
    {
      label: 'Certificates & Achievements',
      description: 'Awards and recognitions I have earned.',
      image: '/Images/AboutImages/CertificatesAchievementsImage.jpg',
      path: '/about/certs&achievements',
    },
    {
      label: 'Technical & Personal Skills',
      description: 'My skills in technology and soft skills.',
      image: '/Images/AboutImages/TechSkillsImages.jpg',
      path: '/about/tech&personalskills',
    },
    {
      label: 'Work Experience',
      description: 'Professional roles and work history.',
      image: '/Images/AboutImages/WorkExp.jpg',
      path: '/about/workexp',
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <p className="about-subtitle">Welcome! Learn more about my background, experience, and achievements below.</p>

      <div className="about-card-grid">
        {aboutCards.map(({ label, description, image, path }) => (
          <div key={label} className="about-card" onClick={() => navigate(path)}>
            <img src={image} alt={label} className="about-card-image" />
            <div className="about-card-content">
              <h3 className="about-label">{label}</h3>
              <p>{description}</p>
              <button className="details-button">View Details</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
