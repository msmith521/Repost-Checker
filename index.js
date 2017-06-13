const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname))
// app.use(express.static('index.html'))

// app.post('/', function(req, res) {

// })



app.listen(process.env.PORT || 3000);
console.log('Repost Checker running on :3000');