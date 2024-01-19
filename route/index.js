const express = require("express");
const router = express.Router();
const apiRoute = require("./api");

router.use("/api/v1", apiRoute);


module.exports = router;