import React, { useState } from "react";
import DevModal from "./DevModal";

export default function WebDev() {
  const [showModal, remModal] = useState(false);
  
  const modalOperation = () => {
    remModal(!showModal);
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
            Web Development 🌐
          </h4>
        </div>
      </div>
      {showModal && <DevModal oper={modalOperation} />}
    </div>
  );
}