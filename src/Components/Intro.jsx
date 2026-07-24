import React from "react";
import profileImg from '../assets/samm.jpg';

export default function Intro() {
  return (
    <section className="container py-5 my-4" id="home">
      <div 
        className="p-4 p-lg-5 position-relative overflow-hidden rounded-4 shadow-lg"
        style={{ backgroundColor: "#16181F", border: "1px solid #2A2D37" }}
      >
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ backgroundColor: "#1e1b4b", border: "1px solid #312e81", color: "#818cf8", fontSize: "0.8rem", fontWeight: "600" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              IT ENGINEERING GRADUATE
            </div>

            <h1 className="display-5 fw-bold text-white mb-3" style={{ letterSpacing: "-0.03em" }}>
              Hi, I'm Samruddhi!
            </h1>

            <p className="fs-5 text-secondary mb-4" style={{ lineHeight: "1.6" }}>
              Software Developer blending <strong className="text-white fw-semibold">ML/AI expertise</strong> with scalable backend engineering.
            </p>

            <p className="text-muted mb-4" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
              I build production-ready applications combining <span className="text-white fw-medium">advanced TypeScript architectures</span> with <span className="text-white fw-medium">Python-based machine learning</span>. Whether crafting fault-tolerant AI pipelines or custom browser extensions, I focus on writing clean, resilient code that solves real-world problems.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a 
                href="#projects" 
                className="btn px-4 py-2.5 fw-semibold rounded-2 text-white d-inline-flex align-items-center gap-2 transition-all"
                style={{ backgroundColor: "#6366F1", border: "none", fontSize: "0.9rem" }}
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="btn px-4 py-2.5 fw-semibold rounded-2 text-white d-inline-flex align-items-center gap-2 transition-all"
                style={{ backgroundColor: "#1D212A", border: "1px solid #2A2D37", fontSize: "0.9rem" }}
              >
                Get In Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <div className="position-relative d-inline-block">
              <img 
                src={profileImg} 
                alt="Samruddhi" 
                className="rounded-circle position-relative shadow-lg"
                style={{ width: "240px", height: "240px", objectFit: "cover", border: "3px solid #2A2D37" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}