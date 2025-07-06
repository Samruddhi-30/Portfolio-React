import React from "react";

export default function Projects() {
  return (
    <div class="container px-4 py-4" id="icon-grid">
      <h2 class="pb-5 border-bottom">PROJECTS</h2>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
        style={{
          backgroundColor: " #fcd357",
          borderRadius: "15px",
        }}
      >
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlink:href="#bootstrap"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">WeatherScope</h3>
            <p>
              <strong><strong>Description:</strong></strong> A React app that fetches live
              weather data based on city input using an external weather API.
              Displays temperature, condition, and location dynamically.<strong> Tech
              Used:</strong> node js , Express , REST API, JavaScript, CSS.
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlink:href="#cpu-fill"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Blog Post Web</h3>
            <p><strong>Description:</strong> A full-stack blogging platform where users can read, write, and manage blogs with user-friendly UI.
<strong>Tech Used:</strong> ReactJS, Node.js, Express, MongoDB (or JSON file for basic version).</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlink:href="#calendar3"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">PdfMerger</h3>
            <p><strong>Description:</strong> A Node.js backend tool that allows users to upload and merge multiple PDF files into a single file.
<strong>Tech Used:</strong> Node.js, Express, multer, PDF-lib or pdf-merger-js.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlink:href="#home"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">to-do list</h3>
            <p><strong>Description:</strong> A simple React-based to-do application to manage daily tasks with add/delete functionality.
<strong>Tech Used:</strong> ReactJS, useState, HTML, CSS.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlink:href="#speedometer2"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Word Converter</h3>
            <p>
              <strong>Description:</strong> A text utility tool built in React to convert case, remove spaces, and toggle dark/light mode in real time.
<strong>Tech Used:</strong> ReactJS, useState, JavaScript, Bootstrap.


            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlink:href="#toggles2"></use>
          </svg>
          <div>
           <a > <h3 class="fw-bold mb-0 fs-4 text-body-emphasis"  style={{cursor:"pointer"}}
            >Portfolio</h3> </a>
            <p><strong>Description:</strong> Personal portfolio website to showcase skills, projects, and contact information. Fully responsive and interactive.
<strong>Tech Used:</strong> ReactJS, Bootstrap, HTML, CSS.</p> 
          </div>
          
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlink:href="#geo-fill"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Loading...</h3>
            <p>Placehoder</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
            aria-hidden="true"
          >
            <use xlink:href="#tools"></use>
          </svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Loading...</h3>
            <p>Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
