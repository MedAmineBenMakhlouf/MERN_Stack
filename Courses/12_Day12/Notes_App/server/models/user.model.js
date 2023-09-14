const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt  = require('bcrypt')
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Min length must be greater then 3 characters"]
    },
    email: {
        type: String,
        required: [true, "content is required"],
        // validate:{
        //     validator:val=> /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
        //     message:"Please enter valid email"
        // }
        validate: [isEmail, "Please enter valid email"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "Password too short"]
    }

}, { timestamps: true })

UserSchema.virtual ('confirmPassword')
.get(()=> this._confirmPassword)
.set(value => this._confirmPassword = value)

UserSchema.pre('validate',function(next)
{
    if(this.password != this.confirmPassword)
    {
        this.invalidate('confirmPassword','Password Must much')
    }
    next()
})

UserSchema.pre('save', async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password,10)
        this.password = hashedPassword
    }
    catch (error) {
        console.log(error)
    }
    next()
})
module.exports = mongoose.model('User', UserSchema)