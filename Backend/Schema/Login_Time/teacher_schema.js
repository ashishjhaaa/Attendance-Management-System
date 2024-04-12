const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var teacher_Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const teacher_login = mongoose.model("teacher_login", teacher_Schema);

module.exports = teacher_login;
