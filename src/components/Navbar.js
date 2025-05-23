import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { useState, useEffect } from 'react';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
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
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
