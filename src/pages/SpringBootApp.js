import React from "react";
import '../css/SpringBootApp.css';

const SpringBootApp = () => {
  return (
    <div className="springboot-container">
      <h1 className="project-title">Task Management System</h1>

      <section className="project-section">
        <h3>🛠️ Tools & Technologies</h3>
        <p>This project leverages a robust tech stack to ensure security, reliability, and maintainability. Below are the main tools used:</p>
        <ul>
          <li>Java Spring Boot Framework</li>
          <li>RESTful API Design</li>
          <li>HTTPS with Self-Signed Certificates (TLS)</li>
          <li>Swagger for API Documentation</li>
          <li>Google Authentication & OTP</li>
          <li>JWT for Secure API Access</li>
          <li>Postman for API Testing</li>
          <li>GitHub & GitHub Actions (CI/CD, Test Automation)</li>
          <li>SQL Database (MySQL)</li>
          <li>JUnit & Mockito for Unit Testing</li>
          <li>Jacoco for Code Coverage (via GitHub Actions)</li>
          <li>Spring Security & Spring Data JPA</li>
        </ul>
      </section>

      <section className="project-section">
        <h3>🎯 Aim of the System</h3>
        <p>
          This project is a full-stack <strong>Task Management System</strong> that lets users create, update, view, and delete tasks. It focuses on <strong>secure access</strong> by using Spring Security with JWT tokens, Bcrypt password hashing, and Google Authentication with one-time passcodes.
        </p>
        <p>
          The system includes Swagger API documentation to make it easy to understand and use the REST endpoints. Testing is automated through GitHub Actions to make sure the code stays reliable.
        </p>
        <p>
          Overall, this project shows my skills in Java Spring Boot backend development, security best practices, and DevOps automation.
        </p>
      </section>

      <section className="project-section">
        <h3>🚀 Key Features</h3>
        <ul>
          <li><strong>Task CRUD:</strong> Create, update, delete, and view tasks.</li>
          <li><strong>TLS:</strong> HTTPS for Secure Communication.</li>
          <li><strong>Secure Login:</strong> Google Authentication and OTP.</li>
          <li><strong>JWT Protection:</strong> Ensures endpoint security.</li>
          <li><strong>Swagger Integration:</strong> Auto-generates API docs.</li>
          <li><strong>Automated Testing:</strong> CI/CD with GitHub Actions.</li>
          <li><strong>Code Coverage:</strong> Jacoco for visibility on tested code.</li>
        </ul>
      </section>

      <section className="project-section">
        <h3>📁 Project Structure</h3>
        <p>Organized with clear separation of concerns:</p>
        <ul>
          <li><strong>Controllers:</strong> HTTP request handlers.</li>
          <li><strong>Services:</strong> Business logic layer.</li>
          <li><strong>Repositories:</strong> JPA-based DB access.</li>
          <li><strong>Models:</strong> Task/User data schemas.</li>
          <li><strong>Security:</strong> JWT, user roles, Google login.</li>
          <li><strong>Config:</strong> Swagger setup & application settings.</li>
        </ul>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/project structure.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/project structure.png" alt="Project Structure" height="500" />
          </a>
        </div>
      </section>

      <section className="project-section">
        <h3>🗄️ Database Structure</h3>
        <p>MySQL schema designed for normalized task and user management:</p>
        <ul>
          <li><strong>User:</strong> Username, password (hashed), roles.</li>
          <li><strong>Task:</strong> Title, description, status, due date.</li>
          <li><strong>Role:</strong> ADMIN / USER distinctions.</li>
          <li><strong>RefreshToken:</strong> To issue new JWTs.</li>
        </ul>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/db_schema.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/db_schema.png" alt="Database Schema" />
          </a>
          <p className="caption">Database Schema Design</p>
        </div>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/real db connection & self signed cert.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/real db connection & self signed cert.png" alt="DB Config" />
          </a>
          <p className="caption">
            DB Connection & Self-Signed Cert in application.properties.  
            Secure database connections prevent data interception, and self-signed certificates enable encrypted communication in development environments to protect sensitive information.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h3>🔐 Security Implementation</h3>
        <p>Key security mechanisms implemented:</p>
        <ul>
          <li><strong>JWT:</strong> Token issued at login, verified at each request.</li>
          <li><strong>Google Auth:</strong> OAuth2 login with one-time passcode.</li>
          <li><strong>TLS:</strong> Self-signed certificates for HTTPS endpoints.</li>
        </ul>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/Login via postman.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/Login via postman.png" alt="Postman Login" />
          </a>
          <p className="caption">
            Login via Postman using credentials + OTP → Receives Access & Refresh Tokens.  
            This setup enhances security by requiring multi-factor authentication and issuing short-lived tokens, reducing the risk of unauthorized access and ensuring safe communication over HTTPS.
          </p>
        </div>

        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/websecurity config.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/websecurity config.png" alt="Spring Web Security" />
          </a>
          <p className="caption">
            Spring Web Security Configuration → Secures endpoints with JWT and OAuth2.
            This configuration ensures that only authenticated users can access protected resources, enhancing the overall security of the application by enforcing strict access controls and protecting sensitive data.
            Ensure users of the system are authenticated before accessing any endpoints, thus preventing unauthorized access to sensitive information and operations.
          </p>
        </div>

        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/user try admin api - invalid creds - 403 returned.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/user try admin api - invalid creds - 403 returned.png" alt="User Trying Admin API - 403 forbidden https status returned" />
          </a>
          <p className="caption">
            Non Admin User Trying Admin API - 403 Forbidden → Access denied for non-admin users.
            This security measure ensures that only users with the appropriate roles can access sensitive endpoints, preventing unauthorized actions and maintaining data integrity.
            This is a crucial aspect of the system's security, ensuring that users can only perform actions they are authorized for, thus protecting sensitive data and operations from unauthorized access.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h3>📡 API Design & Testing</h3>
        <p>RESTful endpoints built with clarity and tested via Postman. JWT token to be passed in on every request</p>
        <ul>
          <li><strong>GET /tasks:</strong> Fetch all tasks</li>
          <li><strong>POST /tasks:</strong> Add new task</li>
          <li><strong>PATCH /tasks/:id:</strong> Update task</li>
          <li><strong>DELETE /tasks/:id:</strong> Remove task</li>
        </ul>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/get tasks.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/get tasks.png" alt="GET Tasks" />
          </a>
          <p className="caption">
            GET Tasks → Returns all tasks in JSON format.  
            This endpoint allows users to retrieve their task list, ensuring they can view and manage their tasks effectively.
          </p>
        </div>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/Creating new task.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/Creating new task.png" alt="Create Task" />
          </a>
          <p className="caption">
            Creating New Task → Allows users to add tasks with title, description & status etc.  
            This feature enables users to efficiently manage their tasks by adding new ones as needed.
          </p>
        </div>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/update task.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/update task.png" alt="Update Task" />
          </a>
          <p className="caption">
            Update Task → Modify existing tasks.  
            This functionality allows users to keep their task list up-to-date, ensuring they can track progress and make necessary changes.
          </p>
        </div>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/delete task.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/delete task.png" alt="Delete Task" />
          </a>
          <p className="caption">
            Delete Task → Remove tasks from the list.  
            This feature helps users maintain a clean task list by allowing them to delete completed or irrelevant tasks.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h3>📘 Swagger Documentation</h3>
        <p>Swagger UI provides interactive API docs.</p>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/swagger api documentation.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/swagger api documentation.png" alt="Swagger API Documentation" />
          </a>
          <p className="caption">
            Swagger API Documentation → Interactive docs for all endpoints.  
            This feature allows developers to easily understand and test the API, making it user-friendly and accessible for integration.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h3>✅ Testing & Code Coverage</h3>
        <p>Unit testing pipeline built into GitHub Actions:</p>
        <ul>
          <li>JUnit & Mockito for test writing</li>
          <li>Mock DB setup</li>
          <li>CI/CD triggers on push to <code>main</code></li>
          <li>Jacoco coverage report integrated in workflow (25% Code Coverage - More Tests to be Added to other controllers & service layers etc to Increase Code Coverage %)</li>
        </ul>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/tests.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/tests.png" alt="Test Files" />
          </a>
          <p className="caption">
            Test Files → JUnit & Mockito tests for controllers, services, and repositories.  
            These tests ensure that the application behaves as expected, catching bugs early and improving code quality.
          </p>
        </div>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/mock db connection.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/mock db connection.png" alt="Mock DB" />
          </a>
          <p className="caption">
            Mock DB Connection → Used for unit tests to simulate database interactions.  
            This setup allows for isolated testing of business logic without needing a real database, speeding up the testing process and improving reliability.
          </p>
        </div>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/ci yml - run tests & code coverage report.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/ci yml - run tests & code coverage report.png" alt="GitHub Actions CI Pipeline" />
          </a>
          <p className="caption">
            GitHub Actions CI Pipeline → Runs tests and generates coverage reports on every push to <code>main</code>.
            This automation ensures that code changes are continuously tested, maintaining the integrity of the codebase and facilitating quick feedback for developers.
          </p>
          <a href="/Images/TaskManagerSysProject/git hub action detail.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/git hub action detail.png" alt="GitHub Actions CI" />
          </a>
          <p className="caption">
            GitHub Actions CI Pipeline → Runs tests and generates coverage reports on every push to <code>main</code>.  
            This automation ensures that code changes are continuously tested, maintaining the integrity of the codebase and facilitating quick feedback for developers.
          </p>
        </div>

        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/GitHub Action Success & Code Coverage Report.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/GitHub Action Success & Code Coverage Report.png" alt="GitHub Action Success & Code Coverage Report" />
          </a>
          <p className="caption">
            GitHub Action Success & Code Coverage Report → Successful CI run with Jacoco report.  
            This report shows the success of the CI pipeline, indicating that all tests passed and providing a snapshot of code coverage, which is essential for maintaining code quality and reliability.
          </p>
        </div>
        <div className="screenshot">
          <a href="/Images/TaskManagerSysProject/25 pc code coverage.png" target="_blank" rel="noopener noreferrer">
            <img src="/Images/TaskManagerSysProject/25 pc code coverage.png" alt="Code Coverage Report" />
          </a>
          <p className="caption">
            Code Coverage Report → Jacoco report showing 25% coverage.  
            This report provides insights into the tested code, helping identify untested areas and guiding future testing efforts to improve overall code quality.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h3>📚 What This Project Demonstrates</h3>
        <ul>
          <li>How to implement Spring Security with JWT and OAuth2</li>
          <li>How to write unit tests with JUnit and Mockito and integrate them with CI/CD pipelines</li>
          <li>How to create and configure self-signed TLS certificates for local HTTPS</li>
          <li>How to build RESTful APIs that are secure and easy to document with Swagger</li>
          <li>How to securely handle user credentials and multi-factor authentication</li>
        </ul>
        <p>
          This project is a example of modern Java backend development practices, focusing on security, testing, and maintainability.
        </p>
      </section>

      <section class="links-section">
        <h3>🔗 Project Links</h3>
        <ul class="link-list">
          <li>
            <a href="https://github.com/Calvin155/TaskManagementSystem" target="_blank" rel="noopener noreferrer">
              GitHub Repository: https://github.com/Calvin155/TaskManagementSystem
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SpringBootApp;
