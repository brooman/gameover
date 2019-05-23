class World {

  constructor(players, food, viewport) {
    this.size = process.env.WORLD_SIZE
    this.viewport = viewport
    this.players = players
    this.food = food
  }

  updatePlayers() {

  }

  showFood(x, y) {
    this.food.map(food => {
      if(dist(food.x, food.y, x, y) < this.viewport *2) {
        const rx = this.viewport + food.x - x
        const ry = this.viewport + food.y - y
        food.show(rx, ry)
      }
    })
  }

  showPlayers(x, y) {

    this.players.map(player => {
      if(dist(player.x, player.y, x, y) < this.viewport * 2) {

        const rx = this.viewport + player.x - x
        const ry = this.viewport + player.y - y
        player.show(rx, ry)
      }
    })

  }
}

module.exports = World