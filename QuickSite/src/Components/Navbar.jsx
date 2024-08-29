// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SiteForge</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/templates">Templates</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
       
        <li><Link to="/about">About</Link></li>
        <li><Link to="/developer">Developer</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="login-button"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
