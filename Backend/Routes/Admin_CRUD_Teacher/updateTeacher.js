const express = require("express");
const teacher = require("../../Schema/Admin_CRUD/teachers");
const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const updatedteacher = await teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedteacher) {
      return res.status(404).json({ message: "teacher not found" });
    }
    console.log("teacher updated successfully:", updatedteacher);

    res.json(updatedteacher);
  } catch (err) {
    console.error("Error updating teacher:", err);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
