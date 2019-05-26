class Player {

  constructor(id) {
    this.id = id

    this.size = parseInt(process.env.DEFAULT_PLAYER_SIZE)
    this.x = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
    this.y = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1

    this.color = this.getRandomColor()
  }

  getRandomColor() {

    let colors = [
      {r: 218, g: 252, b: 82},
      {r: 231, g: 61, b: 247},
      {r: 235, g: 53, b: 62},
      {r: 42, g: 104, b: 156},
      {r: 117, g: 250, b: 138},
      {r: 234, g: 55, b: 143},
      {r: 234, g: 55, b: 132},
    ]

    const c = colors[Math.floor(Math.random() * colors.length)]

    return c
  }

  status() {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      size: this.size,
      color: this.color
    }
  }

  die() {
    this.size = parseInt(process.env.DEFAULT_PLAYER_SIZE)
    this.x = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
    this.y = Math.floor(Math.random() * process.env.WORLD_SIZE) + 1
  }

  move(x, y) {
    this.x = x
    this.y = y
  }

  eat(size) {
    this.size += size * 0.1
  }
}

module.exports = Player
