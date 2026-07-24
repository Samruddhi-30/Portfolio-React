import React from 'react';

export default function DevModal(props) {
  return (
    <>
      {/* Dark overlay backdrop - closes modal on click */}
      <div className="modal-backdrop fade show" onClick={() => props.oper(true)}></div>
      
      <div className="modal d-block" tabIndex="-1" role="dialog" onClick={() => props.oper(true)}>
        {/* Stop propagation so clicking inside the modal doesn't close it */}
        <div className="modal-dialog modal-dialog-centered" role="document" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content border-0 shadow-lg rounded-4" style={{ backgroundColor: "#fffdf5" }}>
            
            <div className="modal-header border-bottom-0 pb-0">
              <h4 className="modal-title fw-bold" style={{ color: "#d35400" }}>Web Development 🌐</h4>
              <button
                type="button"
                className="btn-close shadow-none"
                aria-label="Close"
                onClick={() => props.oper(true)}
              ></button>
            </div>
            
            <div className="modal-body pt-3 pb-4 px-4 text-secondary">
              <ul className="mb-4" style={{ lineHeight: "1.8", color: "#2c3e50" }}>
                <li>HTML5</li>             
                <li>CSS, Bootstrap, Tailwind CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
              <hr style={{ opacity: 0.15 }} />
              <div className="mt-3 text-dark">
                <p className="mb-0">🏆 Full Stack Web development bootcamp by Udemy</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}