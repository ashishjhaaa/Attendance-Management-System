import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function App() {
  return (
    <div className="centered container">
      <section>
        <h1 className="centered">Admin Dashboard</h1>
      </section>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Students</h5>
              <Link to="/check_student" className="btn btn-primary">
                Go <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Teachers</h5>
              <Link to="/check_teacher" className="btn btn-primary">
                Go <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
