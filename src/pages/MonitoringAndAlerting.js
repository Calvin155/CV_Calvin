import React from 'react';
import '../css/MonitoringAndAlerting.css';

const MonitoringAndAlerting = () => {
    return (
        <section id="MonitoringAndAlerting" className="monitoring-section">
            <h2 className="monitoring-title">Monitoring & Alerting</h2>

            <div className="monitoring-container">
                {/* Prometheus */}
                <div className="monitoring-card">
                    <h3 className="monitoring-subtitle">Prometheus</h3>
                    <img
                        src="/Images/MonitoringAndAlertingImages/refresh prometheus - new target successfully reading.png"
                        alt="Prometheus UI showing new target"
                        className="monitoring-image"
                    />
                    <p className="monitoring-text">
                        Prometheus is an open-source monitoring and alerting toolkit built for reliability and scalability.
                        It collects metrics from targets by scraping HTTP endpoints, stores them as time-series data, and provides a flexible query language (PromQL).
                    </p>
                </div>

                {/* Node Exporter */}
                <div className="monitoring-card">
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
                        Node Exporter exposes hardware and operating system metrics from Linux servers.
                        It is installed on target nodes so Prometheus can scrape system-level metrics such as CPU, memory, disk, and network usage.
                    </p>
                </div>

                {/* Grafana */}
                <div className="monitoring-card">
                    <h3 className="monitoring-subtitle">Grafana</h3>
                    <img
                        src="/Images/MonitoringAndAlertingImages/Grafana Working.png"
                        alt="Grafana dashboard"
                        className="monitoring-image"
                    />
                    <p className="monitoring-text">
                        Grafana is a powerful open-source platform for visualizing time-series data.
                        It integrates seamlessly with Prometheus and allows users to create dashboards, analyze metrics, and set alerts with rich, customizable visualizations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MonitoringAndAlerting;
