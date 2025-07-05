import React from 'react'
import styles from '../Styles/Navbar.module.css'

function Navbar(){
    return(
        <nav className={ `${styles.navbar} navbar navbar-expand-lg  ` }>
       
  <div className={`container-fluid ${styles.container} `}>
    <a className="navbar-brand" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Projects</a>
        <a className="nav-link" href="#">Skills</a>
        <a className="nav-link" href="https://github.com/Samruddhi-30?tab=repositories">Github</a>

      </div>
    </div>
  </div>

</nav>
    );
}

export default Navbar ;