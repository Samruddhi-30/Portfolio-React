import React from 'react';
import styles from '../Styles/Intro.module.css';
import profileImg from '../assets/samm.jpg';

function Intro() {
  return (
    <section className="container my-5" id="home">
      {/* Main Aesthetic Glass Card Container */}
      <div 
        className="p-4 p-lg-5 position-relative overflow-hidden shadow-sm"
        style={{
          background: "linear-gradient(135deg, #fffdfa 0%, #fff8ed 100%)",
          border: "1px solid rgba(245, 230, 211, 0.8)",
          borderRadius: "24px",
        }}
      >
        <div className="row align-items-center g-5 py-3">
          
          {/* Text Content Section */}
          <div className="col-lg-7">
            <div className="pe-lg-3">
              <span 
                className="badge rounded-pill px-3 py-2 mb-3 fw-semibold text-uppercase" 
                style={{ 
                  backgroundColor: "#fef3c7", 
                  color: "#b45309", 
                  letterSpacing: "0.08em", 
                  fontSize: "0.75rem",
                  border: "1px solid #fde68a"
                }}
              >
                ✨ IT Engineering Graduate
              </span>
              
              <h1 className="display-5 fw-bold lh-sm mb-3" style={{ color: "#111827", letterSpacing: "-0.02em" }}>
                Hi, I'm Samruddhi!
              </h1>
              
              <h2 className="fs-5 fw-medium mb-4" style={{ color: "#4b5563", lineHeight: "1.5" }}>
                Software Developer blending <span style={{ color: "#d97706", fontWeight: "600" }}>ML/AI expertise</span> with scalable backend engineering.
              </h2>
              
              <p className="text-muted mb-4" style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
                I build production-ready applications combining <strong>advanced TypeScript</strong> architectures with <strong>Python-based machine learning</strong>. Whether crafting fault-tolerant AI pipelines or custom browser extensions, I focus on writing clean, resilient code that solves real-world problems.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <a 
                  href="#projects" 
                  className="btn px-4 py-2.5 fw-semibold text-white shadow-sm" 
                  style={{ 
                    backgroundColor: "#d97706", 
                    borderRadius: "12px", 
                    transition: "all 0.2s ease",
                    border: "none"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#b45309";
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#d97706";
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  View My Work →
                </a>
                <a 
                  href="mailto:kadamsamruddhi370@gmail.com" 
                  className="btn px-4 py-2.5 fw-semibold shadow-sm" 
                  style={{ 
                    backgroundColor: "#ffffff", 
                    color: "#374151", 
                    border: "1px solid #e5e7eb", 
                    borderRadius: "12px", 
                    transition: "all 0.2s ease" 
                  }}
                  onMouseOver={(e) => { 
                    e.currentTarget.style.backgroundColor = '#fffbeb'; 
                    e.currentTarget.style.borderColor = '#f59e0b'; 
                    e.currentTarget.style.color = '#b45309'; 
                  }}
                  onMouseOut={(e) => { 
                    e.currentTarget.style.backgroundColor = 'white'; 
                    e.currentTarget.style.borderColor = '#e5e7eb'; 
                    e.currentTarget.style.color = '#374151'; 
                  }}
                >
                  Get In Touch 👋
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image Section with Glow Effect */}
          <div className="col-lg-5 text-center position-relative">
            <div className="position-relative d-inline-block p-3">
              <div 
                className="position-absolute top-50 start-50 translate-middle rounded-circle" 
                style={{ 
                  width: "110%", 
                  height: "110%", 
                  background: "radial-gradient(circle, rgba(252,211,77,0.4) 0%, rgba(254,243,199,0) 70%)", 
                  zIndex: 0 
                }}
              ></div>
              <img 
                src={profileImg}
                alt="Samruddhi Profile" 
                className="img-fluid rounded-circle shadow" 
                loading="lazy" 
                style={{ 
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                  border: "5px solid #ffffff", 
                  position: "relative", 
                  zIndex: 1 
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Intro;