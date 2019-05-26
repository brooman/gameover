require('dotenv').config({ path: __dirname + "/../.env" })
const path = require('path')

const express = require('express')
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const GameController = require('./classes/GameController')
const Game = new GameController(io)

app.use('/', express.static('dist'))

io.on('connection', (socket) => {
  console.log('Player connected with id: ' + socket.id)
  const player = Game.addPlayer(socket.id)
  socket.emit('created', player.status())

  socket.on('move', (data) => {
    Game.movePlayer(socket.id, data.x, data.y)
  })

  socket.on('disconnect', () => {
    Game.removePlayer(socket.id)
  })
})

setInterval(() => {
  io.emit('update', Game.broadcast())
}, 50)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`App listening on port ${PORT}!`))