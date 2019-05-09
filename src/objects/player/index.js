class Player {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.radius = 10;
  }

  update() {

  }

  show () {
    fill(255)
    circle(this.x, this.y, this.radius * 2);
  }
}

module.exports = Player