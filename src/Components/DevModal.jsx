import React from 'react'

export default function DevModal(props){
    return(
            <div
      className="modal modal-sheet d-block p-3 md-4"
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
            
            <h3 class="modal-title " style={{ color: "chocolate"}}>Web Development🌐</h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={()=>{
                props.oper(true);
              }}
            ></button>
          </div>
          <div class="modal-body py-0" style={{ color: "chocolate"}}>
            <strong>
            <ul>
              <li>HTML5</li>             
              <li>CSS , Bootstrap , Tailwind CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
           <hr/>
            <p> 🏆 Full Stack Web development bootcamp by Udemy</p>

              </strong>
           </div>
        </div>
      </div>
    </div>
    )
}