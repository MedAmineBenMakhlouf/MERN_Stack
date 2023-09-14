const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Note title is required"],
        minlength: [3, "Min length must be greater then 3 characters"]
    },
    content: {
        type: String,
        required: [true, "content is required"],
        minlength: [10, "Min length must be greater then 10 characters"]
    },
    is_important: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

}, { timestamps: true })

module.exports = mongoose.model('Note', NoteSchema)