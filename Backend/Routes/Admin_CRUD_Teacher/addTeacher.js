const express = require("express");
const teacher = require("../../Schema/Admin_CRUD/teachers");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const newTeacher = new teacher(data);
    newTeacher.save();
    console.log("Teacher data saved successfully");
    res.send("Teacher data saved successfully");
  } catch {
    console.error("Error saving teacher data:", error);
    res.send("Error saving teacher data:", error);
  }
});
module.exports = router;