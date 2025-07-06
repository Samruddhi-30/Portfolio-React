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
        <h1 className={`display-5 fw-bold  lh-1 mb-3 ${styles.myClass}`}>SAMRUDDHI KADAM</h1> 
         <p className={`lead ${styles.lead}`}>
          <strong>  I’m a motivated final year IT engineering student with a foundation in web development technologies.
             I have learnt essential subjects like Data structures and Algorithm , OOP , Machine Learning in 
             my academics. I also have knowledge about databases , Artificial Intelligence , User Experience 
             development and software development process due to my degree . I am currently seeking an 
             internship to apply my skills, contribute to real-world projects, and further increase my 
             knowledge  in the field of web development and Information Technology.
           </strong> 
         </p> 
            
        </div> 
        </div>

    </div>
    );
}

export default Intro ;