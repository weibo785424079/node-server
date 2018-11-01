const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/data', function (req, res) {
  res.send('Hello World')
})
app.listen('80', function(){
        console.log('listening on port 80')
})