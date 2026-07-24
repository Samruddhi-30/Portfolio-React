import React from 'react';

export default function AimlModal(props) {
  return (
    <>
      {/* Dark overlay backdrop */}
      <div className="modal-backdrop fade show" onClick={() => props.cl(true)}></div>
      
      {/* Native Bootstrap Modal implementation */}
      <div className="modal d-block" tabIndex="-1" role="dialog" onClick={() => props.cl(true)}>
        <div className="modal-dialog modal-dialog-centered" role="document" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content border-0 shadow-lg rounded-4" style={{ backgroundColor: "#fffdf5" }}>
            
            <div className="modal-header border-bottom-0 pb-0">
              <h4 className="modal-title fw-bold" style={{ color: "#d35400" }}>AI ML 🤖</h4>
              <button
                type="button"
                className="btn-close shadow-none"
                aria-label="Close"
                onClick={() => props.cl(true)}
              ></button>
            </div>
            
            <div className="modal-body pt-3 pb-4 px-4 text-secondary">
              <ul className="mb-4" style={{ lineHeight: "1.8" }}>
                <li>Python</li>
                <li>ETL (Data Extract, Transform, Load)</li>
                <li>Natural Language Processing</li>
                <li>Scikit-learn</li>
                <li>Tensorflow</li>
                <li>Hugging Face</li>
              </ul>
              <hr style={{ opacity: 0.15 }} />
              <div className="mt-3">
                <p className="mb-2">🏆 AI ML Intern in work from office mode</p>
                <p className="mb-2">🏆 Data Analyst Job Simulation by Accenture</p>
                <p className="mb-0">🏆 Artificial Intelligence Job Simulation by Cognizant</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}