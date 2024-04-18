const express = require("express");
const teacher = require("../../Schema/Admin_CRUD/teachers");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const newteacher = new teacher(data);
    newteacher.save();
    console.log("Teacher data saved successfully");
    res.send("Teacher data saved successfully").status(200);
  } catch {
    console.error("Error saving Teacher data:", error);
    res.send("Error saving Teacher data:", error).status(201);
  }
});
module.exports = router;
