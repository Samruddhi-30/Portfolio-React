import React from "react";
import styles from "../Styles/Experience.module.css";

function Experience() {
  return (
        <div className="container px-2 py-2 my-3" >
      <h2 className="pb-4 border-bottom size-large"><strong>EXPERIENCE</strong></h2>
    <div className={`p-3 mx-3 my-3 text-center ${styles.exp} `}>
      <div className="container py-3">
        <h1>AI-ML Intern</h1>
        <p>
          <strong>InventOnUs</strong>
        </p>
        <p className="col-lg-8 mx-auto lead">
          Interned at a company focused on cybersecurity, software application
          development, and consultancy services. Automated the generation of
          compliance policy documents using machine learning, significantly
          improving efficiency and reducing manual effort. Developed and
          deployed ML models using Python, integrating NLP, TensorFlow, and
          Scikit-learn to process textual policy data. Designed a scalable
          pipeline for data preprocessing, model training, and deployment of
          document automation tools. Utilized SQL and NoSQL (MongoDB) databases
          to extract, clean, and structure large datasets for modeling.
          Collaborated with cross-functional teams to implement and test
          document generation workflows in a production-like environment.
        </p>
        <button class="btn btn-warning px-5 mb-5" type="button">
          Detailed Info
        </button>
      </div>
    </div>
    </div>
  );
}

export default Experience;
