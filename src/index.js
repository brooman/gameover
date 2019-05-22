require('dotenv').config({ path: __dirname + "/../.env" })

const p5 = require('p5')
const socket = require('socket.io-client')(process.env.SOCKET)

const World = require('./classes/world')
const Player = require('./classes/player')
const Food = require('./classes/food')

socket.on('created', (createdPlayer) => {

  const worldsize = process.env.WORLD_SIZE
  const viewport = 800

  let world
  let player
  
  setup = () => {

    createCanvas(viewport, viewport)

    world = new World(viewport)
    player = new Player(createdPlayer.id, createdPlayer.size, createdPlayer.x, createdPlayer.y)

    socket.on('update', (gamestate) => {
      world.update(JSON.parse(gamestate))

      socket.emit('move', {
        x: player.x,
        y: player.y
      })
    })

    socket.on('grow', (size) => {
      player.grow(size)
    })
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
})
