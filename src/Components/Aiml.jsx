import React, { useState } from 'react'
import AimlModal from './AimlModal';

export default function Aiml(){

    const [modal , rem] = useState(false);
    const modalOperation = ()=>{
        rem(!modal);
    }
    return(
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor: "#fcd357", color: "white" , cursor:"pointer" }} onClick={modalOperation}
          >
            <div className="d-flex flex-column h-80 p-5 pb-2 text-shadow-1">
              <h3 className="pt-4 mt-2 mb-5 display-6 lh-1 fw-bold">Machine Learning🤖</h3>
            </div>
             {/* <button
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
            </button> */}
            {modal && <AimlModal cl={modalOperation}/>}
          </div>
        </div>
    )
}