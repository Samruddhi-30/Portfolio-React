import React from "react";
import styles from "../Styles/Education.module.css"

function Education() {
  return (
    <div
      className="container px-4 py-10"
      id="hanging-icons"
      style={{ marginTop: "40px", paddingTop: "50px" }}
    >
      <h2 className="pb-3 border-bottom">
        <strong>EDUCATION </strong>
      </h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

        <div className="col">   
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor : "#FFF9C4" }}
          >   
            <div className="d-flex flex-column h-70 p-4 pb-2  text-shadow-1">   
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                Bachelor of Engineering - I.T
              </h3> 
              <div>
                <p>📍Smt. Kashibai Navale College of Engineering, Pune.</p>
                <p>📅2022-2026[Pursuing]</p>
                <p>🎯CGPA: 9.2/10</p>
                <p>Key Focus: Web Development, Machine Learning, Data Structures</p>
              </div>
            </div> 
          </div> 
        </div> 

{/* <div className="col">   
  <div
    className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
    style={{ backgroundColor: "#FFF9C4" }}
  >   
    <div className="d-flex flex-column h-100 p-4 text-shadow-1">   
      <h3 className="mb-3 display-6 lh-1 fw-bold" style={{ color: "#2C2C2C" }}>
        Bachelor of Engineering - I.T
      </h3> 
      
      <div style={{ fontSize: "1rem", lineHeight: "1.8", color: "#3C3C3C" }}>
        <p className="mb-2">
          <span style={{ fontSize: "1.1rem", marginRight: "8px" }}>📍</span>
          <strong>[Your College Name]</strong>
        </p>
        <p className="mb-2">
          <span style={{ fontSize: "1.1rem", marginRight: "8px" }}>📅</span>
          2021 - 2025 (Expected)
        </p>
        <p className="mb-3">
          <span style={{ fontSize: "1.1rem", marginRight: "8px" }}>🎯</span>
          <strong>CGPA: 9.1/10</strong>
        </p>
        <p className="mb-0" style={{ fontSize: "0.95rem", color: "#5C5C5C" }}>
          <strong>Key Focus:</strong> Web Development, Machine Learning, Data Structures
        </p>
      </div>
    </div> 
  </div> 
</div> */}


        <div className="col">   
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor : "#FFF9C4" }}
          >   
            <div className="d-flex flex-column h-70 p-4 pb-2  text-shadow-1">   
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                HSC
              </h3> 
              <div>
                <p>📍Sir Parashurambhau College, Pune.</p>
                <p>📅2020-2022</p>
                <p>Key Focus: Computer Science, Mathematics, English Communication.</p>
              </div>
            </div> 
          </div> 
        </div>


        <div className="col">   
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor : "#FFF9C4" }}
          >   
            <div className="d-flex flex-column h-70 p-4 pb-2  text-shadow-1">   
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                SSC
              </h3> 
              <div>
                <p>📍New Life Centre High School, Pune</p>
                <p>📅2010-2020</p>
                <p>Key Focus: Mathematics, English Communication, Social Sciences.</p>
              </div>
            </div> 
          </div> 
        </div>

      </div>
    </div>
  );
}

export default Education;
