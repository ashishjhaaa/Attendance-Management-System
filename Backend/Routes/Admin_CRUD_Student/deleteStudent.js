const express = require("express");
const student = require("../../Schema/Admin_CRUD/students");
const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    console.error("Error deleting student:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
