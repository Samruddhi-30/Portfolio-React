import React from "react";

export default function Projects() {
  const projectList = [
    {
      title: "MentalWell (AI Mental Health Assistant)",
      desc: "An AI-powered mental health chatbot providing empathetic support with emotion detection and sentiment analysis. Ensures complete privacy through local processing, encrypted storage, and federated learning.",
      tech: "Python, Machine Learning (NLP, emotion classification), Flask, encryption, transformer models."
    },
    {
      title: "Web Scraper-Product Price Tracker",
      desc: "Automated e-commerce price monitoring tool that extracts real-time product data (title, price, availability) with 95%+ accuracy. Stores data in CSV format for historical trend analysis and price comparison.",
      tech: "Python, BeautifulSoup, Pandas, CSV"
    },
    {
      title: "Full Stack Blog Platform",
      desc: "A full-stack blogging platform where users can register, log in, create, edit, and delete posts with secure authentication and database integration.",
      tech: "Django, Python, SQLite, HTML, CSS, Bootstrap"
    },
    {
      title: "WeatherScope",
      desc: "A React app that fetches live weather data based on city input using an external weather API. Displays temperature, condition, and location dynamically.",
      tech: "Node.js, Express, REST API, JavaScript, CSS"
    }
  ];

  return (
    <section className="container py-5 my-4" id="projects" style={{ backgroundColor: "#101218", borderRadius: "24px" }}>
      <div className="text-center mb-5">
        <span className="badge rounded-pill px-3 py-1.5 mb-2 fw-semibold text-uppercase" style={{ backgroundColor: "#1e1b4b", color: "#818cf8", border: "1px solid #312e81", fontSize: "0.75rem", letterSpacing: "0.08em" }}>
          Portfolio Showcase
        </span>
        <h2 className="fw-bold h3 text-white" style={{ letterSpacing: "-0.02em" }}>Featured Projects</h2>
        <p className="text-secondary small mx-auto" style={{ maxWidth: "450px" }}>Production apps, machine learning pipelines, and tools built to scale.</p>
      </div>

      <div className="row g-4">
        {projectList.map((project, idx) => (
          <div className="col-lg-6" key={idx}>
            <div className="h-100 p-4 rounded-3 d-flex flex-column justify-content-between" style={{ backgroundColor: "#16181F", border: "1px solid #2A2D37" }}>
              <div>
                <h3 className="h5 fw-bold text-white mb-2">{project.title}</h3>
                <p className="text-secondary small mb-4" style={{ lineHeight: "1.6" }}>{project.desc}</p>
              </div>
              <div className="p-3 rounded-2" style={{ backgroundColor: "#1D212A", border: "1px solid #2A2D37" }}>
                <span className="text-white fw-semibold small d-block mb-1">Tech Used:</span>
                <span className="text-secondary small">{project.tech}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}