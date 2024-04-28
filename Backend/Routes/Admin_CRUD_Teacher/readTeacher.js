const express = require("express");
const teacher = require("../../Schema/Admin_CRUD/teachers");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("Coming in backend");
  try {
    const allteachers = await teacher.find();
    // console.log("All teacher data:", allteachers);
    res.status(200).send(allteachers);
  } catch (error) {
    console.error("Error fetching teacher data:", error);
    res.status(500).send("Error fetching teacher data");
  }
});
// Get teacher by ID
router.get("/:id", async (req, res) => {
  try {
    const data = await teacher.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "teacher not found" });
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching teacher:", err);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
