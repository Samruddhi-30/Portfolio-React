import React from "react";
import styles from "../Styles/Experience.module.css";

function Experience() {
  return (
    <div className="container px-4 py-5 my-3" id="experience">
      <h2 className="pb-3 border-bottom text-center mb-5" style={{ color: "#2c3e50" }}>
        <strong>EXPERIENCE</strong>
      </h2>
      
      {/* DeepEcom Experience */}
      <div className="card border-0 rounded-4 shadow-sm mx-auto mb-4" style={{ maxWidth: "900px", backgroundColor: "#fffdf5" }}>
        <div className="card-body p-5">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4 flex-wrap">
            <div>
              <h3 className="fw-bold mb-1" style={{ color: "#d35400" }}>Software Developer Intern</h3>
              <h5 className="text-muted mb-0">DeepEcom</h5>
            </div>
            <span className="badge bg-secondary px-3 py-2 mt-2 mt-sm-0 rounded-pill">March 2026 – Present</span>
          </div>
          
          <p className="lead text-secondary fs-6 mb-4" style={{ lineHeight: "1.8" }}>
            Driving production backend systems with an emphasis on event-driven architecture. Designed a tiered GST/HSN classification pipeline utilizing exact SKU matching, fuzzy matching (pg_trgm), vector embedding similarity, and an OpenRouter LLM fallback to significantly reduce redundant AI calls. Built robust workflow automations and typed RPC layers connecting a Bun backend to React/XState frontends.
          </p>

          <div className="p-4 rounded-3" style={{ backgroundColor: "#fdf8e9" }}>
            <h6 className="fw-bold mb-3" style={{ color: "#2c3e50" }}>Key Technologies & Achievements:</h6>
            <ul className="list-unstyled mb-0 text-secondary" style={{ lineHeight: "1.7" }}>
              <li className="mb-2">⚡ <strong>Tech Stack:</strong> TypeScript, Effect-TS, XState, Bun, PostgreSQL, WebSockets</li>
              <li className="mb-2">⚙️ Developed event-driven XState state machines powering complex review workflow UIs.</li>
              <li className="mb-2">🔌 Integrated tool-calling web search for compliance lookups with rate limiting and exponential backoff.</li>
              <li>🌐 Built a Chrome MV3 extension automating data retrieval across marketplace dashboards.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* InventOnUs Experience */}
      <div className="card border-0 rounded-4 shadow-sm mx-auto" style={{ maxWidth: "900px", backgroundColor: "#fffdf5" }}>
        <div className="card-body p-5">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4 flex-wrap">
            <div>
              <h3 className="fw-bold mb-1" style={{ color: "#d35400" }}>AI-ML Intern</h3>
              <h5 className="text-muted mb-0">InventOnUs</h5>
            </div>
            <span className="badge bg-secondary px-3 py-2 mt-2 mt-sm-0 rounded-pill">Jan 2025 – Apr 2025</span>
          </div>
          
          <p className="lead text-secondary fs-6 mb-4" style={{ lineHeight: "1.8" }}>
            Developed and deployed end-to-end machine learning models using Python to automate the generation of compliance policy documents. Designed a scalable pipeline for data preprocessing, model training, and deployment.
          </p>

          <div className="p-4 rounded-3" style={{ backgroundColor: "#fdf8e9" }}>
            <ul className="list-unstyled mb-0 text-secondary">
              <li className="mb-2">📉 Cut document processing time by roughly 70% using NLP-based pipelines.</li>
              <li>📊 Utilized SQL and MongoDB for data handling across ML workflows.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Experience;