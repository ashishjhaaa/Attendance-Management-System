const express = require("express");
const markAttendance = require("../../Schema/Mark_Attendance/mark_attendance_schema");
const student_table = require("../../Schema/Admin_CRUD/students");
const teacher_table = require("../../Schema/Admin_CRUD/teachers");

const router = express.Router();

router.post("/", async (req, res) => {
  const { registrationno, uid, date, time, status } = req.body;
  const newAttendance = new markAttendance({
    registrationno,
    uid,
    date,
    time,
    status,
  });
  
  if (!registrationno || !uid || !date || !time || !status) {
    // return res.send({ newAttendance });
    return res.status(422).json({ error: "Please fill all the fields correctly" });
  }
  const student = await student_table.findOne({
    registrationno: registrationno,
  });
  if (!student) {
    return res.status(422).json({ error: "Student not found" });
  }

  const teacher = await teacher_table.findOne({ uid: uid });
  if (!teacher) {
    return res.status(422).json({ error: "Teacher not found" });
  }

  try {
    await newAttendance.save();


    res.send("Attendance Marked Successfully");
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
