const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'this field is required'],
        minlength: [3, 'First Name must be greater then 3 characters']
    },
    company: {
        type: String,
        required: [true, 'this field is required'],
        minlength: [3, 'position must be greater then 3 characters']
    },
    remote:{
        type:Boolean
    },
    status:{
        type :String ,
        default:'Pending'
    }


}, { timestamps: true })


const Job = mongoose.model("Job", jobSchema)
module.exports = Job