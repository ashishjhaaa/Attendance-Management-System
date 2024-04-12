const express = require("express");
const student = require("../../Schema/Admin_CRUD/students");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Coming");
  const data = req.body;
  console.log(data);
  try {
    const newStudent = new student(data);
    newStudent.save();
    console.log("Student data saved successfully");
    res.send("Student data saved successfully").status(200);
  } catch {
    console.error("Error saving student data:", error);
    res.send("Error saving student data:", error).status(201);
  }
});
module.exports = router;
