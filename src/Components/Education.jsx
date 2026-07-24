import React from "react";

export default function Education() {
  const eduList = [
    {
      title: "Bachelor of Engineering - I.T",
      inst: "Smt. Kashibai Navale College of Engineering, Pune",
      year: "2022 - 2026",
      score: "CGPA: 9.26 / 10",
      focus: "Web Development, Machine Learning, Data Structures"
    },
    {
      title: "HSC",
      inst: "Sir Parashurambhau College, Pune",
      year: "2022",
      score: "68.67%",
      focus: null
    },
    {
      title: "SSC",
      inst: "New Life Centre High School, Pune",
      year: "2020",
      score: "87.20%",
      focus: null
    }
  ];

  return (
    <section className="container py-5 my-4" id="education">
      <div className="mb-5 text-center">
        <span className="badge rounded-pill px-3 py-1.5 mb-2 fw-semibold text-uppercase" style={{ backgroundColor: "#1e1b4b", color: "#818cf8", border: "1px solid #312e81", fontSize: "0.75rem", letterSpacing: "0.08em" }}>
          Academic Record
        </span>
        <h2 className="fw-bold h3 text-white" style={{ letterSpacing: "-0.02em" }}>Education</h2>
      </div>

      <div className="row g-4">
        {eduList.map((edu, idx) => (
          <div className="col-lg-4" key={idx}>
            <div className="h-100 p-4 rounded-3 d-flex flex-column justify-content-between" style={{ backgroundColor: "#16181F", border: "1px solid #2A2D37" }}>
              <div>
                <h3 className="h5 fw-bold text-white mb-2">{edu.title}</h3>
                <p className="text-secondary small mb-2">{edu.inst}</p>
                <p className="text-muted small mb-3">{edu.year}</p>
                <div className="p-2.5 rounded-2 d-inline-block mb-3" style={{ backgroundColor: "#1D212A", border: "1px solid #2A2D37", color: "#6366F1", fontWeight: "600", fontSize: "0.9rem" }}>
                  {edu.score}
                </div>
              </div>
              {edu.focus && (
                <div className="border-top pt-3 mt-2" style={{ borderColor: "#2A2D37" }}>
                  <span className="text-muted small"><strong>Key Focus:</strong> {edu.focus}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}