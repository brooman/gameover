const Player = require('./Player')

class GameController {

  constructor(io) {
    this.io = io

    this.players = []
  }

  /**
   * Add a player to the game
   * @param id: String 
   */
  addPlayer(id) {

    const player = new Player(id)

    this.players.push(player)
    return player
  }

  /**
   * Remove a player from the game
   * @param id: String 
   */
  removePlayer(id) {

    const index = this.players.findIndex((player) => {
      return player.id === id
    })

    this.players.splice(index, 1)
  }

  /**
   * Update player position
   * @param id: String 
   */
  movePlayer(id, x, y) {
    const player = this.players.find(player => {
      return player.id === id
    })

    player.move(x, y)
  }

  /**
   * Check if players collide
   */
  checkCollisions() {

    this.players.map(player1 => {
      this.players.map(player2 => {

        const a = player1.x - player2.x;
        const b = player1.y - player2.y;

        const distance = Math.hypot(a, b)

        if(player1.size > distance) {
          if(player1.size > player2.size) {

            player1.eat(player2.size)
            player2.die()

            //Restart player2s game
            this.io.sockets.connected[player2.id].emit('created', player2.status())
          }
        }

      })
    })

  }

  /**
   * Create a JSON string with game data
   */
  broadcast() {

    this.checkCollisions()

    const gamestate = {
      players: this.players.map(player => player.status())
    }

    return JSON.stringify(gamestate)
  }
}

module.exports = GameController