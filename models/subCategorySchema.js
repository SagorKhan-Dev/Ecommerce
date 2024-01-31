const mongoose = require("mongoose");
const { Schema } = mongoose;

const SubCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "CategoryList"
    },
    status: {
        type: String,
        default: "waiting", 
        enum: ["waiting", "approved", "rejected"]
    },
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        type: Date
    }
})

module.exports = mongoose.model("SubCategoryList", SubCategorySchema);