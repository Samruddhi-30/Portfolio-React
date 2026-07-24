import React from "react";

export default function Experience() {
  return (
    <section className="container py-5 my-4" id="experience" style={{ backgroundColor: "#101218", borderRadius: "24px" }}>
      <div className="mb-5">
        <span className="badge rounded-pill px-3 py-1.5 mb-2 fw-semibold text-uppercase" style={{ backgroundColor: "#1e1b4b", color: "#818cf8", border: "1px solid #312e81", fontSize: "0.75rem", letterSpacing: "0.08em" }}>
          Career Journey
        </span>
        <h2 className="fw-bold h3 text-white" style={{ letterSpacing: "-0.02em" }}>Experience</h2>
      </div>

      <div className="position-relative ps-4" style={{ borderLeft: "2px solid #2A2D37" }}>
        <div className="position-relative mb-4">
          <div className="position-absolute rounded-circle" style={{ width: "12px", height: "12px", backgroundColor: "#6366F1", left: "-23px", top: "6px", border: "2px solid #0B0D12", boxShadow: "0 0 0 2px #6366F1" }}></div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-1">
            <h3 className="h5 fw-bold text-white m-0">Software Developer Intern</h3>
            <span className="badge rounded-pill px-3 py-1 mt-2 mt-md-0 align-self-start" style={{ backgroundColor: "#1D212A", color: "#818cf8", border: "1px solid #2A2D37", fontSize: "0.8rem" }}>
              March 2026 – Present
            </span>
          </div>

          <h4 className="h6 fw-semibold text-secondary mb-3">DeepEcom</h4>

          <p className="text-secondary mb-3" style={{ lineHeight: "1.6", fontSize: "0.92rem", maxWidth: "850px" }}>
            Driving production backend systems with an emphasis on event-driven architecture. Designed a tiered GST/HSN classification pipeline utilizing exact SKU matching, fuzzy matching (pg_trgm), vector embedding similarity, and an OpenRouter LLM fallback to significantly reduce redundant AI calls. Built robust workflow automations and typed RPC layers connecting a Bun backend to React/XState frontends.
          </p>

          <div className="p-3 rounded-3 mb-3" style={{ backgroundColor: "#16181F", border: "1px solid #2A2D37" }}>
            <p className="text-white fw-semibold small mb-2">Key Technologies & Achievements:</p>
            <ul className="list-unstyled m-0 text-secondary small d-flex flex-column gap-1.5">
              <li className="d-flex align-items-center gap-2"><span className="text-indigo-400" style={{ color: "#818cf8" }}>•</span> <strong className="text-white">Tech Stack:</strong> TypeScript, Effect-TS, XState, Bun, PostgreSQL, WebSockets</li>
              <li className="d-flex align-items-center gap-2"><span className="text-indigo-400" style={{ color: "#818cf8" }}>•</span> Developed event-driven XState state machines powering complex review workflow UIs.</li>
              <li className="d-flex align-items-center gap-2"><span className="text-indigo-400" style={{ color: "#818cf8" }}>•</span> Integrated tool-calling web search for compliance lookups with rate limiting and exponential backoff.</li>
              <li className="d-flex align-items-center gap-2"><span className="text-indigo-400" style={{ color: "#818cf8" }}>•</span> Built a Chrome MV3 extension automating data retrieval across marketplace dashboards.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}