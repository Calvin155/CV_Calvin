import React from 'react';
import '../css/CertsAndAchievements.css';
import { FaGraduationCap, FaCertificate, FaBriefcase, FaAward, FaCar, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';

const achievements = [
  {
    title: "BSc (Honours) in Software Development",
    subtitle: "Technological University of the Shannon, Midlands Midwest (TUS) – QQI Level 8 - First Class Honours (Grade: 1:1)",
    year: "2025",
    category: "education",
  },
  {
    title: "ISTQB Certified Tester Foundation Level",
    subtitle: "International Software Testing Qualifications Board (ISTQB)",
    year: "2026",
    category: "certification",
    links: {
      info: "https://www.istqb.org/certification-path-root/foundation-level.html",
      cert: "/Images/Certs/ISTQB - Certified Software Tester.pdf"
    }
  },
  {
    title: "Kneat Solutions",
    subtitle: "Kneat Academy Power User & Kneat Academy Power User Level 1",
    year: "2025",
    category: "certification",
    links: {
      cert: "/Images/Certs/Kneat Academy - End User Cert - CL.pdf",
      cert: "/Images/Certs/Kneat Academy Power User Level 1 - CL.pdf"
    }
  },
  {
    title: "QQI Level 5 – Software Development",
    subtitle: "Limerick College of Further Education (LCFE)",
    year: "2021",
    category: "education",
  },
  {
    title: "Junior Penetration Tester",
    subtitle: "TryHackMe - Certificate of Completion",
    year: "2025",
    category: "certification",

    links: {
      info: "https://tryhackme.com/path/outline/jrpenetrationtester",
      cert: "/Images/Certs/tryhack me cert.pdf"
    }
  },
  {
    title: "Microsoft Azure Fundamentals",
    subtitle: "Describe Cloud Concepts - Certificate of Completion",
    year: "2025",
    category: "certification",
    links: {
      info: "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
      cert: "/Images/Certs/MS Azure Describe Cloud Concepts.pdf"
    }
  },
  {
    title: "Microsoft Azure Fundamentals",
    subtitle: "Describe Azure Architecture & Services - Certificate of Completion",
    year: "2025",
    category: "certification",
    links: {
      info: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
      cert: "/Images/Certs/MS Azure describe Azure Arch & Services.pdf"
    }
  },

  {
  title: "Cloud Security Fundamentals: Apprentice - Paloalto",
  subtitle: "Cloud Security Fundamentals: Apprentice - Certificate of Completion",
  year: "2025",
  category: "certification",
  links: {
    info: "https://www.paloaltonetworks.com/services/education",
    cert: "/Images/Certs/Cloud Security Fundamentals - Apprentice.pdf"
  }
},
  {
    title: "Manual Handling Training",
    subtitle: "Absolute Hotel Limerick",
    year: "2023",
    category: "certification",
  },
  {
    title: "Certificate of Attendance – Work Experience",
    subtitle: "Technological University of the Shannon Midlands: Midwest, Limerick (TUS)",
    year: "2023",
    category: "certification",
  },
  {
    title: "Fundamentals of Digital Marketing",
    subtitle: "Google Digital Garage - Certificate of Completion",
    year: "2021",
    category: "certification",
  },
  {
    title: "5-Year Service Award",
    subtitle: "Absolute Hotel Limerick",
    year: "2023",
    category: "award",
  },
  {
    title: "Multiple Awards in Music and Sports",
    subtitle: "",
    year: "",
    category: "award",
  },
  {
    title: "Full Clean Driving License",
    subtitle: "",
    year: "",
    category: "license",
  },
];

const categoryHeaders = {
  education: { label: "Education", icon: <FaGraduationCap className="achi-category-icon" /> },
  certification: { label: "Certifications", icon: <FaCertificate className="achi-category-icon" /> },
  work: { label: "Work", icon: <FaBriefcase className="achi-category-icon" /> },
  award: { label: "Awards", icon: <FaAward className="achi-category-icon" /> },
  license: { label: "Licenses", icon: <FaCar className="achi-category-icon" /> },
};

const CertsAndAchievements = () => {
  const grouped = achievements.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section className="achi-section">
      <h2 className="achi-heading">Certificates, Awards & Achievements</h2>
      {Object.keys(categoryHeaders).map((cat) =>
        grouped[cat] ? (
          <div className="achi-group" key={cat}>
            <h3 className="achi-category">
              {categoryHeaders[cat].icon}
              {categoryHeaders[cat].label}
            </h3>
            <div className="achi-cards">
              {grouped[cat].map((item, index) => {
                return (
                  <div className="achi-card" key={index}>
                    <h4 className="achi-card-title">{item.title}</h4>
                    {item.subtitle && <p className="achi-card-sub">{item.subtitle}</p>}
                    {item.year && <p className="achi-card-year">{item.year}</p>}
                    {item.links && (
                      <div className="achi-links">
                        {item.links.info && (
                          <a href={item.links.info} target="_blank" rel="noopener noreferrer" className="achi-link-btn">
                            <FaExternalLinkAlt /> View Modules
                          </a>
                        )}
                        {item.links.cert && (
                          <a href={item.links.cert} target="_blank" rel="noopener noreferrer" className="achi-link-btn">
                            <FaFilePdf /> View Certificate
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null
      )}
    </section>
  );
};

export default CertsAndAchievements;
