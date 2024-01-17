const express = require("express");
const dbConnection = require("./config/dbConnection");
const UserList = require("./models/userSchema");
const app = express()
const port = 3000;
app.use(express.json())
dbConnection();

// Email validation function
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

app.post("/registration", (req, res) => {
  const {firstName, lastName, email, telephone, addressOne, addressTwo, city, postCode, division, district, password} = req.body;

  if(!firstName || !lastName){
    return res.json({error: "FirstName and LastName is required"})
  }
  // If the email is provided
  if(!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  // If the provided email is invalid
  if(!validateEmail(email)){
    return res.json({error: "Invalid email address"})
  }
  const users = new UserList ({
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
    password
  })
  users.save();
  res.json(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
