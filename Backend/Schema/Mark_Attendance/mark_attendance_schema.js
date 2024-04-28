const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mark_attendance_schema = new Schema({
  registrationno: { type: Number, required: true },
  uid: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, required: true },
});
const mark_attendance = mongoose.model("mark_attendance", mark_attendance_schema);
module.exports = mark_attendance;
