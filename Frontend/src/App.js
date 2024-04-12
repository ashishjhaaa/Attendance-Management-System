import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Components/Login_Pages/login_page";

import Admin_Dashboard from "./Components/Admin_Login/admin";
import Student_Dashboard from "./Components/Student_Login/student";
import Teacher_Dashboard from "./Components/Teacher_Login/teacher";

import Error from "./Components/Error_Handle/error";

import Add_Student from "./Components/Admin_Login/Student_Update/add_students";
import Read_Student from "./Components/Admin_Login/Student_Update/read_students";
import Update_Student from "./Components/Admin_Login/Student_Update/update_students";
import Delete_Student from "./Components/Admin_Login/Student_Update/delete_students";

import Add_Teacher from "./Components/Admin_Login/Teacher_Update/add_teachers";
import Read_Teacher from "./Components/Admin_Login/Teacher_Update/read_teachers";
import Update_Teacher from "./Components/Admin_Login/Teacher_Update/update_teachers";
import Delete_Teacher from "./Components/Admin_Login/Teacher_Update/delete_teachers";

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
        <Route path="/add_student" element={<Add_Student />} />
        <Route path="/read_student" element={<Read_Student />} />
        <Route path="/update_student" element={<Update_Student />} />
        <Route path="/delete_student" element={<Delete_Student />} />
        // Admin Teacher CRUD
        <Route path="/add_teacher" element={<Add_Teacher />} />
        <Route path="/read_teacher" element={<Read_Teacher />} />
        <Route path="/update_teacher" element={<Update_Teacher />} />
        <Route path="/delete_teacher" element={<Delete_Teacher />} />
        // Error
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
