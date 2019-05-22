class Player {

  constructor(id, size, x, y) {
    this.id = id

    this.x = x
    this.y = y

    this.speed = 3
    this.size = size
    
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

    return color(c.r, c.g, c.b)
  }

  grow(size) {
    this.size += size
  }

  updatePosition(x, y) {
    this.x = x
    this.y = y
  }

  show(x, y) {
    fill(this.color)
    circle(x, y, this.size * 2)
  }

  move(worldSize, vw, vh) {
    let newX
    let newY

    if(this.x >= 0 && this.x <= worldSize) {

      if(mouseX > vw / 2) {
        newX = this.x + this.speed
      } else {
        newX = this.x - this.speed
      }

    } else if(this.x < 0) {
      newX = 0
    } else {
      newX = worldSize
    }

    if(this.y >= 0 && this.y <= worldSize) {

     if(mouseY > vh / 2) {
        newY = this.y + this.speed
      } else {
        newY = this.y - this.speed
      }

    } else if(this.y < 0) {
      newY = 0
    } else {
      newY = worldSize
    }

    this.updatePosition(newX, newY)
  }
}

module.exports = Player