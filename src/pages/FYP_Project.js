import React from 'react';
import '../css/FYP_Project.css';

const FYP_Project = () => {
    return (
        <section id="fyp-project" className="fyp-section">
            <h1 className="fyp-title">Final Year Project – Air Quality Monitoring System</h1>

            <h2 className="fyp-subheading">Overview</h2>
            <p className="fyp-text">
                For my final year project, I designed and developed a portable air quality monitoring system using a Raspberry Pi 5.
                The system collects real-time environmental data including PM2.5, PM10, and CO₂. I focused on edge computing to process data locally,
                containerized all applications using Docker, and developed both a Swift mobile app and a React web app for client-side data visualization.
                These applications display real-time metrics, offer insights into air quality, and provide actionable recommendations when pollution levels exceed safe thresholds.
            </p>

            <h2 className="fyp-subheading">Tools & Technologies</h2>
            <ul className="fyp-list">
                <li>💻 Raspberry Pi 5 – Edge device</li>
                <li>📊 InfluxDB – Cloud-hosted time-series database</li>
                <li>🌐 FastAPI – Python REST API</li>
                <li>📱 Swift – iOS mobile app</li>
                <li>🖥️ React – Web dashboard</li>
                <li>🐍 Python – Sensor logic and data processing</li>
                <li>📦 Poetry – Python dependency management</li>
                <li>🧪 Unit Testing – Ensuring sensor reliability</li>
                <li>☁️ AWS – Hosting InfluxDB and FastAPI REST server</li>
                <li>🐳 Docker – Containerizing applications on Raspberry Pi and AWS</li>
            </ul>

            <h2 className="fyp-subheading">How It Works</h2>
            <p className="fyp-text">
                Environmental sensors are connected to the Raspberry Pi via UART to collect real-time air quality data. This data is processed locally using Dockerized Python applications running directly on the Raspberry Pi. The processed data is then securely transmitted and written to an InfluxDB instance hosted on AWS.

                <br /><br />

                <strong>AWS (Cloud Backend):</strong> In the cloud, I provisioned an EC2 instance running Ubuntu Linux to match the development environment used locally. Security groups were configured to allow traffic through key ports: port 22 for SSH access, port 8000 for the FastAPI server, and port 8086 for InfluxDB. After testing the containers locally, I deployed both the FastAPI and InfluxDB Docker images on the EC2 instance. InfluxDB is secured with an authentication token that defines user access and permissions.

                <br /><br />

                <strong>Raspberry Pi (Edge Device):</strong> On the Raspberry Pi, custom Python applications interface with the environmental sensors, process the readings, and send the data to the cloud-hosted InfluxDB. To authenticate the write operations, each request includes a token that defines the user's level of access and CRUD permissions. Poetry is used to manage dependencies for these Python applications, and Docker is used to containerize and run them efficiently on the Raspberry Pi.

                <br /><br />

                <strong>Frontend Clients:</strong> Both the iOS mobile app (built with Swift) and the React-based web dashboard fetch data every 15 seconds by calling REST endpoints exposed by the FastAPI backend. The backend queries InfluxDB and returns the latest sensor readings to the client. These frontends provide users with real-time insights and actionable recommendations based on the environmental conditions detected.
            </p>

            <div className="fyp-image-row">
                <a href="/Images/Raspberry Pi AQI/Basic Overview Arch.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Basic Overview Arch.png"
                        alt="Architecture Overview Diagram"
                        className="fyp-image"
                    />
                </a>
                <a href="/Images/Raspberry Pi AQI/Amazon AWS Diagram.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Amazon AWS Diagram.png"
                        alt="AWS Architecture Overview Diagram"
                        className="fyp-image"
                    />
                </a>

                <a href="/Images/Raspberry Pi AQI/Use Case Diagram.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Use Case Diagram.png"
                        alt="USE case diagram"
                        className="fyp-image"
                    />
                </a>
                <a href="/Images/Raspberry Pi AQI/Pin Out Diagram.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Pin Out Diagram.png"
                        alt="GPIO Board on Raspberry Pi 5"
                        className="fyp-image"
                    />
                </a>
            </div>

            <h2 className="fyp-subheading">Putting it Together</h2>
            <p className="fyp-text">
                Docker was essential for isolating and deploying each application. Poetry was used for managing dependencies in the Python projects.
                It generates a <code>pyproject.toml</code> and a lock file specifying all required packages and their versions.
                These files were used in the Docker build process to ensure consistent and reproducible environments for each container.
            </p>

            <div className="fyp-image-row">
                <a href="/Images/Raspberry Pi AQI/Poetry File.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Poetry File.png"
                        alt="Poetry Dependency File"
                        className="fyp-image"
                    />
                </a>
                <a href="/Images/Raspberry Pi AQI/Docker File.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Docker File.png"
                        alt="Dockerfile"
                        className="fyp-image"
                    />
                </a>
                <a href="/Images/Raspberry Pi AQI/Createing Docker Image.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Createing Docker Image.png"
                        alt="Creating Docker Image"
                        className="fyp-image"
                    />
                </a>
                <a href="/Images/Raspberry Pi AQI/Containers on EC2 instance.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Containers on EC2 instance.png"
                        alt="Containers running on AWS EC2"
                        className="fyp-image"
                    />
                </a>
            </div>

            <h2 className="fyp-subheading">Software & Hardware Testing</h2>

            <h3 className="fyp-text">Software Testing:</h3>
            <p className="fyp-text">
                To ensure the reliability and stability of the Python backend application, I implemented unit tests using the <code>unittest</code> and <code>pytest</code> frameworks. These tests included mocking sensor connections and validating that data retrieval functions operated as expected. The images below showcase test code where sensor communication is mocked to simulate real-world scenarios without needing hardware during testing & displays the successful execution of multiple unit tests, confirming core functionality is intact.
            </p>

            <div className="fyp-image-row">
                <a href="/Images/Raspberry Pi AQI/Python Tests code.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Python Tests code.png"
                        alt="Python Test Code - Mocking & Testing Connection"
                        className="fyp-image"
                    />
                </a>
                <a href="/Images/Raspberry Pi AQI/Python Tests.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Python Tests.png"
                        alt="Python Tests Passing"
                        className="fyp-image"
                    />
                </a>

                <a href="/Images/Raspberry Pi AQI/Testing PM sensor.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Testing PM sensor.png"
                        alt="Testing PM sensor"
                        className="fyp-image"
                    />
                </a>
            </div>

            <h3 className="fyp-text">Hardware Testing:</h3>
            <p className="fyp-text">
                To verify that the Raspberry Pi 5 could handle continuous data processing from sensors without system strain, I implemented hardware monitoring using Node Exporter. This lightweight exporter was installed directly on the Pi to collect system metrics like CPU, memory, and disk usage. These metrics were then scraped by Prometheus running on a separate monitoring machine. The data was visualized using Grafana dashboards, allowing real-time tracking of the Pi’s resource consumption. The images show the setup and visual output, confirming that even under sensor and container workloads, the Pi operated efficiently without bottlenecks or overheating.
            </p>

            <div className="fyp-image-row">
                <a href="/Images/Raspberry Pi AQI/Node Exporter on Raspberry Pi.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Node Exporter on Raspberry Pi.png"
                        alt="Poetry Dependency File"
                        className="fyp-image"
                    />
                </a>
                <a href="/Images/Raspberry Pi AQI/My Monitoring Machine - Prometheus & Grafana.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/My Monitoring Machine - Prometheus & Grafana.png"
                        alt="Dockerfile"
                        className="fyp-image"
                    />
                </a>

                <a href="/Images/Raspberry Pi AQI/Monitoring the Pi with sensors & containers running - Grafana.png" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Images/Raspberry Pi AQI/Monitoring the Pi with sensors & containers running - Grafana.png"
                        alt="Dockerfile"
                        className="fyp-image"
                    />
                </a>
            </div>


            <h2 className="fyp-subheading">Final Product - Raspberry Pi & Front-End Applications</h2>
            <p className="fyp-text">
                    The final system successfully delivered accurate, real-time air quality readings (Particulate Matter & CO₂) using edge computing on the Raspberry Pi. Metrics were processed locally and pushed to the cloud, enabling fast, efficient data access through both a mobile app (Swift) and a responsive web app (React).
                    <br /><br />
                    The frontend apps displayed clear visual indicators such as "Good," "OK," or "High" alongside actionable recommendations like "Open a window" or "Get an air purifier." This addressed a key gap in existing air quality dashboards by turning raw data into meaningful, user-friendly insights.
                    <br /><br />
                    Performance tests confirmed that the Raspberry Pi could comfortably handle multiple sensors and Docker containers without significant resource strain—leaving room for expansion and scalability. Overall, the project demonstrates a low-cost, scalable, and accessible approach to indoor air quality monitoring with real-world usability and future potential.
            </p>

            <div className="fyp-display-section">

                <div className="fyp-device-image">
                    <a href="/Images/Raspberry Pi AQI/Raspberry Pi Final.png" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Images/Raspberry Pi AQI/Raspberry Pi Final.png"
                            alt="Raspberry Pi Final"
                            className="fyp-image-large"
                        />
                    </a>
                </div>

                <div className="fyp-image-row-small">
                    <a href="/Images/Raspberry Pi AQI/Mobile App 1.png" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Images/Raspberry Pi AQI/Mobile App 1.png"
                            alt="Mobile Application 1"
                            className="fyp-image-small"
                        />
                    </a>
                    <a href="/Images/Raspberry Pi AQI/Mobile App 2.png" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Images/Raspberry Pi AQI/Mobile App 2.png"
                            alt="Mobile Application 2"
                            className="fyp-image-small"
                        />
                    </a>
                </div>

                <div className="fyp-image-row-medium">
                    <a href="/Images/Raspberry Pi AQI/Website top section.png" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Images/Raspberry Pi AQI/Website top section.png"
                            alt="Website Top Section"
                            className="web-app"
                        />
                    </a>
                    <a href="/Images/Raspberry Pi AQI/Body Web Application.png" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Images/Raspberry Pi AQI/Body Web Application.png"
                            alt="Body Web Application"
                            className="web-app"
                        />
                    </a>
                </div>

            </div>

            
            <h2 className="fyp-subheading">Challenges & Achievements</h2>
            <p className="fyp-text">
                One of the biggest challenges was sensor integration. After accidentally damaging the Raspberry Pi’s I2C pins during testing, I had to research and reconfigure the Pi to use multiple UART ports. This required modifying the Pi’s configuration files and repurposing GPIO pins to support both the CO₂ and PM sensors simultaneously.
                <br /><br />
                Another key decision was choosing Wi-Fi over Bluetooth for data transmission. After consulting with a lecturer during an API module, I opted for Wi-Fi, which allowed the development of a REST API architecture—enabling scalable, real-time data access across web and mobile platforms.
                <br /><br />
                The system was built using Docker containers to isolate sensor applications, reduce CPU and memory load, and demonstrate edge computing principles. Data is processed locally on the Raspberry Pi before being written to a cloud-hosted InfluxDB instance.
                <br /><br />
                This project strengthened my practical skills in full-stack development, RESTful API design, edge computing, and resource optimization on embedded hardware. It also gave me insight into scalable IoT system design and cross-platform application development.
            </p>

            <h2 className="fyp-subheading">Results</h2>
            <p className="fyp-text">
                The final air quality monitoring system successfully collected and processed real-time PM2.5, PM10, and CO₂ data using locally containerized Python applications. Key performance results include:
            </p>
            <ul className="fyp-list">
                <li>📉 <strong>Low Resource Usage:</strong> Raspberry Pi CPU usage remained under 35% and memory usage under 50% during peak operation with Docker containers and sensors active.</li>
                <li>⚡ <strong>Fast Response Time:</strong> Average REST API response time was under 200ms when queried by the web or mobile frontend.</li>
                <li>🌍 <strong>User Engagement:</strong> The mobile and web apps presented intuitive metrics that users could act on, such as "Air quality is poor – open a window."</li>
            </ul>


            <h2 className="fyp-subheading">Key Learnings</h2>
            <ul className="fyp-list">
                <li>🧠 Applied edge computing for real-time environmental monitoring</li>
                <li>🔌 Integrated multiple sensors using GPIO and UART</li>
                <li>📡 Deployed cloud-hosted databases with InfluxDB</li>
                <li>📱 Built full-stack systems with REST APIs and modern frontends</li>
                <li>📈 Created user-friendly data visualizations for web and mobile</li>
            </ul>
        </section>
    );
};

export default FYP_Project;
