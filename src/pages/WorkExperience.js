import React from 'react';
import '../css/WorkExperience.css';

const jobs = [
  {
    title: 'Graduate Software Test Engineer (Manual)',
    company: 'Kneat Solutions',
    dates: 'July 2025 – Present',
    bullets: [
      'Execute detailed test cases, identify and log bugs, and verify fixes with precision to ensure high-quality software delivery.',
      'Utilise Microsoft Azure DevOps for task management, test case tracking, bug reporting, and version control using ADO Repos (Git).',
      'Build deep application knowledge to support comprehensive testing coverage across multiple modules.',
      'Contribute to exploratory testing, pull request (PR) validation, and core regression cycles to enhance overall product quality.',
      'Collaborate closely with developers and QA teams to validate fixes and ensure alignment with functional and business requirements.',
      'Completed internal training certifications, including Kneat End User Training, and achieved Power User Level 1 certification.',
      'Certified ISTQB Foundation Level Tester, demonstrating strong foundational expertise in software testing principles.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Progress Software Corporation',
    dates: 'January 2024 – August 2024 (8 Months)',
    bullets: [
      'Gained hands-on experience in DevOps practices, CI/CD pipelines, infrastructure automation, and Agile (SAFe) methodology as part of the Platform Operations Team.',
      'Collaborated with engineers in team settings, participated in peer code reviews, and helped debug complex deployment issues.',
      'Designed and developed a cloud cost analysis dashboard leveraging data from Azure CLI, Cassandra, and Prometheus, visualised using Grafana for internal use.',
      'Implemented observability practices using MELT (Metrics, Events, Logs, Traces) with Prometheus for metric scraping and proactive alerting.',
      'Deployed a Jaeger instance for distributed tracing and service dependency analysis.',
      'Worked with: Microsoft Azure, Azure CLI, Python, Docker, Kubernetes, FastAPI, Flask, GitHub, GitHub Actions, InfluxDB, Grafana, and Argo CD.',
      'Presented progress during sprint reviews and contributed to PI planning, retrospectives, and knowledge-sharing sessions.',
    ],
  },
  {
    title: 'Senior Receptionist',
    company: 'Absolute Hotel, Limerick',
    dates: '2019 – December 2024',
    bullets: [
      'Advanced user of Opera Hotel Management System and Micros POS.',
      'Actively contributed to HOD (Head of Department) meetings, offering insights to improve operational workflows.',
      'Responsible for onboarding and training new team members, mentoring junior staff and ensuring high service standards.',
      'Managed group and individual reservations across leisure, corporate, and event categories.',
      'Cross-checked commissions against third-party booking engines.',
      'Carried out Duty Manager responsibilities including supervision of bar, restaurant, meetings, and events (C&B).',
    ],
  },
  {
    title: 'Night Duty Manager',
    company: 'Absolute Hotel, Limerick',
    dates: '2018 – 2019',
    bullets: [
      'Oversaw night-time operations, ensuring safety, guest support, and operational continuity.',
      'Managed front desk tasks, handled escalated guest concerns, and coordinated with security and housekeeping.',
      'Cash/debit/credit card handling, safe counting, staff training.',
      'Room set-up for meetings and events; bar responsibilities; night audit and end-of-day reporting.',
    ],
  },
  {
    title: 'Receptionist (Part-Time)',
    company: 'Absolute Hotel, Limerick',
    dates: 'September 2017 – 2018',
    bullets: [
      'Provided front desk services, processed guest check-ins and check-outs, and maintained reservation logs.',
      'Built foundational skills in hospitality, multitasking, and customer interaction.',
    ],
  },
  {
    title: 'Receptionist (Part-Time)',
    company: 'Radisson Blu Hotel & Spa, Limerick',
    dates: 'February 2017 – September 2017',
    bullets: [
      'Provided front desk services, processed guest check-ins and check-outs, and maintained reservation logs.',
      'Built foundational skills in hospitality, multitasking, and customer interaction.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="WorkExp" className="workexp-section">
      <h2 className="workexp-heading">Work Experience</h2>

      <div className="jobs-timeline">
        {jobs.map(({ title, company, dates, bullets }) => (
          <div className="job-entry" key={`${company}-${title}`}>
            <h3>{title}</h3>
            <div className="job-meta">
              <span className="job-company">{company}</span>
              <span className="job-dates">{dates}</span>
            </div>
            <ul>
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
