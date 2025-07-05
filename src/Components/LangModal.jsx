import React from "react";
import styles from "../Styles/LangModal.module.css";

export default function LangModal(props) {
  return (
    <div
      className="modal modal-sheet d-block p-4 md-5"
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
}}


    >
      
      <div class="modal-dialog" style={{backgroundColor:"#fff9c4"}}>
        
        <div class="modal-content rounded-4 shadow" style={{backgroundColor:"#fff9c4"}}>
          
          <div class="modal-header border-bottom-0" >
            
            <h1 class="modal-title " style={{fontSize: "2rem" , color: "chocolate"}}>Programming Languages 💻</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={()=>{
                props.op(true);
              }}
            ></button>
          </div>
          <div class="modal-body py-0" style={{fontSize: "2rem" , color: "chocolate"}}>
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>Java(Intermediate)</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
            <p>
              

            </p>
           </div>
        </div>
      </div>
    </div>
  );
}
