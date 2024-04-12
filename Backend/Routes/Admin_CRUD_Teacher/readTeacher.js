const express = require("express");
const teacher = require("../../Schema/Admin_CRUD/teachers");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allTeachers = await teacher.find();
    console.log("All teacher data:", allTeachers);
    res.send(allTeachers);
  } catch (error) {
    console.error("Error fetching teacher data:", error);
    res.status(500).send("Error fetching teacher data");
  }
});
module.exports = router;