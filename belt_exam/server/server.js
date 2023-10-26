const express = require('express');
const app = express()
require('dotenv').config();
const DB= process.env.DB
const PORT = process.env.PORT

const cors = require('cors');


app.use(cors());
app.use(express.json());

require('./config/mongoose.config')(DB);

require('./routes/Pirate.routes')(app);
require('./routes/user.routes')(app);

app.listen(PORT, () => console.log("Engine's ready"));