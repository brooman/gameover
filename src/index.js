const p5 = require('p5')
const Player = require('./objects/player')

let player

setup = () => {
  createCanvas(800, 800)
  background(0)

  player = new Player(400, 400)
}

draw = () => {
  debug()
  player.show()
}

debug = () => {
  //POS
  textSize(32)
  fill(255)
  text(`x: ${player.x} y: ${player.y}`, 10, 30)
}