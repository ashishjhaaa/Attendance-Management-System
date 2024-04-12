const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var student_Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const student_login = mongoose.model("student_login", student_Schema);

module.exports = student_login;
