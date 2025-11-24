import React , {useState} from "react";
import LangModal from "./LangModal"; 
import Pro from "./Pro";
import WebDev from "./WebDev";
import Aiml from "./Aiml";

function Skills() {

  return (
    <div className="container px-3 py-4" id="custom-cards">
      <h2 className="pb-4 border-bottom size-large"> 
        <strong>SKILLS</strong>
      </h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-3 py-4">
       
        <Pro />
        <WebDev />
        <Aiml />

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
            style={{ backgroundColor: "#fcd357" }}
          >
            <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                Databases🗄️
              </h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor: "#fcd357" }}
          >
            <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                Computer Networks🔗
              </h3>
            </div>
          </div>
        </div>
                <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
            style={{ backgroundColor: "#fcd357" }}
          >
            <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                Cloud & DevOps☁️
              </h3>
            </div>
          </div>
        </div>
                <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
            style={{ backgroundColor: "#fcd357" }}
          >
            <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                Gen-AI🧠
              </h3>
            </div>
          </div>
        </div>
                <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
            style={{ backgroundColor: "#fcd357" }}
          >
            <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                Operating Systems💻
              </h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor: "#fcd357" }}
          >
            <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">Github & Version Control🔀</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
