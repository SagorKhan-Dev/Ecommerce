const CategoryList = require("../models/categorySchema");
const SubCategoryList = require("../models/subCategorySchema");

// CATEGORY CONTROLLER
async function createCategoryController(req, res){
    const {name, description,} = req.body;

    // similar name error
    const duplicateCategory = await CategoryList.find({name});
    if(duplicateCategory.length > 0){
        return res.json({error: "Category is already existed"})
    }
    
    const category = new CategoryList({
        name,
        description
    })
    category.save();
    res.send({success: "category created successfully done"})
}


// SUB CATEGORY CONTROLLER
async function createSubCategoryController(req, res){
    const {name, description, category} = req.body;

    // similar name error
    const duplicateSubCategory = await SubCategoryList.find({name});
    if(duplicateSubCategory.length > 0){
        return res.json({error: "SubCategory is already existed"})
    }

    const subcategory = new SubCategoryList({
        name,
        description,
        category
    })
    subcategory.save();
    res.send({success: "SubCategory created successfully done"})

}

module.exports = {createCategoryController, createSubCategoryController};