const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacher_schema = new Schema({
  username: String,
  email: String,
  mobileno: Number,
  password: String,
});
const teacher = mongoose.model("teacher", teacher_schema);
module.exports = teacher;
