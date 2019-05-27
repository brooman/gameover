class Cell {
  constructor(id, x, y, r, colorObj) {
    this.id = id
    this.pos = createVector(x, y)
    this.r = r
    this.velocity = createVector(0, 0)
    this.color = color(colorObj.r, colorObj.b, colorObj.g)
  }

  show() {
    fill(this.color)
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
  }

  update() {
    let move = createVector(mouseX-width/2, mouseY-height/2)
    move.setMag(3)
    this.velocity.lerp(move, 0.1)
    this.pos.add(this.velocity)
  }

  grow(size) {
    this.r = size
  }

  sync(status) {
    this.id = status.id
    this.pos.set(status.x, status.y)
    this.r = status.size
  }
}

module.exports = Cell
