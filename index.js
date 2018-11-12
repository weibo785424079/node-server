const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
const imageRouter = require('./src/router/image')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use('/static',express.static('static'))
app.set('view engine', 'pug')
app.use(function(req,res,next){
  console.log('use what')
  next()
}) 
app.use('/image',imageRouter)

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/data', function (req, res) {
  res.send('hello weibo')
})

app.get('/view', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello dog!' })
})
app.post('/post', function(req,res) {
  debugger
})
app.listen(7100, function(){
        console.log('listening on port 7100')
})