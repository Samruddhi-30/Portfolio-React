import React from 'react'
import styles from '../Styles/Intro.module.css'
import profileImg from '../assets/samm.jpg'


function Intro(){
    return(
    <div className= {`container ${styles.container}`}> 
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5"> 
      <div className="col-10 col-sm-8 col-lg-6 px-3"> 
        <img src={profileImg}
         alt="self image" className={styles.img} loading="lazy" /> 
      </div> 
      
      <div className="col-lg-6"> 
        <h1 className={`display-5 fw-bold  lh-1 mb-3 ${styles.myClass}`}>Hi, I'm Samruddhi! ✨</h1> 
         <p className={`lead ${styles.lead}`}>
          <strong>I started my IT engineering journey curious about how websites work. Today, I'm building them.
As a final-year student, I've mastered the fundamentals—data structures, OOP, databases, and algorithms. But I didn't stop at theory. I've explored machine learning, AI, UX design, and the complete software development lifecycle.
Now, I'm ready to take the next step: contributing to real projects, solving real problems, and learning from experienced teams.
Let's build something together. I'm actively seeking job opportunities in web development, Machine Learning and IT.
           </strong> 
         </p> 
        {/* <button >Download Resume</button>   */}
        </div> 
        </div>

    </div>
    );
}

export default Intro ;