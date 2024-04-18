const express = require("express");
const student = require("../../Schema/Admin_CRUD/students");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("Coming in backend");
  try {
    const allStudents = await student.find();
    console.log("All student data:", allStudents);
    res.status(200).send(allStudents);
  } catch (error) {
    console.error("Error fetching student data:", error);
    res.status(500).send("Error fetching student data");
  }
});
// Get student by ID
router.get("/:id", async (req, res) => {
  try {
    const data = await student.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching student:", err);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
