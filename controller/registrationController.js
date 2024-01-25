const emailValidation = require("../helpers/emailValidation");
const bcrypt = require("bcrypt");
const UserList = require("../models/userSchema");
const sentEmail = require("../helpers/sentEmail");
const emailVerificationTemplate = require("../helpers/emailVerificationTemplate");
var jwt = require('jsonwebtoken');

async function registrationController(req, res) {
  const {
    firstName,
    lastName,
    email,
    telephone,
    addressOne,
    addressTwo,
    city,
    postCode,
    division,
    district,
    password,
  } = req.body;

  if (!firstName || !lastName) {
    return res.json({ error: "FirstName and LastName is required" });
  }
  //In case an email is not provided:
  if (!email) {
    return res.json({ error: "Email is required" });
  }
  //In case the provided email is not valid
  if (!emailValidation(email)) {
    return res.json({ error: "Invalid email address" });
  }
  // User authentication (same person can't register again)
  const existingEmail = await UserList.find({ email });
  // console.log(existingEmail, "email")
  if (existingEmail.length > 0) {
    return res.json({ error: "Email is already in used" });
  }
  // Bcrypt hash password
  bcrypt.hash(password, 10, function (err, hash) {
    const users = new UserList({
      firstName,
      lastName,
      email,
      telephone,
      addressOne,
      addressTwo,
      city,
      postCode,
      division,
      district,
      password: hash, //hash password with bcrypt
    });
    users.save();
    var token = jwt.sign({ email }, 'sk');

    sentEmail(email, "EMAIL VERIFICATION", emailVerificationTemplate(token));
  });
  res.json(req.body);
}

module.exports = registrationController;
