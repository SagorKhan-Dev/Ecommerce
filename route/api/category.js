const express = require("express");
const {createCategoryController, createSubCategoryController} = require("../../controller/categoryController");
const router = express.Router();

router.post("/createcategory", createCategoryController)
router.post("/createsubcategory", createSubCategoryController)

module.exports = router;
