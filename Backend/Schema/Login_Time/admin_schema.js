const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const admin_Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const admin_login = mongoose.model("admin_login", admin_Schema);
module.exports = admin_login;
