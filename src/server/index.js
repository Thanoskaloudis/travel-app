const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

// Start up an instance of app
const app = express()

// Cors allows the browser and server to communicate without any security interruptions
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

app.listen(8081, function () {
    console.log('Travel app listening on port 8081!')
})

module.exports = { app }