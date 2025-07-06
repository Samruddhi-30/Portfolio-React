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
        className="card card-cover h-100 overflow-hidden   rounded-4 shadow-lg"
        style={{ backgroundColor: "#fcd357" , cursor:"pointer"}} onClick={modalOperation}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 className="pt-2 mt-2 mb-5 display-6 lh-1 fw-bold">
            Web Development🌐
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
      {showModal && <DevModal oper={modalOperation} />}
    </div>
  );
}
