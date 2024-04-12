const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const student_schema = new Schema({
  username: String,
  email: String,
  mobileno: Number,
  password: String,
});
const student = mongoose.model("student", student_schema);
module.exports = student;
