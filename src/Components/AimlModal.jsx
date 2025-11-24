import React , {useState} from 'react';

export default function AimlModal(props){
    return(
     <div
      className=" modal modal-sheet d-block" //p-4 md-5 not needed but changes styling
      //
style={{  
 position: 'fixed',
 // top: '100px',
 // left: '420px',
 top: '50%',           // Center vertically
 left: '50%',          // Center horizontally
 transform: 'translate(-50%, -50%)',
 zIndex: 1050,
 overflowY : "hidden",
 height: 'auto',
 width: 'auto',
 backgroundColor:"#fff9c4",
 borderRadius:'10px'
}}>       
        <div class="modal-content rounded-4 shadow" style={{backgroundColor:"#fff9c4"}}>
          
          <div class="modal-header border-bottom-0" >
            
            <h3 class="modal-title " style={{ color: "chocolate"}}>AI ML🤖</h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={()=>{
                props.cl(true);
              }}
            ></button>
          </div>
          <div class="modal-body py-0" style={{ color: "chocolate"}}>
            <strong>
            <ul>
              <li>Python</li>
              <li>ETL (Data Extract , Transform , Load)</li>
              
              <li>Natural Language Processing</li>
              <li>Scikit-learn</li>
              <li>Tensorflow</li>
              <li>Hugging Face</li>
            </ul>
           <hr/>
            <p> 🏆 AI ML Intern in work from office mode</p>
            <p> 🏆 Data Analyst Job Simulation by Accenture</p>
            <p> 🏆 Artificial Intelligence Job Simulation by Cognizant</p>
              </strong>
           </div>
        </div>
      </div>
   
    )
}