import React from "react";

export default function MyFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto" style={{ backgroundColor: "#fffdf5" }}>
      <div className="container d-flex flex-wrap justify-content-between align-items-center py-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-secondary fw-medium">
            © {year} Samruddhi Kadam
          </span>
        </div>
        
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex gap-3">
          <li>
            <a className="text-secondary" href="https://github.com/Samruddhi-30" target="_blank" rel="noreferrer" aria-label="GitHub">
              {/* You can drop a Bootstrap GitHub SVG icon here */}
              GitHub
            </a>
          </li>
          <li>
            <a className="text-secondary" href="https://www.linkedin.com/in/samruddhi-kadam-64a40b321" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              {/* You can drop a Bootstrap LinkedIn SVG icon here */}
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}