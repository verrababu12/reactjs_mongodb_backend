const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
});

const UsersModel = mongoose.model("data1", UserSchema);
module.exports = UsersModel;
