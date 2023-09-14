const express = require('express')
const cookies = require('cookie-parser')
const app = express()
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT
const DB = process.env.DB


require('./config/mongoose.config')(DB)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookies())
require('./routes/note.routes')(app)
require('./routes/user.routes')(app)
app.listen(PORT,()=>console.log("Engine's ready"))

