const express = require("express");
const {
  createProductController,
  secureProductUploadController,
} = require("../../controller/productController");
const router = express.Router();

router.post(
  "/createproduct",
  secureProductUploadController,
  createProductController
);

module.exports = router;
