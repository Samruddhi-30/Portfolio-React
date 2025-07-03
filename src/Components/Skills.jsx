import React from "react";

function Skills() {
  return (
    <div className="container px-2 py-1" id="custom-cards">
      <h2 className="pb-4 border-bottom size-large"><strong>SKILLS</strong></h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('unsplash-photo-1.jpg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" >
              <h3 className="pt-4 mt-2 mb-5 display-6 lh-1 fw-bold">
                Languages
              </h3>
            </div> 
          </div> 
        </div> 
        <div className="col">
           
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}
          >
             
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
               
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                Web Development
              </h3> 
            </div> 
          </div> 
        </div> 
        <div className="col">
           
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}
          >
             
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
               
              <h3 className="pt-4 mt-2 mb-5 display-6 lh-1 fw-bold">
                AI-ML
              </h3> 
              
            </div> 
          </div> 
        </div> 
      </div> 
    </div>
  );
}

export default Skills;
