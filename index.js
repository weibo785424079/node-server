const express = require('express')
const fs = require('fs')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/data', function (req, res) {
  fs.readFile('/weibo/index.txt', function(err,res) {
    res.send('data:',res)    
  })
})
app.listen(7100, function(){
        console.log('listening on port 7100')
})