import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, BookOpen, Award, Cpu, Briefcase } from 'lucide-react';
import '../css/About.css';

const aboutCards = [
  {
    label: 'whoami',
    description: 'Learn about my background and personal story.',
    image: '/Images/AboutImages/whoamiImages.jpg',
    path: '/about/whoami',
    icon: <User size={17} />,
  },
  {
    label: 'Education',
    description: 'Academic qualifications and module grades.',
    image: '/Images/AboutImages/EducationImage.jpg',
    path: '/about/education',
    icon: <BookOpen size={17} />,
  },
  {
    label: 'Certificates & Achievements',
    description: 'Certifications, awards, and recognitions.',
    image: '/Images/AboutImages/CertificatesAchievementsImage.jpg',
    path: '/about/certs&achievements',
    icon: <Award size={17} />,
  },
  {
    label: 'Technical & Personal Skills',
    description: 'Technology stack and soft skills.',
    image: '/Images/AboutImages/TechSkillsImages.jpg',
    path: '/about/tech&personalskills',
    icon: <Cpu size={17} />,
  },
  {
    label: 'Work Experience',
    description: 'Professional roles and work history.',
    image: '/Images/AboutImages/WorkExp.jpg',
    path: '/about/workexp',
    icon: <Briefcase size={17} />,
  },
];

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <p className="about-subtitle">Learn more about my background, experience, and achievements.</p>

      <div className="about-card-grid">
        {aboutCards.map(({ label, description, image, path, icon }) => (
          <div key={label} className="about-card" onClick={() => navigate(path)}>
            <img src={image} alt={label} className="about-card-image" loading="lazy" decoding="async" />
            <div className="about-card-content">
              <div className="about-label-row">
                <span className="about-icon">{icon}</span>
                <h3 className="about-label">{label}</h3>
              </div>
              <p>{description}</p>
              <button className="details-button">View Details →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
