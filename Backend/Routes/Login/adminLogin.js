const express = require("express");
const adminSchema = require("../../Schema/Login_Time/admin_schema");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = await adminSchema.findOne({ username, password });
    if (user) {
      console.log("Admin login successful");
      return res.status(200).json({ user, success: true });
    } else {
      console.log("Invalid username or password");
      return res.status(201).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.log("Server error:", error.message);
    return res.status(500).json({ message: "error" });
  }
});
module.exports = router;
