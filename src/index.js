//require('dotenv').config()

const p5 = require('p5')
const World = require('./classes/world')
const Player = require('./classes/player')
const Food = require('./classes/food')

const worldsize = 1000
const viewport = 800

let world
let player

setup = () => {
  createCanvas(viewport, viewport)

  world = createWorld()

  player = new Player(0, 0)

}

draw = () => {
  background(244,251,255)

  player.move(worldsize, viewport, viewport)
  player.show(viewport / 2, viewport / 2)
  
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
  let food = []

  for(let i = 0; i < 200; i++){
    players.push(new Player(random(0, 1000), random(0, 1000)))
  }

  for(let i = 0; i < 200; i++){
    food.push(new Food(random(0, 1000), random(0, 1000)))
  }

  return new World(players, food, viewport)
}