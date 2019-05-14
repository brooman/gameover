class Food {

    constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 10
        this.color = this.getRandomColor()
    }

    getRandomColor() {
       let r = random(0, 255)
       let g = random(0, 255)
       let b = random(0, 255)

       return color(r,g,b)
    }

    show(x, y) {
        fill(this.color)
        circle(x, y, this.radius * 2)
    }


}

module.exports = Food