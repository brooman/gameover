class Player {

  constructor(id) {
    this.id = id

    this.size = parseInt(process.env.DEFAULT_FOOD_SIZE)
    this.x = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
    this.y = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
  }

  status() {
    return {
      x: this.x,
      y: this.y,
      size: this.size
    }
  }

  die() {
    this.size = parseInt(process.env.DEFAULT_PLAYER_SIZE)
    this.x = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
    this.y = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
  }
}

module.exports = Player