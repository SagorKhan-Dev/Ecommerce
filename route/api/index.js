const express = require("express");
const router = express.Router();
const authenticationRoute = require("./authentication")
const categoryRoute = require("./category")

router.use("/authentication", authenticationRoute);
router.use("/category", categoryRoute);

module.exports = router;