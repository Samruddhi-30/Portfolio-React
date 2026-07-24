import React from "react";

export default function ProjectDetailed({ title, description, techStack, link }) {
  return (
    <div className="col">
      <div className="card h-100 border-0 rounded-4 shadow-sm" style={{ backgroundColor: "#fffdf5", transition: "transform 0.2s" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
        <div className="card-body p-4 d-flex flex-column">
          <h4 className="fw-bold mb-3" style={{ color: "#d35400" }}>
            {title}
          </h4>
          <p className="card-text text-secondary mb-4 flex-grow-1" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
            {description}
          </p>
          <div className="mt-auto">
            <div className="p-3 rounded-3" style={{ backgroundColor: "#fef8e6" }}>
              <span className="fw-bold" style={{ color: "#2c3e50", fontSize: "0.85rem" }}>Tech Used: </span>
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>{techStack}</span>
            </div>
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="btn btn-sm mt-3 fw-bold" style={{ backgroundColor: "#d35400", color: "white", borderRadius: "8px" }}>
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}