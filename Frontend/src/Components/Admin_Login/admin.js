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
          </div>
        </div>
      </section>

      <div className="nav">
        <div className="navItems" id="navItems">
          <div className="home">
            <Link to="/check_student">Go to Students</Link>
          </div>
          <div className="home">
            <Link to="/check_teacher">Go to Teachers</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
