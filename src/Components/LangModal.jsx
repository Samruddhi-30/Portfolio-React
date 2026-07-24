import React from "react";

export default function LangModal(props) {
  return (
    <>
      {/* Dark overlay backdrop - closes modal on click */}
      <div className="modal-backdrop fade show" onClick={() => props.op(true)}></div>
      
      {/* Native Bootstrap Modal implementation */}
      <div className="modal d-block" tabIndex="-1" role="dialog" onClick={() => props.op(true)}>
        {/* Stop propagation so clicking inside the modal doesn't close it */}
        <div className="modal-dialog modal-dialog-centered" role="document" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content border-0 shadow-lg rounded-4" style={{ backgroundColor: "#fffdf5" }}>
            
            <div className="modal-header border-bottom-0 pb-0">
              <h4 className="modal-title fw-bold" style={{ color: "#d35400" }}>Programming Languages 💻</h4>
              <button
                type="button"
                className="btn-close shadow-none"
                aria-label="Close"
                onClick={() => props.op(true)}
              ></button>
            </div>
            
            <div className="modal-body pt-3 pb-4 px-4 text-secondary">
              <ul className="mb-4" style={{ lineHeight: "1.8", color: "#2c3e50" }}>
                <li>Python</li>
                <li>C++</li>
                <li>Java (Intermediate)</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
              <hr style={{ opacity: 0.15 }} />
              <div className="mt-3 text-dark">
                <p className="mb-2">🏆 Python Completion Course Certificate by Infosys</p>
                <p className="mb-2">🏆 C++ Completion Course Certificate by IIT</p>
                <p className="mb-0">🏆 Java Completion Course Certificate by IIT</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}