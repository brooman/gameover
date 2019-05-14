class Player {

  constructor(id) {
    this.id = id

    this.size = process.env.DEFAULT_PLAYER_SIZE
    this.x = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
    this.y = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
  }

  status() {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      size: this.size
    }
  }

  die() {
    this.size = process.env.DEFAULT_PLAYER_SIZE
    this.x = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
    this.y = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
  }

  move(x, y) {
    this.x = x
    this.y = y
  }

  eat(size) {
    this.size += size
  }
}

module.exports = Player