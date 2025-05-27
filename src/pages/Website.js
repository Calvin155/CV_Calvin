import React from 'react';
import '../css/Website.css';

const Website = () => {
    return (
        <div className="website-container">
            <h2>CV Website Overview</h2>

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
                    This CV website is built using <strong>React</strong>, with the code version-controlled via <strong>GitHub</strong> and developed in <strong>VS Code</strong>.
                </p>
                <div className="screenshot">
                    <img src="/Images/CV/navbar_js.png" alt="NavBar Source Code" />
                    <p className="caption">Editing the NavBar component in VS Code</p>
                </div>

                <div className="screenshot">
                    <img src="/Images/CV/cv Github.png" alt="GitHub Repo Source" />
                    <p className="caption">GitHub Repository</p>
                </div>
            </section>

            <section>
                <h4>Local Development</h4>
                <ul>
                    <li>Code is written in JavaScript and pushed to a GitHub repository.</li>
                    <li>To start development, navigate to the project root and run <code>npm start</code>.</li>
                    <li>The local server hot-reloads changes automatically.</li>
                    <li>Changes are committed and pushed once verified.</li>
                </ul>
                <div className="screenshot">
                    <img src="/Images/CV/npm start.png" alt="Local Development - Start server" />
                    <p className="caption">Running the local dev server with <code>npm start</code></p>
                </div>
            </section>

            <section>
                <h4>Deployment</h4>
                <p>
                    Deployment is handled by <strong>Vercel</strong>, which is linked to the GitHub repo. Any push to the <code>main</code> branch triggers an automatic build and deployment.
                </p>
            </section>

            <section>
                <h4>New Updates & Re-Deployment</h4>
                <ul>
                    <li>Edit and test changes locally.</li>
                    <li>Push to <code>main</code> on GitHub.</li>
                    <li>Vercel builds and redeploys automatically if the build is successful.</li>
                </ul>
                <div className="screenshot">
                    <img src="/Images/CV/Building an update on vercel.png" alt="New Update & Re-deployment" />
                    <p className="caption">Vercel build triggered by GitHub push</p>
                </div>

                <div className="screenshot">
                    <img src="/Images/CV/Building new update.png" alt="Deployments" />
                    <p className="caption">New release being built and deployed</p>
                </div>
            </section>

            <section>
                <h4>Production Website</h4>
                <ul>
                    <li>The live site is hosted publicly via Vercel.</li>
                    <li>All updates are deployed automatically on GitHub push.</li>
                </ul>
                <div className="screenshot">
                    <img src="/Images/CV/public web app deployed.png" alt="Production Web App" />
                    <p className="caption">Deployed CV website live on the web</p>
                </div>
            </section>

            <section>
                <h4>What This Project Showcases</h4>
                <ul>
                    <li><strong>Frontend Development:</strong> React-based structure with reusable components and clean design.</li>
                    <li><strong>Version Control:</strong> Proper GitHub repo structure and commit workflow.</li>
                    <li><strong>CI/CD:</strong> Vercel automates build and deployment from GitHub.</li>
                    <li><strong>DevOps Practice:</strong> Demonstrates continuous delivery and modern deployment flow.</li>
                    <li><strong>Rapid Iteration:</strong> Enables efficient development, testing, and release cycles.</li>
                </ul>
            </section>
        </div>
    );
};

export default Website;
