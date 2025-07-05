import React from "react";
import styles from "../Styles/Education.module.css"

function Education() {
  return (
    <div
      class="container px-4 py-10"
      id="hanging-icons"
      style={{ marginTop: "40px", paddingTop: "50px" }}
    >
      <h2 class="pb-3 border-bottom">
        <strong>EDUCATION </strong>
      </h2>
      <div class="row g-4 py-4 row-cols-1 row-cols-lg-3">
        <div class={`col d-flex align-items-start ${styles.edu}`}>
          <div>
            <h3 class="fs-2 text-body-emphasis">SSC</h3>
            <p>
              Completed 10th Standard from New Life Centre high school,
              affiliated to Maharashtra Board from Pune, with distinction.
            </p>
            <br></br>
          </div>
        </div>
        <div class={`col d-flex align-items-start ${styles.edu}`}>
          <div>
            <h3 class="fs-2 text-body-emphasis">HSC</h3>
            <p>
              Completed 12th Standard from Sir Parashurambhau College,
              affiliated to Maharashtra Board with Science stream from Pune,
              with distinction.
            </p>
            <br></br>
          </div>
        </div>

        <div class={`col d-flex align-items-start ${styles.edu}`}>
          <div>
            <h3 class="fs-2 text-body-emphasis">
              Bachelor of Engineering - I.T
            </h3>
            <p>
              Pursuing B.E. in Information Technology – consistently maintaining
              a CGPA of 9.1 till final year.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
