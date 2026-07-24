import React from "react";
import styles from "../Styles/Education.module.css";

function Education() {
  return (
    <div className="container px-4 py-5" id="education">
      <h2 className="pb-3 border-bottom text-center mb-5" style={{ color: "#2c3e50" }}>
        <strong>EDUCATION</strong>
      </h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
        <div className="col">
          <div className="card h-100 border-0 rounded-4 shadow-sm" style={{ backgroundColor: "#fffdf5" }}>
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3" style={{ color: "#d35400" }}>Bachelor of Engineering - I.T</h4>
              <p className="mb-2 text-muted">📍 Smt. Kashibai Navale College of Engineering, Pune</p>
              <p className="mb-2 text-muted">📅 2022 - 2026</p>
              <h5 className="fw-bold text-success my-3">🎯 CGPA: 9.26 / 10</h5>
              <p className="mb-0 small text-secondary">
                <strong>Key Focus:</strong> Web Development, Machine Learning, Data Structures
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 border-0 rounded-4 shadow-sm" style={{ backgroundColor: "#fffdf5" }}>
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3" style={{ color: "#d35400" }}>HSC</h4>
              <p className="mb-2 text-muted">📍 Sir Parashurambhau College, Pune</p>
              <p className="mb-2 text-muted">📅 2022</p>
              <h5 className="fw-bold text-success my-3">🎯 68.67%</h5>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 border-0 rounded-4 shadow-sm" style={{ backgroundColor: "#fffdf5" }}>
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3" style={{ color: "#d35400" }}>SSC</h4>
              <p className="mb-2 text-muted">📍 New Life Centre High School, Pune</p>
              <p className="mb-2 text-muted">📅 2020</p>
              <h5 className="fw-bold text-success my-3">🎯 87.20%</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;