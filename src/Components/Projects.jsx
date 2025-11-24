import { Bold } from "lucide-react";
import React from "react";

export default function Projects() {
  return (
    <div className="container px-4 py-4" id="icon-grid">
      <h2 className="pb-5 border-bottom">PROJECTS</h2>
     
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
        style={{
          backgroundColor: " #fcd357",
          borderRadius: "15px",
        }}
      >
        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">WeatherScope</h3>
            <p>
              <strong><strong>Description:</strong></strong> A React app that fetches live
              weather data based on city input using an external weather API.
              Displays temperature, condition, and location dynamically.<strong> Tech
              Used:</strong> node js , Express , REST API, JavaScript, CSS.
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlinkHref="#cpu-fill"></use>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Blog Post Web</h3>
            <p><strong>Description:</strong> A full-stack blogging platform where users can read, write, and manage blogs with user-friendly UI.
<strong>Tech Used:</strong> ReactJS, Node.js, Express, MongoDB (or JSON file for basic version).</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlinkHref="#calendar3"></use>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">PdfMerger</h3>
            <p><strong>Description:</strong> A Node.js backend tool that allows users to upload and merge multiple PDF files into a single file.
<strong>Tech Used:</strong> Node.js, Express, multer, PDF-lib or pdf-merger-js.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlinkHref="#home"></use>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">to-do list</h3>
            <p><strong>Description:</strong> A simple React-based to-do application to manage daily tasks with add/delete functionality.
<strong>Tech Used:</strong> ReactJS, useState, HTML, CSS.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlinkHref="#speedometer2"></use>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Word Converter</h3>
            <p>
              <strong>Description:</strong> A text utility tool built in React to convert case, remove spaces, and toggle dark/light mode in real time.
<strong>Tech Used:</strong> ReactJS, useState, JavaScript, Bootstrap.


            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlinkHref="#toggles2"></use>
          </svg>
          <div>
           <a > <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"  style={{cursor:"pointer"}}
            >Portfolio</h3> </a>
            <p><strong>Description:</strong> Personal portfolio website to showcase skills, projects, and contact information. Fully responsive and interactive.
<strong>Tech Used:</strong> ReactJS, Bootstrap, HTML, CSS.</p> 
          </div>
          
        </div>
        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlinkHref="#geo-fill"></use>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">MentalWell: AI Mental Health Assistant with Data Privacy</h3>
            <p><strong>Description:</strong> An AI-powered mental health chatbot providing empathetic support with emotion detection and sentiment analysis. Ensures complete privacy through local processing, encrypted storage, and federated learning.
<strong>Tech Used:</strong>Python, Machine Learning (NLP, emotion classification), Flask, encryption, transformer models.</p></div>
        </div>
        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlinkHref="#tools"></use>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Web Scraper-Product Price Tracker</h3>
            <p><strong>Description:</strong> Automated e-commerce price monitoring tool that extracts real-time product data (title, price, availability) with 95%+ accuracy. Stores data in CSV format for historical trend analysis and price comparison.
<strong>Tech Used:</strong> Python, BeautifulSoup, Pandas, CSV.</p> </div>
        </div>
      </div>
    </div>
  );
}
