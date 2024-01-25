const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  postCode: String,
  division: String,
  district: String,
  password: String,
  verified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("UserList", userSchema);