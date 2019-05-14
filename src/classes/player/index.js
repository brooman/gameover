class Player {

  constructor(x, y) {
    this.x = x
    this.y = y

    this.speed = 3
    this.radius = 10
  }

  updatePosition(x, y) {
    this.x = x
    this.y = y
  }

  show(x, y) {
    fill(100, 200, 500)
    circle(x, y, this.radius * 2)
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