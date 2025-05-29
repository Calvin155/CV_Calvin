import React from 'react';
import '../css/ThirdYearGP.css';

const ThirdYearGP = () => {
    return (
        <div className="project-container">
            <h2 className="project-title">Third Year Group Project – Farm Management System</h2>

            <section className="project-section">
                <h3>🛠️ Tools & Technologies</h3>
                <ul>
                    <li>C# with Windows Forms (WinForms)</li>
                    <li>SQL Database hosted in Microsoft Azure</li>
                    <li>GitHub for version control and team collaboration</li>
                    <li>Singleton Design Pattern</li>
                    <li>Agile methodology: sprints, user stories, and deliverables</li>
                </ul>
            </section>

            <section className="project-section">
                <h3>🎯 Aim of the System</h3>
                <p>
                    The goal of this project was to build a comprehensive <strong>Farm Management System</strong> for tracking and managing cattle on a farm. This included features for vaccination records, breed management, culling logs, milk production tracking, and animal sales. The system aimed to offer farmers a digital, centralized way to maintain complete records with full traceability.
                </p>
            </section>

            <section className="project-section">
                <h3>🚜 Key Features</h3>
                <ul>
                    <li><strong>Animal Registry:</strong> Add, edit, and track cows with individual profiles</li>
                    <li><strong>Vaccination Management:</strong> Record vaccinations and due dates</li>
                    <li><strong>Culling Logs:</strong> Track culling decisions and associated data</li>
                    <li><strong>Breed Classification:</strong> Organize cattle by breed and lineage</li>
                    <li><strong>Milk Production Tracking:</strong> Record daily/weekly milk output</li>
                    <li><strong>Animal Sales:</strong> Log the sale of animals and generate reports</li>
                    <li><strong>Traceability:</strong> Maintain a full lifecycle record for each cow</li>
                </ul>
            </section>

            <section className="project-section">
                <h3>👥 Team Process & Client Interaction</h3>
                <p>
                    Our team of four followed an Agile methodology, planning our work into structured sprints with defined goals and deliverables. We held weekly client meetings to gather feedback, demonstrate progress, and ensure our features matched real-world needs. We used GitHub to manage code collaboratively, regularly pushing commits, opening pull requests, and resolving conflicts.
                </p>
            </section>

            <section className="project-section">
                <h3>✅ Testing & Result</h3>
                <p>
                    The project concluded with a successful <strong>User Acceptance Test (UAT)</strong>. Feedback from the client was positive, particularly regarding usability and domain-specific features. The project received a final grade of <strong>75%</strong>, a solid <strong>First Class Honours (1:1)</strong>.
                </p>
            </section>

            <section className="project-section">
                <h3>📌 What This Project Demonstrates</h3>
                <p>
                    This group project showcases my ability to build real-world, data-driven desktop applications using <strong>C# and WinForms</strong>. It highlights experience working within an Agile team, applying object-oriented design patterns, using cloud-hosted databases, and consistently integrating client feedback. It also reflects strong communication, planning, and collaborative problem-solving skills within a team of 4.
                </p>
            </section>
        </div>
    );
};

export default ThirdYearGP;
