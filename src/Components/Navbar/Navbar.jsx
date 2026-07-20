import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        eli<span>ott</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/review">Reviews</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-right">
        <button className="theme-btn">☾</button>

        <button className="hire-btn">
          Hire me →
        </button>
      </div>
    </header>
  );
};

export default Navbar;