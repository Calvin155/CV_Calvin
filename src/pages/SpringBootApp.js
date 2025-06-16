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
          <li>GitHub for version control</li>
          <li>GitHub Actions for CI/CD and automated testing</li>
          <li>SQL Database for data persistence</li>
          <li>JUnit and Mockito for unit testing</li>
          <li>Jacoco Code Coverage (Done using GitHub Actions)</li>
          <li>Spring Security for authentication and authorization</li>
          <li>Spring Data JPA for database interactions</li>
          <li>Self Signed Certificate to Enable HTTPS (TLS)</li>
        </ul>
      </section>

      <section className="project-section">
        <h3>🎯 Aim of the System</h3>
        <p>
          The goal of this project was to design and develop a <strong>Task Management System</strong> that allows users to create, read, update & delete tasks efficiently. The system aims to provide secure access through Spring Security, B-Crypt Password Encryption, Google Authentication & JWT-based security.
          The system also includes comprehensive API documentation using Swagger, ensuring that developers can easily understand and integrate with the API. The project emphasizes secure access to endpoints, automated testing & Code Coverage report generated using GitHub actions.
        </p>
      </section>

      <section className="project-section">
        <h3>🚀 Key Features</h3>
        <ul>
          <li><strong>Task Creation:</strong> Users can create new tasks with details such as title, description, and due date.</li>
          <li><strong>Task Management:</strong> Users can update, delete, and mark tasks as complete.</li>
          <li><strong>User Authentication:</strong> Secure login using Google Authentication.</li>
          <li><strong>API Documentation:</strong> API documentation generated using Swagger.</li>
          <li><strong>Secure Access:</strong> JWT-based security for API endpoints.</li>
          <li><strong>Automated Testing using GitHub Actions:</strong> Unit tests for core functionalities using JUnit and Mockito.</li>
          <li><strong>Code Coverage:</strong> Jacoco code coverage reports generated through GitHub Actions.</li>
        </ul>
      </section>

        <section className="project-section">
        <h3>Project Structure</h3>
        <p>
          The project is structured to follow best practices in Java Spring Boot development. It includes separate packages for controllers, services, repositories, and models, ensuring a clean separation of concerns. The main components of the project include:
        </p>
        <ul>
          <li><strong>Controllers:</strong> Handle incoming HTTP requests and map them to appropriate service methods.</li>
          <li><strong>Services:</strong> Contain the business logic and interact with repositories for data access.</li>
          <li><strong>Repositories:</strong> Interface with the database using Spring Data JPA for data persistence.</li>
          <li><strong>Models:</strong> Define the data structures used in the application, such as Task and User entities.</li>
          <li><strong>Security Configuration:</strong> Configures Spring Security for authentication and authorization.</li>
          <li><strong>Web Config:</strong> Sets up Swagger for API documentation.</li>
          <li><strong>Application Properties:</strong> Contains configuration settings for the application, including database connection details and security settings.</li>
          </ul>
          <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/project structure.png" target="_blank" rel="noopener noreferrer">
              <img
                src="/Images/TaskManagerSysProject/project structure.png"
                alt="NavBar Source Code"
                height="500"
              />
            </a>
              <p className="caption"></p>
          </div>
      </section>


      <section className="project-section">
        <h3>Database Structure</h3>
        <p>
          MySQL was used as the database for this project, with the following key tables:
        </p>
        <ul>
          <li><strong>User:</strong> Stores user information, including username, password (hashed), and roles.</li>
          <li><strong>Task:</strong> Stores task details, including title, description and status etc.</li>
          <li><strong>Role Type: </strong>User role types include ADMIN & USER</li>
          <li><strong>Refresh Token</strong>Refresh token - Used to generate new access token</li>
        </ul>
            <div className="screenshot">
              <a href="/Images/TaskManagerSysProject/db_schema.png" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/TaskManagerSysProject/db_schema.png" alt="Database Svhema" />
              </a>
              <p className="caption">Image of the Database Schema</p>
          </div>

           <div className="screenshot">
              <a href="/Images/TaskManagerSysProject/real db connection & self signed cert.png" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/TaskManagerSysProject/real db connection & self signed cert.png" alt="Database Svhema" />
              </a>
              <p className="caption">Image of the Database Connection & Self Signed Cert config - application.properties</p>
          </div>
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
            <div className="screenshot">
              <a href="/Images/TaskManagerSysProject/Login via postman.png" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/TaskManagerSysProject/Login via postman.png" alt="Logging in Via Postman - Valid username, password & google OTP" />
              </a>
              <p className="caption">Logging in Via Postman - Valid username, password & google OTP - Access & Refresh Token Returned</p>
          </div>
      </section>

      <section className="project-section">
        <h3>REST API Design & Testing via Postman</h3>
        <p>The REST API for the Task Management System was designed following best practices for RESTful architecture. Key endpoints included:</p>
        <ul>
          <li><strong>GET /tasks:</strong> Retrieve a list of all tasks.</li>
          <li><strong>POST /tasks:</strong> Create a new task.</li>
          <li><strong>PATCH /tasks/</strong> Update a specific task.</li>
          <li><strong>DELETE /tasks/</strong> Delete a specific task.</li>
        </ul>

        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/get tasks.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/get tasks.png" alt="Logging in Via Postman - Valid username, password & google OTP" />
            </a>
            <p className="caption">Get All Task's - JWT Token Required - Passed in using the Authorization header</p>
        </div>

        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/Creating new task.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/Creating new task.png" alt="Creating New Task" />
            </a>
            <p className="caption">Create New Task</p>
        </div>
        {/* update task */}

        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/update task.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/update task.png" alt="Update Task" />
            </a>
            <p className="caption">Update Task</p>
        </div>

        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/get all tasks with latest update.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/get all tasks with latest update.png" alt="Get All Tasks With Updated Task" />
            </a>
            <p className="caption">Get All Task's With New Task Updated</p>
        </div>

        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/delete task.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/delete task.png" alt="" />
            </a>
            <p className="caption">Delete Task</p>
        </div>
      </section>

        <section className="project-section">
        <h3>Swagger API Documentation</h3>

      </section>

      <section className="project-section">
        <h3>✅ Testing - GitHub Actions, Unit Testing & Code Coverage</h3>
        <p>The project includes testing using JUnit and Mockito. Key aspects of testing include CI/CD integration and Jacoco reports.</p>
          <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/test location.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/tests.png" alt="Java Tests Location" />
            </a>
            <p className="caption">Java Tests File Location</p>
        </div>

        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/tests.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/tests.png" alt="Java Tests" />
            </a>
            <p className="caption">Java Tests</p>
        </div>


        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/mock db connection.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/mock db connection.png" alt="Java Tests" />
            </a>
            <p className="caption">Mock Database Connection for Testing</p>
        </div>

          <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/ci yml - run tests & code coverage report.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/ci yml - run tests & code coverage report.png" alt="Java Tests" />
            </a>
            <p className="caption">Mock Database Connection for Testing</p>
        </div>


        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/github action - when pushed to main.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/github action - when pushed to main.png" alt="Java Tests" />
            </a>
            <p className="caption">Mock Database Connection for Testing</p>
        </div>


        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/success action & produces code coverage report.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/success action & produces code coverage report.png" alt="Java Tests" />
            </a>
            <p className="caption">Mock Database Connection for Testing</p>
        </div>


        <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/extract code coverage report.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/extract code coverage report.png" alt="Java Tests" />
            </a>
            <p className="caption">Mock Database Connection for Testing</p>
        </div>

         <div className="screenshot">
            <a href="/Images/TaskManagerSysProject/25 pc code coverage.png" target="_blank" rel="noopener noreferrer">
                <img src="/Images/TaskManagerSysProject/25 pc code coverage.png" alt="Java Tests" />
            </a>
            <p className="caption">Mock Database Connection for Testing</p>
        </div>
        
      </section>

      <section className="project-section">
        <h3>📌 What This Project Demonstrates</h3>

      </section>

      <section className="project-section">
        <h3>📂 Source Code</h3>
        <ul>
            <li>
                    Task Management System: <a href="https://github.com/Calvin155/TaskManagementSys" target="_blank" rel="noopener noreferrer">https://github.com/Calvin155/TaskManagementSys</a>
            </li>
        </ul>
      </section>
      
      
    </div>
  );
};

export default SpringBootApp;
