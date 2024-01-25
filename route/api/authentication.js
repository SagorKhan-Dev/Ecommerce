const express = require("express");
const UserList = require("../../models/userSchema");
const emailValidation = require("../../helpers/emailValidation");
const router = express.Router();
const bcrypt = require("bcrypt");
const registrationController = require("../../controller/registrationController");
const emailVerificationController = require("../../controller/emailVerificationController");
const loginController = require("../../controller/loginController");

router.post("/registration", registrationController);
router.post("/verification", emailVerificationController);
router.post("/login", loginController);

module.exports = router;
