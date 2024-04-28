const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
  registrationno: { type: Number, required: true, unique: true },
  department: { type: String, required: true },
  section: { type: String, required: true },
  rollno: { type: Number, required: true },
  semester: { type: Number, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
