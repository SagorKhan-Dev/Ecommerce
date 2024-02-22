const CategoryList = require("../models/categorySchema");
const SubCategoryList = require("../models/subCategorySchema");

// CATEGORY CONTROLLER
async function createCategoryController(req, res) {
  const { name, description } = req.body;

  // similar name error
  const duplicateCategory = await CategoryList.find({ name });
  if (duplicateCategory.length > 0) {
    return res.json({ error: "Category is already existed" });
  }

  const category = new CategoryList({
    name,
    description,
  });
  category.save();
  res.send({ success: "category created successfully done" });
}

//CREATE CATEGORY STATUS CONTROLLER
async function createCategoryStatusController(req, res) {
  const { name, status } = req.body;
  if (status == "rejected" || status == "waiting") {
    const updatedCategoryStatus = await CategoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status: status } },
      { new: true }
    );
    res.json({ success: "category status updated" });
  } else if (status == "approved") {
    const updatedCategoryStatus = await CategoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: true, status: status } },
      { new: true }
    );
    res.json({ success: "category status updated" });
  }
}

// SUB CATEGORY CONTROLLER
async function createSubCategoryController(req, res) {
  const { name, description, category } = req.body;

  // similar name error
  const duplicateSubCategory = await SubCategoryList.find({ name });
  if (duplicateSubCategory.length > 0) {
    return res.json({ error: "SubCategory is already existed" });
  }

  const subcategory = new SubCategoryList({
    name,
    description,
    category,
  });
  await CategoryList.findOneAndUpdate(
    { _id: subcategory.category },
    { $push: { subcategory: subcategory._id } },
    { new: true }
  );
  subcategory.save();
  res.send({ success: "SubCategory created successfully done" });
}

//CREATE SUB CATEGORY STATUS CONTROLLER
async function createSubCategoryStatusController(req, res) {
  const { name, status } = req.body;
  if (status == "rejected" || status == "waiting") {
    const updatedSubCategoryStatus = await SubCategoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status: status } },
      { new: true }
    );
    res.json({ success: "sub category status updated" });
  } else if (status == "approved") {
    const updatedSubCategoryStatus = await SubCategoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: true, status: status } },
      { new: true }
    );
    res.json({ success: "sub category status updated" });
  }
}

// FIND ALL CATEGORY STATUS IN FRONTEND
async function getAllCategoryController(req, res) {
  const category = await CategoryList.find({});
  res.send(category);
}
async function getAllSubCategoryController(req, res) {
  const subcategory = await SubCategoryList.find({});
  res.send(subcategory);
}

module.exports = {
  createCategoryController,
  createSubCategoryController,
  createCategoryStatusController,
  createSubCategoryStatusController,
  getAllCategoryController,
  getAllSubCategoryController,
};
