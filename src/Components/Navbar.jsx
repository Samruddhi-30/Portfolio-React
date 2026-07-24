import React from 'react';
import styles from '../Styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top shadow-sm ${styles.navbar}`} style={{ backgroundColor: "#fffdf5" }}>
      <div className={`container px-4 py-2 ${styles.container}`}>
        <a className="navbar-brand fw-bold" style={{ color: "#d35400" }} href="#">Portfolio</a>
        
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav gap-3">
            <a className="nav-link fw-medium text-secondary hover-orange" href="#">Home</a>
            <a className="nav-link fw-medium text-secondary hover-orange" href="#projects">Projects</a>
            <a className="nav-link fw-medium text-secondary hover-orange" href="#skills">Skills</a>
            <a className="nav-link fw-medium text-secondary hover-orange" href="https://github.com/Samruddhi-30" target="_blank" rel="noreferrer">GitHub</a>
            <a className="nav-link fw-medium text-secondary hover-orange" href="https://www.linkedin.com/in/samruddhi-kadam-64a40b321" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;