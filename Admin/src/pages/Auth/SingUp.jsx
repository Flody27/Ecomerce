// import { useState } from "react";
// import Swal from "sweetalert2";


export default function SingUp() {
  const title = "TechShop - Sing up";
  window.document.title = title;

  function nextStep() {
    document.getElementById("step-1").classList.add("d-none");
    document.getElementById("step-2").classList.remove("d-none");
    updateStepIndicator(2);
  }

  function prevStep() {
    document.getElementById("step-1").classList.remove("d-none");
    document.getElementById("step-2").classList.add("d-none");
    updateStepIndicator(1);
  }

  function updateStepIndicator(step) {
    const steps = document.querySelectorAll(".step-item");
    steps.forEach((item, index) => {
      if (index < step) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4">
          <h3 className="card-title text-center">Sign Up</h3>
          <div className="step-indicator mb-4">
            <ul className="list-unstyled d-flex justify-content-between">
              <li className="step-item active">1</li>
              <li className="step-item">2</li>
            </ul>
          </div>
          <form>
            <div id="step-1" className="step">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required=""
                />
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
            <div id="step-2" className="step d-none">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  required=""
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={prevStep}
              >
                Back
              </button>
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
