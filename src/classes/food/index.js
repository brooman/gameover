class Food {

    constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 10
        this.color = this.getRandomColor()
    }

    getRandomColor() {

        let colors = [
            {r: 104, g: 228, b: 251},
            {r: 234, g: 56, b: 169},
            {r: 234, g: 55, b: 143},
            {r: 43, g: 112, b: 246},
            {r: 235, g: 53, b: 71},
            {r: 117, g: 251, b: 213},
            {r: 144, g: 250, b: 78},
            {r: 78, g: 178, b: 249},
            {r: 249, g: 211, b: 73},
            {r: 112, g: 41, b: 245},
            {r: 239, g: 136, b: 53},
            {r: 191, g: 251, b: 81}
        ]

        const c = colors[Math.floor(Math.random() * colors.length)]

        return color(c.r, c.g, c.b)
    }

    show(x, y) {
        fill(this.color)
        circle(x, y, this.radius * 2)
    }


}

module.exports = Food