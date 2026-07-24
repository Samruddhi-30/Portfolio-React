import React from "react";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend & Architecture",
      icon: "⚡",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Effect-TS"]
    },
    {
      title: "Backend & Systems",
      icon: "⚙️",
      skills: ["Node.js", "REST APIs", "SQL / Databases", "Browser Extensions", "Git & GitHub"]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: ["Python", "TensorFlow", "Scikit-Learn", "Data Pipelines", "Neural Networks"]
    }
  ];

  return (
    <section className="container my-5" id="skills">
      {/* Main Aesthetic Container */}
      <div 
        className="p-4 p-lg-5 position-relative overflow-hidden shadow-sm"
        style={{
          background: "linear-gradient(135deg, #fffdfa 0%, #fff8ed 100%)",
          border: "1px solid rgba(245, 230, 211, 0.8)",
          borderRadius: "24px",
        }}
      >
        {/* Section Header */}
        <div className="text-center mb-4">
          <span 
            className="badge rounded-pill px-3 py-2 mb-2 fw-semibold text-uppercase" 
            style={{ 
              backgroundColor: "#fef3c7", 
              color: "#b45309", 
              letterSpacing: "0.08em", 
              fontSize: "0.75rem",
              border: "1px solid #fde68a"
            }}
          >
            ✨ Core Stack
          </span>
          <h2 className="h3 fw-bold mb-2" style={{ color: "#111827", letterSpacing: "-0.02em" }}>
            Skills & Technologies
          </h2>
          <p className="text-muted small mx-auto" style={{ maxWidth: "450px" }}>
            Tools and technologies I use to build robust, production-ready applications.
          </p>
        </div>

        {/* Compact 3-Column Grid */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {skillGroups.map((group, index) => (
            <div className="col" key={index}>
              <div 
                className="h-100 p-4 rounded-4 bg-white shadow-sm border transition-all"
                style={{ 
                  borderColor: "#fef3c7", 
                  transition: "transform 0.2s ease, box-shadow 0.2s ease" 
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px -5px rgba(217, 119, 6, 0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                }}
              >
                {/* Card Header */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="fs-4">{group.icon}</span>
                  <h3 className="h6 fw-bold text-dark m-0">{group.title}</h3>
                </div>

                {/* Tight Skill Badges */}
                <div className="d-flex flex-wrap gap-1.5">
                  {group.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="badge px-2.5 py-1.5 fw-medium" 
                      style={{ 
                        backgroundColor: "#fffbeb", 
                        color: "#9a3412", 
                        border: "1px solid #fde68a", 
                        fontSize: "0.8rem" 
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; // or export default Skills;