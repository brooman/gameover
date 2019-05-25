const Cell = require('../cell')
class World {

  constructor() {
    this.size = process.env.WORLD_SIZE
    this.players = []
    this.food = []
  }

  update(gamestate) {
    this.players = gamestate.players.map(player => {
        return new Cell(player.id, player.x, player.y, player.size, player.color)
    })

    this.food = gamestate.food.map(food => {
      return new Cell(food.id, food.x, food.y, food.size, food.color)
    })
  }

  showPlayers(id) {
    this.players.map(player => {
      if(player.id !== id) {
        player.show()
      }
    })
  }

  showFood() {
    this.food.map(food => food.show())
  }
}

module.exports = World