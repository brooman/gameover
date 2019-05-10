//require('dotenv').config()

const p5 = require('p5')
const World = require('./classes/world')
const Player = require('./classes/player')
const Food = require('./classes/food')

const worldsize = 1000
const viewport = 800

let world
let player
let newFood = []

setup = () => {
  createCanvas(viewport, viewport)

  world = createWorld()

  player = new Player(0, 0)

  for (let index = 0; index < 10; index++) {
    newFood.push(new Food(15))
  }
}

draw = () => {
  background(0)

  player.move(worldsize, viewport, viewport)
  player.show(viewport / 2, viewport / 2)
  
  world.showPlayers(player.x, player.y)

  newFood.forEach(food => {
    food.showFood()
  })

  debug()
}

debug = () => {
  //player position
  textSize(32)
  fill(255)
  text(`x: ${player.x} y: ${player.y}`, 10, 30)
}

createWorld = () => {
  let players = []

  for(let i = 0; i < 200; i++){
    players.push(new Player(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)))
  }

  return new World(players, viewport)
}