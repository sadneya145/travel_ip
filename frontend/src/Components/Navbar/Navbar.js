import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../Assets/logo.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <strong className="navbar-title">Trivy</strong>
        </Link>
        <div className="navbar-links">
          <Link className="nav-link" to="/home/Forum">
            <img
              src="https://img.icons8.com/?size=100&id=11881&format=png&color=000000"
              alt="Forum"
              className="nav-icon"
            />
          </Link>
          <Link className="nav-link" to="/home/SocialMedia">
            <img
              src="https://img.icons8.com/?size=100&id=13071&format=png&color=000000"
              alt="Social Media"
              className="nav-icon"
            />
          </Link>
          {/* <Link className="nav-link" to="/home/marketplace">
            <img
              src="https://img.icons8.com/?size=100&id=BBhHIwJINbBl&format=png&color=000000"
              alt="Marketplace"
              className="nav-icon"
            />
          </Link> */}
          <Link className="nav-link" to="/map">
            <img
              src="https://img.icons8.com/?size=100&id=42925&format=png&color=000000"
              alt="Notification"
              className="nav-icon"
            />
          </Link>
          <Link className="nav-link" to="/home/notification">
              <img
                src="https://img.icons8.com/?size=100&id=9RaQIJXn5XR9&format=png&color=000000"
                alt="Notification"
                width="35"
                height="35"
              />
            </Link>
        </div>
        <form className="navbar-search">
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
