import React , {useState} from 'react'
import LangModal from "./LangModal"; 

export default function Pro(){

    const [showModal , remModal ] = useState(false);
     const modalOperation = ()=>{
           remModal(!showModal);
            console.log(showModal);
    }
    return(
        
         <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor: "#fcd357",cursor: "pointer"  }} onClick={modalOperation} 
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-3 mt-2 mb-3 display-5 lh-1 fw-bold">
                Programming Languages 💻
              </h3>
            </div>
            <button
              onClick={modalOperation}
              type="button"
              className="btn btn-light"
              style={{
                margin: "10px",
                padding: "10px",
                width: "5pc",
                height: "3pc",
              }}
            >
              Click
            </button>
          </div>
           {showModal && <LangModal op={modalOperation} /> }
        </div>
       
       

    );
}