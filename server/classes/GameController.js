const Player = require('./Player')
const Food = require('./Food')

class GameController {

  constructor(io) {
    this.io = io

    this.players = []
    this.food = []

    this.createFood()

    this.worldSize = process.env.WORLD_SIZE
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

    //Make sure person is within world limit
    if (player.x >= 0 && player.x <= this.worldSize && player.y >= 0 && player.y <= this.worldSize) {
      player.move(x, y)
    } else {
      //Send event making client sync up with server
      this.io.sockets.connected[player.id].emit('sync', player.status())
    }
  }

  createFood() {
    for(let i = 0; i < process.env.DEFAULT_FOOD_COUNT; i++) {
      this.food.push(new Food(i))
    }
  }

  /**
   * Eat checks
   */
  checkCollisions() {

    this.players.map(player1 => {

      //Check player collisions
      this.players.map(player2 => {
  
        const distance = this.calcDistance(player1.x, player2.x, player1.y, player2.y)

        if(player1.size > distance) {
          if(player1.size > player2.size) {

            player1.eat(player2.size)
            player2.die()

            this.io.sockets.connected[player1.id].emit('grow', player1.size)
            this.io.sockets.connected[player2.id].emit('created', player2.status())
          }
        }

      })

      this.food.map(food => {

        const distance = this.calcDistance(player1.x, food.x, player1.y, food.y)

        if(player1.size > distance) {
          if(player1.size > food.size) {

            player1.eat(food.size)
            food.die()

            this.io.sockets.connected[player1.id].emit('grow', player1.size)
          }
        }

      })
    })
  }

  /**
   * Helper function to calculate distance between points
   */
  calcDistance(x1, x2, y1, y2) {
    return Math.hypot(x1 - x2, y1 - y2)
  }

  /**
   * Create a JSON string with game data
   */
  broadcast() {

    this.checkCollisions()

    const gamestate = {
      players: this.players.map(player => player.status()),
      food: this.food.map(food => food.status())
    }

    return JSON.stringify(gamestate)
  }
}

module.exports = GameController