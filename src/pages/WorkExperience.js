import React from 'react';
import '../css/WorkExperience.css';

const WorkExperience = () => {
  return (
    <section id="WorkExp" className="workexp-section">
      <h2 className="workexp-heading">Work Experience</h2>

    <div className="job-entry">
      <h3>Graduate Software Test Engineer (Manual)</h3>
      <p><strong>Kneat Solutions</strong> — July 2025 – Present</p>
      <ul>
        <li>Currently focused on manual testing — executing detailed test cases, identifying and logging bugs, and verifying fixes with strong attention to detail and accuracy.</li>
        <li>Using Microsoft Azure DevOps for task management, test case management, bug tracking, and version control through ADO Repos/Git.</li>
        <li>Building knowledge and technical understanding across various parts of the application to support comprehensive testing coverage.</li>
        <li>Contributing to exploratory testing sessions, core regression events, and team activities to enhance product quality and collaboration.</li>
        <li>Completed internal training certifications, including Kneat End User training, to strengthen domain knowledge and system expertise.</li>
      </ul>
    </div>


      <div className="job-entry">
        <h3>Software Engineer Intern</h3>
        <p><strong>Progress Software Corporation</strong> — January 2024 – August 2024 (8 Months)</p>
        <ul>
          <li>Gained hands-on experience in DevOps practices, CI/CD pipelines, infrastructure automation, and Agile (SAFe) methodology as part of the Platform Operations Team.</li>
          <li>Collaborated with engineers in team settings, participated in peer code reviews, and helped debug complex deployment issues.</li>
          <li>Designed and developed a cloud cost analysis dashboard leveraging data from Azure CLI, Cassandra, and Prometheus, visualized using Grafana for internal use.</li>
          <li>Implemented observability practices using MELT (Metrics, Events, Logs, Traces) with Prometheus for metric scraping and proactive alerting.</li>
          <li>Deployed a Jaeger instance for distributed tracing and service dependency analysis.</li>
          <li>Worked with modern tools and technologies including Microsoft Azure, Azure cli, Python, Docker, Kubernetes, FastAPI, Flask, GitHub, GitHub Actions, InfluxDB, Grafana, and Argo CD.</li>
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
          <li>Cross Checking Commisions against 3rd Party booking engines</li>
          <li>Carried out Duty Manager responsibilities including supervision of bar, restaurant, meetings, and events (C&B).</li>
        </ul>
      </div>

      <div className="job-entry">
        <h3>Night Duty Manager</h3>
        <p><strong>Absolute Hotel, Limerick</strong> — 2018 – 2019</p>
        <ul>
          <li>Oversaw night-time operations of the hotel, ensuring safety, guest support, and operational continuity.</li>
          <li>Managed front desk tasks, handled escalated guest concerns, and coordinated with security and housekeeping teams.</li>
          <li>Cash/Debit/Credit Card Handling, Counting of the Safe, Staff Training.</li>
          <li>Meeting & Events - Room Set-up</li>
          <li>Bar Responsibilities</li>
          <li>Running of Night Audit/End of Day & Night Reports</li>
        </ul>
      </div>

      <div className="job-entry">
        <h3>Receptionist (Part-Time)</h3>
        <p><strong>Absolute Hotel, Limerick</strong> — September 2017 – 2018</p>
        <ul>
          <li>Provided front desk services, processed guest check-ins and check-outs, and maintained reservation logs.</li>
          <li>Built foundational skills in hospitality, multitasking, and customer interaction.</li>
          <li>Cash/Debit/Credit Card Handling</li>
        </ul>
      </div>

      <div className="job-entry">
        <h3>Receptionist (Part-Time)</h3>
        <p><strong>Radisson Blu Hotel & Spa, Limerick</strong> — February 2017 – September 2017</p>
        <ul>
          <li>Provided front desk services, processed guest check-ins and check-outs, and maintained reservation logs.</li>
          <li>Built foundational skills in hospitality, multitasking, and customer interaction.</li>
          <li>Cash/Debit/Credit Card Handling</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
