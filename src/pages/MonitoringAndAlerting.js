import React from 'react';
import '../css/MonitoringAndAlerting.css';

const MonitoringAndAlerting = () => {
    return (
        <section id="MonitoringAndAlerting" className="monitoring-section">
            <h1 className="monitoring-title">Monitoring & Alerting</h1>

            <h2 className="monitoring-subheading">Tools & Technologies</h2>
            <ul className="monitoring-list">
                <li>Docker & Docker CLI</li>
                <li>Node Exporter – Docker image or standalone binary</li>
                <li>Prometheus – official Docker deployment</li>
                <li>Grafana – deployed via Docker Hub</li>
                <li>Raspberry Pi 5 – edge deployment device</li>
                <li>GitHub – version control & configuration tracking</li>
                <li>VS Code – primary IDE for scripting & config</li>
                <li>Bash – container orchestration & automation scripts</li>
            </ul>

            <h2 className="monitoring-subheading">Getting Started</h2>
            <div className="getting-started">
                <p className="monitoring-text">
                    I started by deploying Prometheus using Docker, configuring it to scrape metrics from specified targets. I then set up Node Exporter on my Raspberry Pi to expose vital system metrics like CPU, memory, disk, and network usage.
                </p>
                <p className="monitoring-text">
                    After data collection was operational, I integrated Prometheus with Grafana to create real-time dashboards. I also configured alerting rules in both Prometheus and Grafana to receive instant notifications of unusual activity.
                </p>
            </div>

            <div className="monitoring-container">
                <article className="monitoring-card">
                    <h3 className="monitoring-subtitle">Node Exporter</h3>
                    <a href="/Images/MonitoringAndAlertingImages/Metrics from Node Exporter - Accessible on Pi IP address.png" target="_blank" rel="noopener noreferrer">
                        <img src="/Images/MonitoringAndAlertingImages/Metrics from Node Exporter - Accessible on Pi IP address.png" alt="Prometheus UI showing new target" className="monitoring-image" />
                    </a>
                    <p className="monitoring-text">
                        Node Exporter provided critical system-level metrics directly from my Raspberry Pi. It enabled Prometheus to track hardware performance in real-time, offering deep insights into resource utilization.
                    </p>
                </article>

                <article className="monitoring-card">
                    <h3 className="monitoring-subtitle">Prometheus</h3>
                    <a href="/Images/MonitoringAndAlertingImages/refresh prometheus - new target successfully reading.png" target="_blank" rel="noopener noreferrer">
                        <img src="/Images/MonitoringAndAlertingImages/refresh prometheus - new target successfully reading.png" alt="Prometheus UI showing new target" className="monitoring-image" />
                    </a>
                    <p className="monitoring-text">
                        Prometheus formed the core of the monitoring stack. I created scrape jobs in YAML and wrote PromQL queries to monitor CPU, memory, disk I/O, and uptime across all devices.
                    </p>
                </article>

                <article className="monitoring-card">
                    <h3 className="monitoring-subtitle">Grafana</h3>
                    <a href="/Images/MonitoringAndAlertingImages/Grafana Working.png" target="_blank" rel="noopener noreferrer">
                        <img src="/Images/MonitoringAndAlertingImages/Grafana Working.png" alt="Grafana dashboard" className="monitoring-image" />
                    </a>
                    <p className="monitoring-text">
                        Grafana made data interpretation seamless. I built dynamic dashboards with customizable panels and integrated real-time alerting through Slack and email.
                    </p>
                </article>

                <article className="monitoring-card">
                    <h3 className="monitoring-subtitle">Alerting</h3>
                    <a href="/Images/MonitoringAndAlertingImages/Alert_Rules Image.png" target="_blank" rel="noopener noreferrer">
                        <img src="/Images/MonitoringAndAlertingImages/Alert_Rules Image.png" alt="Alert Rules" className="monitoring-image" />
                    </a>
                    <p className="monitoring-text">
                        I configured Prometheus alert rules that fired based on threshold breaches. These were forwarded to Alertmanager, which handled routing via webhook and displayed alert statuses.
                    </p>

                    <a href="/Images/MonitoringAndAlertingImages/Alerts Showing on Promethus.png" target="_blank" rel="noopener noreferrer">
                        <img src="/Images/MonitoringAndAlertingImages/Alerts Showing on Promethus.png" alt="Alert in Prometheus" className="monitoring-image" />
                    </a>
                    <a href="/Images/MonitoringAndAlertingImages/Alerts showing on alert manager as OK.png" target="_blank" rel="noopener noreferrer">
                        <img src="/Images/MonitoringAndAlertingImages/Alerts showing on alert manager as OK.png" alt="Alert in Alertmanager" className="monitoring-image" />
                    </a>

                    <p className="monitoring-text">
                        Using Docker, I exposed Alertmanager on port 9093. Alerts like Raspberry Pi downtimes were triggered if the system was down for over 30 seconds, as validated through Prometheus and Alertmanager UIs.
                    </p>

                    <a href="/Images/MonitoringAndAlertingImages/alert manager down pi critical - alert webhook.png" target="_blank" rel="noopener noreferrer">
                        <img src="/Images/MonitoringAndAlertingImages/alert manager down pi critical - alert webhook.png" alt="Pi Down Alert" className="monitoring-image" />
                    </a>

                    <p className="monitoring-text">
                        I simulated a critical alert by powering off the Raspberry Pi. After 30 seconds, Prometheus triggered an alert, visualized across the stack.
                    </p>

                    <a href="/Images/MonitoringAndAlertingImages/alert manager webhook code.png" target="_blank" rel="noopener noreferrer">
                        <img src="/Images/MonitoringAndAlertingImages/alert manager webhook code.png" alt="Webhook Code" className="monitoring-image" />
                    </a>
                    <a href="/Images/MonitoringAndAlertingImages/webhook alert.png" target="_blank" rel="noopener noreferrer">
                        <img src="/Images/MonitoringAndAlertingImages/webhook alert.png" alt="Webhook Alert" className="monitoring-image" />
                    </a>
                    <p className="monitoring-text">
                        Webhooks were tested using <a href="https://webhook.site" target="_blank" rel="noopener noreferrer">webhook.site</a> to capture and visualize incoming alerts. This flexible setup can also use email or SMS for critical notifications.
                    </p>
                </article>
            </div>


            <h2 className="fyp-subheading">Docker Hub Links</h2>
            <ul className="fyp-list">
                <li>Prometheus (Port 9090): <a href="https://hub.docker.com/r/prom/prometheus" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/prom/prometheus</a></li>
                <li>Alertmanager (Port 9093): <a href="https://hub.docker.com/r/ubuntu/prometheus-alertmanager" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/ubuntu/prometheus-alertmanager</a></li>
                <li>Grafana (Port 3000): <a href="https://hub.docker.com/r/grafana/grafana" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/grafana/grafana</a></li>
                <li>
                    Node Exporter (Port 9100): <a href="https://hub.docker.com/r/bitnami/node-exporter" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/bitnami/node-exporter</a><br />
                    Standalone Binary: <a href="https://prometheus.io/download/" target="_blank" rel="noopener noreferrer">https://prometheus.io/download/</a>
                </li>
                <li>Webhook Testing: <a href="https://webhook.site" target="_blank" rel="noopener noreferrer">https://webhook.site</a></li>
            </ul>

            <h2 className="monitoring-subheading">Summary & Learnings</h2>
            <div className="monitoring-summary">
                <p className="monitoring-text">
                    This monitoring and alerting project deepened my understanding of modern DevOps and observability practices. I gained hands-on experience deploying and configuring Prometheus, Grafana, Node Exporter, and Alertmanager using Docker on a Raspberry Pi edge device.
                </p>
                <p className="monitoring-text">
                    I learned how to:
                    <ul className="monitoring-list">
                        <li>Define scrape jobs in Prometheus to gather system-level metrics</li>
                        <li>Create visual dashboards in Grafana to interpret data in real time</li>
                        <li>Set up alert rules and simulate system failures for end-to-end alert testing</li>
                        <li>Use webhooks to forward critical alerts to custom endpoints</li>
                    </ul>
                </p>
                <p className="monitoring-text">
                    This experience was valuable because it exposed me to the core principles of system monitoring and fault detection.
                </p>
            </div>

        </section>
    );
};

export default MonitoringAndAlerting;