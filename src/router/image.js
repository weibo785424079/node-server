const express = require('express')
const GenerateImg = require('../handler/canvas')
const router = express.Router()

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  // define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
})
  // define the about route
router.get('/:id',async function (req, res) {
    await GenerateImg()
    console.log('呵呵')
    res.send('About birds')
})
module.exports = router