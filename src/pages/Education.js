import React from 'react';
import '../css/Education.css';

const Education = () => {
  return (
    <>
      <section id="education" className="education-section">
        <h2 className="education-heading">Education</h2>

        <div className="education-entries-container">
          <div className="education-entry tus-entry">
            <h3>
              Technological University of the Shannon Midlands Midwest (TUS) – Moylish, Limerick{' '}
              <span className="education-dates">2021 - 2025</span>
            </h3>
            <div className="course-info">
              <p><strong>Course:</strong> Software Development BSc (Hons – Level 8) in Computer Science</p>
              <p><strong>Current Standing:</strong> Awarded QQI Level 8 Honours Bachelor of Science Degree</p>
              <p><strong>Award:</strong> Bachelor of Science (Honours), First Class (Grade: 1:1)</p>
            </div>

            <div className="education-year">
              <h4>1st Year <span className="gpa">GPA: 78.50%</span></h4>
              <p><strong>Modules:</strong> SQL Essentials (78%), Mathematical Methods (64%), Operating System Fundamentals (65%), Responsive Design & Web Development (87%), Structured Programming (82%), Intro to OOP (80%), Data Essentials (59%), Computer Mathematics (83%), Web Dev Fundamentals (92%), Interpersonal Skills (80%), Computer Organisation and Architecture (87%), Introduction to Programming (85%)</p>
            </div>

            <div className="education-year">
              <h4>2nd Year <span className="gpa">GPA: 70.66%</span></h4>
              <p><strong>Modules:</strong> Applications Development (89%), Data Driven Systems (73%), Problem Solving - Data Structures and Algorithms (45%), Software Testing (70%), Real Time Embedded Systems (59%), Public Cloud Foundations (80%), Data Design and Programming (78%), Structures and Algorithms (70%), Object Oriented Theory and Programming (74%), Networking Fundamentals (69%), Discrete Mathematics (70%), Software Development (71%)</p>
            </div>

            <div className="education-year">
              <h4>3rd Year <span className="gpa">GPA: 77.50%</span></h4>
              <p><strong>Modules:</strong> Applications Programming (78%), Computer Science (79%), Secure Web Development (82%), Object Modelling and Design (76%), Software Development Project (75%), Work Placement / CO-OP</p>
            </div>

            <div className="education-year">
              <h4>4th Year <span className="gpa">GPA: 73.66%</span></h4>
              <p><strong>Modules:</strong> Secure Public Cloud Services (69%), Reactive Systems (82%), Enterprise Application Development (72%), Management in Tech Software Engineering 1 (76%), Big Data Mining and Analysis (Elective) (59%), Api Design & Development (68%), Machine Learning & Predictive Analysis (58%), Software Management Techniques 2, Software Quality Engineering (70%), Management Software Engineering 2 (73%), Penetration Testing (78%)(Elective), Final Year Project (78%)</p>
            </div>
          </div>

          <div className="education-entry small-entry">
            <h3>
              Limerick College of Further Education, Limerick <span className="education-dates">2020 - 2021</span>
            </h3>
            <p><strong>Course:</strong> Software Development</p>
            <p><strong>Grade(s):</strong> Distinctions in all modules.</p>
            <p><strong>Award:</strong> QQI Level 5 in Software Development.</p>
          </div>

          <div className="education-entry small-entry">
            <h3>
              St. Clement's Redemptorist College, Limerick <span className="education-dates">2010 - 2016</span>
            </h3>
            <p><strong>Award:</strong> Leaving Certificate.</p>
          </div>
        </div>
      </section>

    </>
  );
};

export default Education;
