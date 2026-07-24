import React, { useState } from 'react';
import AimlModal from './AimlModal';

export default function Aiml() {
  const [modal, setModal] = useState(false);
  
  const modalOperation = () => {
    setModal(!modal);
  };

  return (
    <div className="col">
      <div
        className="card h-100 rounded-4 shadow-sm border-0"
        style={{ backgroundColor: "#fef3c7", cursor: "pointer", transition: "transform 0.2s" }} 
        onClick={modalOperation}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div className="card-body d-flex align-items-center justify-content-center p-4 text-center">
          <h4 className="fw-bold m-0" style={{ color: "#d35400" }}>
            Machine Learning 🤖
          </h4>
        </div>
      </div>
      {modal && <AimlModal cl={modalOperation}/>}
    </div>
  );
}