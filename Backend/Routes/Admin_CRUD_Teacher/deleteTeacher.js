const express = require("express");
const teacher = require("../../Schema/Admin_CRUD/teachers");
const router = express.Router();

router.delete("/:id", async (req, res) => {
  const teacherId = req.params.id;
  console.log(teacherId);
  try {
    const deletedTeacher = await teacher.findByIdAndDelete(teacherId);
    if (!deletedTeacher) {
      return res.status(404).send("teacher not found");
    }
    console.log("Teacher deleted successfully:", deletedTeacher);
    res.send("Teacher deleted successfully");
  } catch (error) {
    console.error("Error deleting teacher:", error);
    res.status(500).send("Error deleting teacher");
  }
});

module.exports = router;
