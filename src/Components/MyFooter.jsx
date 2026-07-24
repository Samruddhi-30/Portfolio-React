import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 text-center border-top mt-5" style={{ borderColor: "#2A2D37", backgroundColor: "#101218" }}>
      <div className="container">
        <p className="text-secondary small m-0">© 2026 Samruddhi. Built with React & Bootstrap.</p>
      </div>

      {/* Fixed Resume Action Button */}
      <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 1080 }}>
        <a 
          href="#resume" 
          className="btn d-inline-flex align-items-center gap-2 fw-semibold text-white px-3.5 py-2.5 rounded-pill shadow-lg"
          style={{ backgroundColor: "#16181F", border: "1px solid #2A2D37", backdropFilter: "blur(8px)", fontSize: "0.85rem" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Resume PDF
        </a>
      </div>
    </footer>
  );
}