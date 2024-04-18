const express = require("express");
const teacher = require("../../Schema/Admin_CRUD/teachers");
const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    const deletedteacher = await teacher.findByIdAndDelete(req.params.id);
    if (!deletedteacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json({ message: "Teacher deleted successfully" });
  } catch (err) {
    console.error("Error deleting Teacher:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
