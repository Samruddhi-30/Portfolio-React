import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Education from './Components/Education'
import Skills from './Components/Skills'
//import ModalTutorial from './Components/Modal'
import Experience from './Components/Experience'
import Projects from './Components/Projects'




function App() {


  return (
   <>
    <Navbar />
    <Intro />
    <Education />
    <Skills />
    <Experience />
    <Projects />

</>
   


      
    
  )
}

export default App
