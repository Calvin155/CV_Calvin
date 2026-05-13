import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const close = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" onClick={close}>
          <img
            src="/Images/SS - Company Image.png"
            alt="Logo"
            className="navbar-logo"
          />
        </NavLink>

        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyPress={() => setMobileMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-links">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/projects" onClick={close}>Projects</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
