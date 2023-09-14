const express = require('express')
const app = express()
const cors = require('cors')
require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
require('./routes/person.routes')(app)
app.listen(8001,()=>console.log("Engine's ready"))

