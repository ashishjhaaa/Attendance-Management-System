import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Components/Login_Pages/login_page";

import Admin_Dashboard from "./Components/Admin_Login/admin";
import Student_Dashboard from "./Components/Student_Login/student";
import Teacher_Dashboard from "./Components/Teacher_Login/teacher";

import Error from "./Components/Error_Handle/error";

import Check_Student from "./Components/Admin_Login/Students_Route/student";
import Check_Teacher from "./Components/Admin_Login/Teachers_Route/teacher";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        // Login Handles
        <Route path="/admin_dashboard" element={<Admin_Dashboard />} />
        <Route path="/student_dashboard" element={<Student_Dashboard />} />
        <Route path="/teacher_dashboard" element={<Teacher_Dashboard />} />
        // Admin Student CRUD
        <Route path="/check_student" element={<Check_Student />} />
        // Admin Teacher CRUD
        <Route path="/check_teacher" element={<Check_Teacher />} />
        //Error
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
