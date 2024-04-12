const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Imported Login Routes
const admin_Route = require("./Routes/Login_Time/adminLogin");
const student_Route = require("./Routes/Login_Time/studentLogin");
const teacher_Route = require("./Routes/Login_Time/teacherLogin");

// Imported Admin Student CRUD
const add_student_Route = require("./Routes/Admin_CRUD_Student/addStudent");
const read_student_Route = require("./Routes/Admin_CRUD_Student/readStudent");
const update_student_Route = require("./Routes/Admin_CRUD_Student/updateStudent");
const delete_student_Route = require("./Routes/Admin_CRUD_Student/deleteStudent");

// Imported Admin Teacher CRUD
const add_teacher_Route = require("./Routes/Admin_CRUD_Teacher/addTeacher");
const read_teacher_Route = require("./Routes/Admin_CRUD_Teacher/readTeacher");
const update_teacher_Route = require("./Routes/Admin_CRUD_Teacher/updateTeacher");
const delete_teacher_Route = require("./Routes/Admin_CRUD_Teacher/deleteTeacher");

// Imported Mark Attendance by Teacher
// const mark_attendance_Route = require("./Routes/Teacher_Mark_Attendance/markAttedance");

mongoose.connect("mongodb://localhost:27017/Attendance_Management_System");

const db = mongoose.connection;
db.on("error", () => {
  console.log("Connection Error in Database");
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Login route

app.use("/admin_login", admin_Route);
app.use("/student_login", student_Route);
app.use("/teacher_login", teacher_Route);

// Admin Student CRUD
app.use("/add_student", add_student_Route);
app.use("/read_student", read_student_Route);
app.use("/update_student", update_student_Route);
app.use("/delete_student", delete_student_Route);

// Admin Teacher CRUD

app.use("/add_teacher", add_teacher_Route);
app.use("/read_teacher", read_teacher_Route);
app.use("/update_teacher", update_teacher_Route);
app.use("/delete_teacher", delete_teacher_Route);

// Teacher Mark Attendance
// app.use("/mark_attendance", mark_attendance_Route);

app.listen(5000, () => {
  console.log("Serving on port 5000");
});
