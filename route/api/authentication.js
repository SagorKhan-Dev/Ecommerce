const express = require("express");
const UserList = require("../../models/userSchema");
const emailValidation = require("../../helpers/emailValidation");
const router = express.Router();
const bcrypt = require("bcrypt");
const registrationController = require("../../controller/registrationController");

router.post("/registration", registrationController);

module.exports = router;
