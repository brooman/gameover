class World {

  constructor(players, viewport) {
    this.size = process.env.WORLD_SIZE
    this.viewport = viewport
    this.players = players
  }

  updatePlayers() {

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