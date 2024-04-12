const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  teacher_id: { type: Number, required: true },
  teacher_name: { type: String, required: true },
  student_id: { type: Number, required: true },
  student_name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["present", "absent"], required: true },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
