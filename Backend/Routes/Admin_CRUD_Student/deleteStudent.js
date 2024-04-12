const express = require("express");
const student = require("../../Schema/Admin_CRUD/students");
const router = express.Router();

router.delete("/:id", async (req, res) => {
  const studentId = req.params.id;
  console.log(studentId);
  try {
    const deletedStudent = await student.findByIdAndDelete(studentId);
    if (!deletedStudent) {
      return res.status(404).send("Student not found");
    }
    console.log("Student deleted successfully:", deletedStudent);
    res.send("Student deleted successfully");
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).send("Error deleting student");
  }
});

module.exports = router;
