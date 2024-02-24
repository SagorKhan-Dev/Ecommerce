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
  telephone: {
    type: String,
    required: true,
  },
  addressOne: {
    type: String,
    required: true,
  },
  addressTwo: String,
  city: String,
  postCode: String,
  division: String,
  district: String,
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "merchant"],
  },
  created: {
    type: Date,
    default: new Date(),
  },
  updated: {
    type: Date,
  },
});

module.exports = mongoose.model("UserList", userSchema);
