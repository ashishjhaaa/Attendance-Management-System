const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacher_schema = new Schema({
  // login detail
  username: { type: String, required: true },
  password: { type: String, required: true },

  // personal detail
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileno: { type: Number, required: true },
  address: { type: String, required: true },
  dob: { type: String, required: true },

  // academic detail
  uid: { type: Number, required: true, unique: true },
  department: { type: String, required: true },
});
const teacher = mongoose.model("teacher", teacher_schema);
module.exports = teacher;
