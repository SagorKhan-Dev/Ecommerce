const bcrypt = require('bcrypt');

const emailValidation = require("../helpers/emailValidation");
const UserList = require("../models/userSchema");

async function loginController(req,res) {
  const { email, password } = req.body;
  //In case an email is not provided:
  if (!email) {
    return res.json({ error: "Email is required" });
  }
  //In case the provided email is not valid
  if (!emailValidation(email)) {
    return res.json({ error: "Invalid email address" });
  }
  if (!password) {
    return res.json({ error: "Email is required" });
  }
  const existingEmail = await UserList.find({ email });
  // console.log(existingEmail, "email")
  if (existingEmail.length > 0) {
    bcrypt.compare(password, existingEmail[0].password).then(function(result) {
      if(result){
        res.json({success: "Login Successful"})
      }else{
        res.json({error: "Password not match"})
      }
  });
  }
}

module.exports = loginController;
