const express = require('express')
const cors = require('cors')
const app = express()




app.use(cors())
require('./server/routes/helo.routes')(app)
app.listen(8000, ()=>console.log("Engine is ready"))