import React from "react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend & Architecture",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Effect-TS"]
    },
    {
      title: "Backend & Systems",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
      skills: ["Node.js", "REST APIs", "SQL / Databases", "Browser Extensions", "Git & GitHub"]
    },
    {
      title: "AI & Machine Learning",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>,
      skills: ["Python", "TensorFlow", "Scikit-Learn", "Data Pipelines", "Neural Networks"]
    }
  ];

  return (
    <section className="container py-5 my-4" id="skills">
      <div className="text-center mb-5">
        <span className="badge rounded-pill px-3 py-1.5 mb-2 fw-semibold text-uppercase" style={{ backgroundColor: "#1e1b4b", color: "#818cf8", border: "1px solid #312e81", fontSize: "0.75rem", letterSpacing: "0.08em" }}>
          Core Stack
        </span>
        <h2 className="h3 fw-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>Skills & Technologies</h2>
        <p className="text-secondary small mx-auto" style={{ maxWidth: "450px" }}>Tools and technologies I use to build robust, production-ready applications.</p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {skillGroups.map((group, index) => (
          <div className="col" key={index}>
            <div className="h-100 p-4 rounded-3" style={{ backgroundColor: "#16181F", border: "1px solid #2A2D37" }}>
              <div className="d-flex align-items-center gap-2.5 mb-3">
                <div className="p-2 rounded-2" style={{ backgroundColor: "#1D212A" }}>{group.icon}</div>
                <h3 className="h6 fw-bold text-white m-0">{group.title}</h3>
              </div>
              <div className="d-flex flex-wrap gap-1.5 pt-2">
                {group.skills.map((skill, idx) => (
                  <span key={idx} className="badge px-2.5 py-1.5 fw-medium" style={{ backgroundColor: "#1D212A", color: "#E2E8F0", border: "1px solid #2A2D37", fontSize: "0.8rem" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}