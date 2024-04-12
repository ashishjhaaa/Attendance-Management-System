import "./admin.css";
import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <section className="navBar">
        <div className="nav">
          <div className="navLogo">
            Admin Dashboard
            <i className="fa fa-car"></i>
          </div>
        </div>
      </section>

      <div className="nav">
        <div className="navItems" id="navItems">
          <div className="home">
            <Link to="/add_student">Add Student</Link>
          </div>
          <div className="home">
            <Link to="/read_student">All Student</Link>
          </div>
          <div className="home">
            <Link to="/update_student">Update Student</Link>
          </div>
          <div className="home">
            <Link to="/delete_student">Delete Student</Link>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="navItems" id="navItems">
          <div className="home">
            <Link to="/add_teacher">Add Teacher</Link>
          </div>
          <div className="home">
            <Link to="/read_teacher">All Teacher</Link>
          </div>
          <div className="home">
            <Link to="/update_teacher">Update Teacher</Link>
          </div>
          <div className="home">
            <Link to="/delete_teacher">Delete Teacher</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
