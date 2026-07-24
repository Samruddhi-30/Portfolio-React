import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/MyFooter";
import "./index.css";

export default function App() {
  return (
    <div style={{ backgroundColor: "#0B0D12", color: "#B8BCC8", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}