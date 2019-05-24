class Cell {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.pos = createVector(x, y)
        this.r = r
        this.velocity = createVector(0, 0)
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

    show() {
        fill(this.color)
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }

    update() {
        let move = createVector(mouseX-width/2, mouseY-height/2)
        move.setMag(3)
        this.velocity.lerp(move, 0.1)
        this.pos.add(this.velocity)
    
    }

    eats(other) {
        let d = p5.Vector.dist(this.pos, other.pos)

        if (d < this.r + other.r) {
            let sum = PI * this.r * this.r + PI * other.r * other.r
            this.r = sqrt(sum / PI)
            // this.r += other.r*0.2
            return true
        } else {
            return false
        }
    }
}

module.exports = Cell