const { timeStamp } = require('console')
const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
    setup:String,
    punchLine:String,
    
},{timestamps:true})

const Joke = mongoose.model("Joke",jokeSchema)
module.exports =Joke