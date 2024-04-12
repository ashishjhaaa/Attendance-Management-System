const express = require("express");
const student = require("../../Schema/Admin_CRUD/students");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allStudents = await student.find();
    console.log("All student data:", allStudents);
    res.status(200).send(allStudents);
  } catch (error) {
    console.error("Error fetching student data:", error);
    res.status(500).send("Error fetching student data");
  }
});
module.exports = router;
