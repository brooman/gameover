require('dotenv').config({ path: __dirname + "/../.env" })

const p5 = require('p5')
const socket = require('socket.io-client')(process.env.SOCKET)

const Cell = require('./classes/cell')
const World = require('./classes/world')

let running = false
let world
let player

socket.on('created', (playerState) => {
  startGame(playerState)
})

setup = () => {
  createCanvas(800, 800)
}

draw = () => {
  if (running) {
    background(244, 251, 255)

    translate(width / 2, height / 2)
    translate(-player.pos.x, -player.pos.y)

    player.update()

    world.showFood()
    world.showPlayers(player.id)

    player.show()
  }
}

startGame = (playerState) => {
  world = new World()

  player = new Cell(
    playerState.id,
    playerState.x,
    playerState.y,
    playerState.size,
    playerState.color,
  )

  socket.on('update', (gamestate) => {
    world.update(gamestate)

    socket.emit('move', {
      x: player.pos.x,
      y: player.pos.y,
    })
  })

  socket.on('grow', (size) => {
    player.grow(size)
  })

  socket.on('sync', (status) => {
    player.sync(status)
  })

  running = true
}
