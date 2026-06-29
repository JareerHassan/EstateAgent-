import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <nav className="nav-left" aria-label="Primary navigation">
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
          </nav>

          <Link to="/" className="logo" aria-label="EstateAgent home">
            <img src={logo} alt="EstateAgent" className="logo-img" />
          </Link>

          <nav className="nav-right" aria-label="Secondary navigation">
            <NavLink to="/properties">Properties</NavLink>
            <a href="/#testimonials">Testimonials</a>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <button
            className="menu-btn"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            ☰
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>
          <a href="/#services" onClick={closeMenu}>
            Services
          </a>
          <NavLink to="/properties" onClick={closeMenu}>
            Properties
          </NavLink>
          <a href="/#testimonials" onClick={closeMenu}>
            Testimonials
          </a>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
