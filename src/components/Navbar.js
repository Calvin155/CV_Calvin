import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { useState, useEffect } from 'react';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
      <div className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

      <div
        className="dropdown"
        onClick={() => toggleDropdown('about')}
        tabIndex={0}
        onKeyPress={() => toggleDropdown('about')}
      >
        <span className="dropdown-toggle">About Me</span>
        {dropdownOpen === 'about' && (
          <div className="dropdown-menu">
            <Link to="/about/overview" onClick={() => setMobileMenuOpen(false)}>Overview</Link>
            <Link to="/about/team" onClick={() => setMobileMenuOpen(false)}>Team</Link>
          </div>
        )}
      </div>

      <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
      <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
    </nav>
  );
}

export default Navbar;
