//require('dotenv').config()

const p5 = require('p5')
const Cell = require('./classes/cell')
const Food = require('./classes/food')
const World = require('./classes/world')

// const worldsize = 1000
const viewport = 800

let world
let player
let zoom = 1

setup = () => {
  createCanvas(viewport, viewport)

  world = createWorld()

  player = new Cell(width/2, height/2, 16) 

}

draw = () => {
  background(244,251,255)

  translate(width/2, height/2)
  zoom = lerp(zoom, 20 / player.r, 0.1)
  scale(zoom)
  translate(-player.pos.x, -player.pos.y)

  player.show()
  player.update()
  
  world.showPlayers(player.x, player.y)
  world.showFood(player.x, player.y)

}

createWorld = () => {
  let players = []
  let cells = []

  for (let i = 0; i < 100; i++) {
    let x = random(-width, width)
    let y = random(-height, height)
    cells[i] = new Cell(x, y, 12)
    
}

  return new World(players, cells, viewport)
}