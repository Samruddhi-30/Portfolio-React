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
import MyFooter from './Components/MyFooter'
import AllProjects from './Components/AllProjects'


function App() {
  return (
   <>
    <Navbar />
    <Intro />
    <Education />
    <Skills />
    <Experience />
    {/* <Projects /> */}
    <AllProjects />
    <MyFooter />

</>   
  )
}

export default App
