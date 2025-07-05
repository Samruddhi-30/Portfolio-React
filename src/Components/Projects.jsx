import React from 'react'

export default function Projects(){
    return(
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
           
          <div
            className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
            style={{ backgroundColor : "#FFF9C4" }}
          >
             
            <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
               
              <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
                Word Converter
              </h3> 
              <p>javaScript, React</p>
            </div> 
          </div> 
        </div> 
    </div>
    );
}