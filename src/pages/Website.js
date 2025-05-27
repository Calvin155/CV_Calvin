import React from 'react';
import '../css/Website.css';

const Website = () => {
    return (
        <div className="website-container">
            <h2>Project Website Overview</h2>

            <section>
                <h4>Tools & Technology</h4>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>GitHub</li>
                    <li>VS Code (IDE)</li>
                    <li>Vercel (Deployment)</li>
                </ul>
            </section>

            <section>
                <h4>Getting Started</h4>
                <p>
                    This website is built using <strong>React</strong>, a powerful JavaScript library for creating user interfaces.
                    The entire codebase is version-controlled via <strong>GitHub</strong> and developed locally using <strong>Visual Studio Code</strong>.

                <div className="screenshot">
                    <img src="/Images/CV/navbar_js.png" alt="NavBar Source Code" />
                    <caption>Source Code being displayed in VS Code</caption>
                </div>
                </p>
            </section>

            <section>
                <h4>Local Development</h4>
                <ul>
                    <li>All code is written in JavaScript and stored in a GitHub repository.</li>
                    <li>To start development: navigate to the project root and run <code>npm start</code>.</li>
                    <li>Local server reloads automatically to reflect any changes made.</li>
                    <li>Once happy with changes, commit and push updates to GitHub.</li>
                </ul>
                <div className="screenshot">
                    <img src="/Images/CV/npm start.png" alt="Local Development - Start server" />
                    <caption>Local dev server running via <code>npm start</code></caption>
                </div>
            </section>

            <section>
                <h4>Deployment</h4>
                <p>
                    Deployment is managed using <strong>Vercel</strong>. After creating a Vercel account, I connected it to the GitHub repository.
                    Vercel automatically watches the main branch and triggers a new build and deployment whenever changes are pushed.
                </p>
            </section>

            <section>
                <h4>New Updates & Re-Deployment</h4>
                <ul>
                    <li>Make changes locally, test and verify functionality.</li>
                    <li>Push changes to the <code>main</code> branch on GitHub.</li>
                    <li>Vercel detects the push and starts a new build.</li>
                    <li>On successful build, the updated site is deployed automatically.</li>
                </ul>
                <div className="screenshot">
                    <img src="/Images/CV/Building an update on vercel.png" alt="New Update & Re-deployment" />
                    <caption>Vercel auto-build and deployment flow</caption>
                </div>
            </section>

            <section>
                <h4>Production Website</h4>
                <ul>
                    <li>The website is publicly accessible via a Vercel-generated URL.</li>
                    <li>Updates are automatic—each push to GitHub triggers a new deployment.</li>
                </ul>
                <div className="screenshot">
                    <img src="/Images/CV/public web app deployed.png" alt="Production Web App" />
                    <caption>Live deployment of the web app</caption>
                </div>
            </section>


            <br></br>
            <section>
                <h4>What This Project Showcases</h4>
                <ul>
                    <li><strong>Frontend Development:</strong> Built using React, demonstrating component-based architecture, clean UI structuring, and reusable logic.</li>
                    <li><strong>Version Control:</strong> All source code is managed via Git and hosted on GitHub, following good branching and commit practices.</li>
                    <li><strong>CI/CD Pipeline:</strong> Integration with Vercel enables Continuous Integration and Continuous Deployment, triggered by GitHub pushes to the <code>main</code> branch.</li>
                    <li><strong>DevOps Mindset:</strong> Automates builds and deployment, reducing manual overhead and ensuring rapid, reliable delivery.</li>
                    <li><strong>Live Preview & Iteration:</strong> Changes can be tested locally, reviewed, and quickly deployed to production, aligning with agile development workflows.</li>
                </ul>
            </section>

        </div>
    );
};

export default Website;
