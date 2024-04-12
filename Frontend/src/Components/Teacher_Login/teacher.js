import "./teacher.css";
import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <section className="navBar">
        <div className="nav">
          <div className="navLogo">
            Teacher Dashboard
            <i className="fa fa-car"></i>
          </div>
        </div>
      </section>

      <div className="nav">
        <div className="navItems" id="navItems">
          <div className="home">
            <Link to="/">Mark Attendance</Link>
          </div>
          <div className="home">
            <Link to="/">See Time Tables</Link>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="navItems" id="navItems">
          <div className="home">
            <Link to="/add_teacher">Update Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
