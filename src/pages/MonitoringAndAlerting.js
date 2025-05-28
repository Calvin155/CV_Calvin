import React from 'react';
import '../css/MonitoringAndAlerting.css';

const MonitoringAndAlerting = () => {
    return (
        <section id="MonitoringAndAlerting" className="monitoring-section">
            <h1 className="monitoring-title">Monitoring & Alerting</h1>

            <h2 className="monitoring-subheading">Tools & Technologies</h2>
            <ul className="monitoring-list">
                <li>Docker & Docker CLI</li>
                <li>Node Exporter – available as a Docker image or standalone binary</li>
                <li>Prometheus – deployed using the official Docker image</li>
                <li>Grafana – set up via Docker Hub</li>
                <li>Raspberry Pi 5 – used in my setup for edge deployment</li>
                <li>GitHub – for version control and configuration tracking</li>
                <li>VS Code – my go-to IDE for configuration and scripting</li>
                <li>Bash – for container orchestration and automation scripts</li>
            </ul>

            <h2 className="monitoring-subheading">Getting Started</h2>
            <div className="getting-started">
                <p className="monitoring-text">
                    I began by deploying Prometheus using Docker and configured it to scrape metrics from predefined targets. 
                    After that, I installed Node Exporter on my Raspberry Pi to expose CPU, memory, disk, and network usage metrics.
                </p>
                <p className="monitoring-text">
                    With Prometheus collecting the data, I connected it to Grafana to build visual dashboards. I created alerting rules 
                    in both Prometheus and Grafana to get real-time notifications when something abnormal happened, which allowed me to respond proactively.
                </p>
            </div>

            <div className="monitoring-container">

                <article className="monitoring-card">
                    <h3 className="monitoring-subtitle">Node Exporter</h3>
                    <div className="image-row">
                        <img
                            src="/Images/MonitoringAndAlertingImages/metrics exposed on local machine.png"
                            alt="Node Exporter metrics on local machine"
                            className="monitoring-image"
                        />
                        <img
                            src="/Images/MonitoringAndAlertingImages/Metrics from Node Exporter - Accessible on Pi IP address.png"
                            alt="Node Exporter metrics via Pi IP"
                            className="monitoring-image"
                        />
                    </div>
                    <p className="monitoring-text">
                        I used Node Exporter to collect system metrics from my Raspberry Pi. Once running, the exporter made real-time hardware data
                        available to Prometheus, allowing me to monitor system health down to the process level.
                    </p>
                </article>

                <article className="monitoring-card">
                    <h3 className="monitoring-subtitle">Prometheus</h3>
                    <img
                        src="/Images/MonitoringAndAlertingImages/refresh prometheus - new target successfully reading.png"
                        alt="Prometheus UI showing new target"
                        className="monitoring-image"
                    />
                    <p className="monitoring-text">
                        I worked with Prometheus to build a scalable monitoring system. I configured YAML files to define scrape jobs and wrote custom PromQL queries
                        to extract and analyze system-level metrics. This gave me a powerful, flexible foundation for real-time observability.
                    </p>
                </article>


                <article className="monitoring-card">
                    <h3 className="monitoring-subtitle">Grafana</h3>
                    <img
                        src="/Images/MonitoringAndAlertingImages/Grafana Working.png"
                        alt="Grafana dashboard"
                        className="monitoring-image"
                    />
                    <p className="monitoring-text">
                        I created Grafana dashboards to visualize and interpret metrics collected by Prometheus. I customized layouts,
                        added interactive charts, and configured alerts that notify me through email or Slack. It’s my go-to for quick
                        health checks and trend analysis.
                    </p>
                </article>
            </div>

            <div className="monitoring-summary">
                <p className="monitoring-text">
                    Implementing this monitoring stack allowed me to gain full visibility into system performance, identify bottlenecks early,
                    and respond to issues before they impacted users. It’s been one of the most valuable DevOps experiences I’ve had so far.
                </p>
            </div>
        </section>
    );
};

export default MonitoringAndAlerting;
