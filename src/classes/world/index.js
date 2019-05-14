const Player = require('../player')
class World {

  constructor(viewport) {
    this.size = process.env.WORLD_SIZE
    this.viewport = viewport
    this.players = []
  }

  update(id, gamestate) {
    this.players = gamestate.players.map(player => {
        return new Player(player.id, player.size, player.x, player.y)
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