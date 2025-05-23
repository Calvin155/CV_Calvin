import React from 'react';
import '../css/WorkExperience.css';

const WorkExperience = () => {
  return (
    <section id="WorkExp" className="workexp-section">
      <h2 className="workexp-heading">Work Experience</h2>

      <div className="job-entry">
        <h3>Software Engineer Intern</h3>
        <p><strong>Progress Software Corporation</strong> — January 2024 – August 2024 (8 Months)</p>
        <ul>
          <li>Gained hands-on experience in DevOps practices, CI/CD pipelines, infrastructure automation, and Agile (SAFe) methodology as part of the Platform Operations Team.</li>
          <li>Collaborated with engineers in team settings, participated in peer code reviews, and helped debug complex deployment issues.</li>
          <li>Designed and developed a cloud cost analysis dashboard leveraging data from Azure CLI, Cassandra, and Prometheus, visualized using Grafana for internal use.</li>
          <li>Implemented observability practices using MELT (Metrics, Events, Logs, Traces) with Prometheus for metric scraping and proactive alerting.</li>
          <li>Deployed a Jaeger instance for distributed tracing and service dependency analysis.</li>
          <li>Worked with modern tools and technologies including Python, Docker, Kubernetes (K3s), FastAPI, Flask, GitHub, GitHub Actions, InfluxDB, Grafana, and Argo CD.</li>
          <li>Presented progress during sprint reviews and contributed actively to PI planning, sprint retrospectives, and team knowledge-sharing sessions.</li>
        </ul>
      </div>

      <div className="job-entry">
        <h3>Senior Receptionist</h3>
        <p><strong>Absolute Hotel, Limerick</strong> — 2019 – December 2024</p>
        <ul>
          <li>Advanced user of Opera Hotel Management System and Micros POS.</li>
          <li>Actively contributed to HOD (Head of Department) meetings, offering insights to improve operational workflows.</li>
          <li>Responsible for onboarding and training new team members, mentoring junior staff and ensuring high service standards.</li>
          <li>Managed group and individual reservations across leisure, corporate, and event categories, maintaining booking accuracy and customer satisfaction.</li>
          <li>Carried out Duty Manager responsibilities including supervision of bar, restaurant, meetings, and events (C&B).</li>
        </ul>
      </div>

      <div className="job-entry">
        <h3>Night Duty Manager</h3>
        <p><strong>Absolute Hotel, Limerick</strong> — 2018 – 2019</p>
        <ul>
          <li>Oversaw night-time operations of the hotel, ensuring safety, guest support, and operational continuity.</li>
          <li>Managed front desk tasks, handled escalated guest concerns, and coordinated with security and housekeeping teams.</li>
        </ul>
      </div>

      <div className="job-entry">
        <h3>Receptionist (Part-Time)</h3>
        <p><strong>Absolute Hotel, Limerick</strong> — September 2017 – 2018</p>
        <ul>
          <li>Provided front desk services, processed guest check-ins and check-outs, and maintained reservation logs.</li>
          <li>Built foundational skills in hospitality, multitasking, and customer interaction.</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
