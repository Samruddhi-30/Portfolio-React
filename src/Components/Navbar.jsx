import React from "react";

export default function Navbar() {
  return (
    <nav 
      className="navbar navbar-expand-lg sticky-top px-4 py-3"
      style={{ 
        backgroundColor: "rgba(11, 13, 18, 0.85)", 
        backdropFilter: "blur(12px)", 
        borderBottom: "1px solid #2A2D37",
        zIndex: 1030
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-white d-flex align-items-center gap-2" href="#home" style={{ letterSpacing: "-0.02em" }}>
          <span className="p-1.5 rounded-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#6366F1", color: "#fff" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </span>
          Portfolio
        </a>
        <button className="navbar-toggler border-0 text-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center">
            <li className="nav-item"><a className="nav-link text-secondary hover-white" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link text-secondary hover-white" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link text-secondary hover-white" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link text-secondary hover-white" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link text-secondary hover-white" href="#education">Education</a></li>
            <li className="nav-item"><a className="btn btn-sm px-3 py-1.5 fw-semibold text-white rounded-pill" style={{ backgroundColor: "#6366F1" }} href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}