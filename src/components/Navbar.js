import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
      <div className="navbar-inner">
        <img
          src="SS - Company Image.png"
          alt="Logo"
          className="navbar-logo"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Hamburger stays outside nav-links */}
        <div
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyPress={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-links">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Me</Link>
          <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
