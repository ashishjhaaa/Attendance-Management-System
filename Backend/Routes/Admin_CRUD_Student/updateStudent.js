const express = require("express");
const student = require("../../Schema/Admin_CRUD/students");
const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    console.log("Student updated successfully:", updatedStudent);

    res.json(updatedStudent);
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
