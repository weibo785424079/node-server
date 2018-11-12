
const fs = require('fs')
const writeFile = require('util').promisify(fs.writeFile)
module.exports =  function GenerateImg(req,res) {
    const {Canvas,loadImage} = require('canvas')
    let canvas = new Canvas(670,1000)
    let ctx = canvas.getContext('2d');

    // Write "Awesome!"
    ctx.font = '30px PingFangSC'
    ctx.rotate(0.1)
    ctx.fillText('Awesome!', 50, 100)
    
    // Draw line under text
    var text = ctx.measureText('Awesome!')
    ctx.strokeStyle = 'rgba(0,0,0,0.5)'
    ctx.beginPath()
    ctx.lineTo(50, 102)
    ctx.lineTo(50 + text.width, 102)
    ctx.stroke()
    
    // Draw cat with lime helmet
    return loadImage('static/dog.jpg').then((image) => {
        ctx.drawImage(image, 50, 0, 70, 70)
        return writeFile('./temp/pic.png',canvas.toBuffer()).then(res => {
            console.log('已保存')
        }).catch(e => console.log(e))
    })
}