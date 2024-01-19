const express = require("express");
const router = express.Router();
const authenticationRoute = require("./authentication")

router.use("/authentication", authenticationRoute);

module.exports = router;