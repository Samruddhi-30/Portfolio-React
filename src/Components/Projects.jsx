import React from "react";
import ProjectDetailed from "./ProjectDetailed";

export default function Projects() {
  const projectList = [
    {
      title: "MentalWell: AI Mental Health Assistant",
      description: "An AI-powered mental health chatbot providing empathetic support with emotion classification, sentiment intensity, and psychological risk-level detection. Ensures complete privacy through local processing and integrated rule-based relief mapping.",
      techStack: "Python, TensorFlow, Scikit-learn, HuggingFace, NLP, Flask",
      link: "https://github.com/sakshi-631/MentalWell-Project"
    },
    {
      title: "Face Recognition Attendance System",
      description: "End-to-end real-time attendance system utilizing face detection, encoding, and live recognition to automate logging with timestamped records in structured formats.",
      techStack: "Python, OpenCV, face_recognition, Scikit-learn",
      link: "https://github.com/Samruddhi-30/Face-recognition-and-attendance-system"
    },
    {
      title: "Full Stack Blog Platform",
      description: "A full-stack blogging platform built on MVT architecture where users can register, manage posts, and interact with a secure RESTful backend, featuring CSRF protection and a custom admin dashboard.",
      techStack: "Django, Python, PostgreSQL, REST API, Bootstrap",
      link: "https://github.com/Samruddhi-30/my_blog_django_site"
    },
    {
      title: "Web Scraper - Product Price Tracker",
      description: "Automated e-commerce price monitoring tool extracting real-time product data with 95%+ accuracy. Stores data in CSV format for historical trend analysis.",
      techStack: "Python, BeautifulSoup, Pandas, CSV"
    }
  ];

  return (
    <div className="container px-4 py-5" id="projects">
      <h2 className="pb-3 border-bottom text-center mb-5" style={{ color: "#2c3e50" }}>
        <strong>PROJECTS</strong>
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
        {projectList.map((proj, index) => (
          <ProjectDetailed 
            key={index}
            title={proj.title}
            description={proj.description}
            techStack={proj.techStack}
            link={proj.link}
          />
        ))}
      </div>
    </div>
  );
}