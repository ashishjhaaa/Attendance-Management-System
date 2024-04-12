const express = require("express");
const student = require("../../Schema/Admin_CRUD/students");
const router = express.Router();

router.put("/:id", async (req, res) => {
  const studentId = req.params.id;
  const newData = req.body;
  try {
    const updatedStudent = await student.findByIdAndUpdate(studentId, newData, {
      new: true,
    });
    if (!updatedStudent) {
      return res.send("Student not found");
    }
    console.log("Student updated successfully:", updatedStudent);
    res.send("Student updated successfully");
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).send("Error updating student");
  }
});
module.exports = router;
