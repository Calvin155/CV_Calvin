import React from "react";
import '../css/SpringBootApp.css';

const SpringBootApp = () => {
  return (
    <div className="springboot-container">
      <h1 className="project-title">Task Management System</h1>

      <section className="project-section">
        <h3>🛠️ Tools & Technologies</h3>
        <ul>
          <li>Java Spring Boot Framework</li>
          <li>RESTful API Design</li>
          <li>Self-Signed Certificates for HTTPS (TLS)</li>
          <li>Swagger for API documentation</li>
          <li>Google Authentication for secure login</li>
          <li>JWT (JSON Web Tokens) for secure API access</li>
          <li>Postman for API testing and validation</li>
          <li>GitHub Actions for CI/CD and automated testing</li>
          <li>SQL Database for data persistence</li>
          <li>JUnit and Mockito for unit testing</li>
          <li>Jacoco Code Coverage (Done using GitHub Actions)</li>
          <li>Spring Security for authentication and authorization</li>
          <li>Spring Data JPA for database interactions</li>
          <li>GitHub for version control and team collaboration</li>
        </ul>
      </section>

      <section className="project-section">
        <h3>🎯 Aim of the System</h3>
        <p>
          The goal of this project was to design and develop a comprehensive <strong>Task Management System</strong> that allows users to create, manage, and track tasks efficiently. The system aims to provide a user-friendly interface for task management while ensuring secure access through Google Authentication and JWT-based security.
        </p> bn
      </section>

      <section className="project-section">
        <h3>🚀 Key Features</h3>
        <ul>
          <li><strong>Task Creation:</strong> Users can create new tasks with details such as title, description, and due date.</li>
          <li><strong>Task Management:</strong> Users can update, delete, and mark tasks as complete.</li>
          <li><strong>User Authentication:</strong> Secure login using Google Authentication.</li>
          <li><strong>API Documentation:</strong> Comprehensive API documentation generated using Swagger.</li>
          <li><strong>Secure Access:</strong> JWT-based security for API endpoints.</li>
          <li><strong>Automated Testing using GitHub Actions:</strong> Unit tests for core functionalities using JUnit and Mockito.</li>
          <li><strong>Code Coverage:</strong> Jacoco code coverage reports generated through GitHub Actions.</li>
        </ul>
      </section>

      <section className="project-section">
        <h3>Spring Security, JWT Token, Google Authentication (One Time Passcode) & Self-Signed Cert (TLS)</h3>
        <p>
          The Task Management System implements Spring Security for authentication and authorization. Key features include:
        </p>
        <ul>
          <li><strong>JWT Token Authentication:</strong> Users receive a JWT token upon successful login, which is used for subsequent API requests.</li>
          <li><strong>Google Authentication (One Time Passcode):</strong> Users can log in using their Google accounts, simplifying the authentication process.</li>
          <li><strong>Self-Signed Certificates (TLS):</strong> The application uses self-signed certificates for secure HTTPS communication.</li>
        </ul>
      </section>

      <section className="project-section">
        <h3>REST API Design & Testing via Postman</h3>
        <p>The REST API for the Task Management System was designed following best practices for RESTful architecture. Key endpoints included:</p>
        <ul>
          <li><strong>GET /tasks:</strong> Retrieve a list of all tasks.</li>
          <li><strong>POST /tasks:</strong> Create a new task.</li>
          <li><strong>GET /tasks/:id:</strong> Retrieve details of a specific task.</li>
          <li><strong>PUT /tasks/:id:</strong> Update a specific task.</li>
          <li><strong>DELETE /tasks/:id:</strong> Delete a specific task.</li>
        </ul>
      </section>

      <section className="project-section">
        <h3>✅ Testing - GitHub Actions, Unit Testing & Code Coverage</h3>
        <p>The project includes comprehensive testing using JUnit and Mockito. Key aspects of testing include CI/CD integration and Jacoco reports.</p>
      </section>

      <section className="project-section">
        <h3>📌 What This Project Demonstrates</h3>
        <p>
          This project showcases my ability to design and develop secure, scalable RESTful APIs using the Java Spring Boot framework. It highlights my skills in implementing authentication and authorization mechanisms, API documentation, and automated testing. The project also reflects my experience in collaborating within a team environment, applying Agile methodologies, and delivering a functional software solution.
        </p>
      </section>

      <section className="project-section">
        <h3>📂 Source Code</h3>
        <p>
          The source code for this project is available on GitHub:{" "}
          <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
            https://github.com/yourusername/your-repo
          </a>
        </p>
      </section>
    </div>
  );
};

export default SpringBootApp;
