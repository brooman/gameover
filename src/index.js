require('dotenv').config({ path: __dirname + "../" })

const p5 = require('p5')
const socket = require('socket.io-client')(process.env.SOCKET)

const World = require('./classes/world')
const Player = require('./classes/player')

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
  background(0)

  player.move(worldsize, viewport, viewport)
  player.show(viewport / 2, viewport / 2)
  
  world.showPlayers(player.x, player.y)

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