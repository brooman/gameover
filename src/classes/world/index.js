class World {

  constructor(players, cell, viewport) {
    this.size = process.env.WORLD_SIZE
    this.viewport = viewport
    this.players = players
    this.cell = cell
  }

  updatePlayers() {

  }

  showcell(x, y) {
    this.cell.map(cell => {
      if(dist(cell.x, cell.y, x, y) < this.viewport *2) {
        const rx = this.viewport + cell.x - x
        const ry = this.viewport + cell.y - y
        cell.show(rx, ry)
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