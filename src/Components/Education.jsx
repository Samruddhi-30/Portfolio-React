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
             
            <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
               
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                SSC
              </h3> 
              <p>Completed 10th Standard from New Life Centre high school,
              affiliated to Maharashtra Board from Pune, with distinction.</p>
            </div> 
          </div> 
        </div> 

        <div className="col">
           
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor : "#FFF9C4" }}
          >
             
            <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
               
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                HSC
              </h3> 
              <p>Completed 12th Standard from Sir Parashurambhau College,
              affiliated to Maharashtra Board with Science stream from Pune,
              with distinction.</p>
            </div> 
          </div> 
        </div> 


        <div className="col">
           
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor : "#FFF9C4" }}
          >
             
            <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
               
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                Bachelor of Engineering - I.T
              </h3> 
              <p>Pursuing B.E. in Information Technology – consistently maintaining
              a CGPA of 9.1 till final year.</p>
            </div> 
          </div> 
        </div> 

      </div>
    </div>
  );
}

export default Education;
