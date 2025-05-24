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

      <Link to="/" onClick={() => setMobileMenuOpen(false)}>
        Home
      </Link>

      <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
        About Me
      </Link>

      <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>
        Projects
      </Link>

      <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
