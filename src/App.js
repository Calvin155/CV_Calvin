import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Whoami from './pages/whoami';
import AboutMe from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import CertsAndAchievements from './pages/CertsAchievements';
import TechnicalandPersonalSkills from './pages/TechnicalSkills';
import WorkExperience from './pages/WorkExperience';
import ContactForm from './pages/Contact';
import MonitoringAndAlerting from './pages/MonitoringAndAlerting';
import UnderConstruction from './pages/UnderConstruction';
import SoonToBeReleased from './pages/SoonToBeRealeased';
import Website from './pages/Website';
import FYP_Project from './pages/FYP_Project';
import ThirdYearGP from './pages/ThirdYearGP';
import SpringBootApp from './pages/SpringBootApp';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Navbar />
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/about/whoami" element={<Whoami />} />
            <Route path="/about/education" element={<Education />} />
            <Route path="/about/certs&achievements" element={<CertsAndAchievements />} />
            <Route path="/about/tech&personalskills" element={<TechnicalandPersonalSkills />} />
            <Route path="/about/workexp" element={<WorkExperience />} />
            <Route path="/projects/MonitoringAndAlerting" element={<MonitoringAndAlerting />} />
            <Route path="/PageUnderConstruction" element={<UnderConstruction />} />
            <Route path="/projects/website" element={<Website />} />
            <Route path="/projects/fyp_project" element={<FYP_Project />} />
            <Route path="/projects/ThirdYearGroupProject" element={<ThirdYearGP />} />
            <Route path="/projects/spring_boot_app" element={<SpringBootApp />} />
            <Route path="/soon-to-be-released" element={<SoonToBeReleased />} />
          </Routes>
        </main>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
