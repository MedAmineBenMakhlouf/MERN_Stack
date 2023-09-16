const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT
const DB = process.env.DB
require('./config/mongoose.config')(DB)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
require('./routes/job.routes')(app)
app.listen(PORT,()=>console.log("Engine's ready"))

