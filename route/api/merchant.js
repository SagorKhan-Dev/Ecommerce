const express = require("express");
const becomeMerchantController = require("../../controller/merchantController");
const router = express.Router();


router.post("/becomemerchant", becomeMerchantController)

module.exports = router;
