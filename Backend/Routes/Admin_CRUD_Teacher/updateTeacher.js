const express = require("express");
const teacher = require("../../Schema/Admin_CRUD/teachers");
const router = express.Router();

router.put("/:id", async (req, res) => {
  const teacherId = req.params.id;
  const newData = req.body;
  try {
    const updatedTeacher = await teacher.findByIdAndUpdate(teacherId, newData, {
      new: true,
    });
    if (!updatedTeacher) {
      return res.send("teacher not found");
    }
    console.log("Teacher updated successfully:", updatedTeacher);
    res.send("Teacher updated successfully");
  } catch (error) {
    console.error("Error updating teacher:", error);
    res.status(500).send("Error updating teacher");
  }
});
module.exports = router;
