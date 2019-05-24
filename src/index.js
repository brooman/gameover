//require('dotenv').config()

const p5 = require('p5')
const World = require('./classes/world')
const Player = require('./classes/player')
const Food = require('./classes/food')
const Cell = require('./classes/cell')

const worldsize = 1000
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
  let newZoom = 20 /player.r
  zoom = lerp(zoom, newZoom, 0.1)
  scale(zoom)
  translate(-player.pos.x, -player.pos.y)

  player.show()
  player.update()

  // player.move(worldsize, viewport, viewport)
  // player.show(viewport / 2, viewport / 2)
  
  world.showPlayers(player.x, player.y)
  world.showFood(player.x, player.y)

  debug()
}

debug = () => {
  //player position
  textSize(32)
  fill(0)
  text(`x: ${player.x} y: ${player.y}`, 10, 30)
}

createWorld = () => {
  let players = []
  let cells = []

  // for(let i = 0; i < 200; i++){
  //   players.push(new Player(random(0, 1000), random(0, 1000)))
  // }

  // for(let i = 0; i < 200; i++){
  //   food.push(new Cell(random(0, 1000), random(0, 1000)))
  // }

  for (let i = 0; i < 100; i++) {
    let x = random(-width, width)
    let y = random(-height, height)
    cells[i] = new Cell(x, y, 12)
    
}

  return new World(players, cells, viewport)
}