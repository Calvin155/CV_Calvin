import React from 'react';
import '../css/Education.css';

function parseModules(str) {
  return str.split(', ').map(m => {
    const match = m.match(/^(.*?)\s*\((\d+%)\)(?:\(.*?\))?$/);
    if (match) return { name: match[1].trim(), grade: match[2] };
    return { name: m.trim(), grade: null };
  });
}

const tusYears = [
  {
    year: '1st Year',
    gpa: '78.50%',
    modules: 'SQL Essentials (78%), Mathematical Methods (64%), Operating System Fundamentals (65%), Responsive Design & Web Development (87%), Structured Programming (82%), Intro to OOP (80%), Data Essentials (59%), Computer Mathematics (83%), Web Dev Fundamentals (92%), Interpersonal Skills (80%), Computer Organisation and Architecture (87%), Introduction to Programming (85%)',
  },
  {
    year: '2nd Year',
    gpa: '70.66%',
    modules: 'Applications Development (89%), Data Driven Systems (73%), Problem Solving - Data Structures and Algorithms (45%), Software Testing (70%), Real Time Embedded Systems (59%), Public Cloud Foundations (80%), Data Design and Programming (78%), Structures and Algorithms (70%), Object Oriented Theory and Programming (74%), Networking Fundamentals (69%), Discrete Mathematics (70%), Software Development (71%)',
  },
  {
    year: '3rd Year',
    gpa: '77.50%',
    modules: 'Applications Programming (78%), Computer Science (79%), Secure Web Development (82%), Object Modelling and Design (76%), Software Development Project (75%), Work Placement / CO-OP',
  },
  {
    year: '4th Year',
    gpa: '71.75%',
    modules: 'Secure Public Cloud Services (69%), Reactive Systems (82%), Enterprise Application Development (72%), Management in Tech Software Engineering 1 (76%), Big Data Mining and Analysis (Elective) (59%), Api Design & Development (68%), Machine Learning & Predictive Analysis (58%), Software Management Techniques 2, Software Quality Engineering (70%), Management Software Engineering 2 (73%), Penetration Testing (78%)(Elective), Final Year Project (78%)',
  },
  {
    year: 'Final Award',
    gpa: '73.66%',
    modules: null,
    award: 'Awarded 1:1 (First Class Honours)',
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-heading">Education</h2>

      <div className="education-entries-container">
        {/* TUS - main entry */}
        <div className="education-entry tus-entry">
          <h3>
            Technological University of the Shannon Midlands Midwest (TUS) — Moylish, Limerick
            <span className="education-dates">2021 – 2025</span>
          </h3>
          <div className="course-info">
            <p><strong>Course:</strong> Software Development BSc (Hons – Level 8) in Computer Science</p>
            <p><strong>Award:</strong> Bachelor of Science (Honours), First Class (Grade: 1:1)</p>
          </div>

          {tusYears.map(({ year, gpa, modules, award }) => (
            <div className="education-year" key={year}>
              <h4>
                {year}
                <span className="gpa">{gpa}</span>
              </h4>
              {award && <p>{award}</p>}
              {modules && (
                <div className="module-tags">
                  {parseModules(modules).map(({ name, grade }) => (
                    <span key={name} className="module-tag">
                      {name}
                      {grade && <span className="module-grade">{grade}</span>}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* LCFE */}
        <div className="education-entry small-entry">
          <h3>
            Limerick College of Further Education
            <span className="education-dates">2020 – 2021</span>
          </h3>
          <p><strong>Course:</strong> Software Development</p>
          <p><strong>Grade:</strong> Distinctions in all modules.</p>
          <p><strong>Award:</strong> QQI Level 5 in Software Development.</p>
        </div>

        {/* Secondary */}
        <div className="education-entry small-entry">
          <h3>
            St. Clement's Redemptorist College, Limerick
            <span className="education-dates">2010 – 2016</span>
          </h3>
          <p><strong>Award:</strong> Leaving Certificate.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
