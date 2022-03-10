require('dotenv').config();

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(express.json({limit: '10mb'}))



module.exports = app;