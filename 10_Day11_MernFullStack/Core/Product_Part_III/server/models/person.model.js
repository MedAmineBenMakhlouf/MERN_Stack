const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'this field is required'],
        minlength: [3, "First Name must be greater then 3 characters"]
    },
    price:{
        type:Number,
        required :[true,"Price is Required"],
    },
    description:{
        type:String,
        required:[true,'this field is required'],
        minlength: [10, "First Name must be greater then 10 characters"]
    }
},{timestamps:true})


const Product = mongoose.model("Product",productSchema)
module.exports = Product