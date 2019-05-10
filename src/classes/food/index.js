class Food {

    constructor(r) {
        this.r = r
        this.xPos = random(0, 1000)
        this.yPos = random(0, 1000)
        this.color = this.getRandomColor()
    }

    getRandomColor() {
       let r = random(0, 255)
       let g = random(0, 255)
       let b = random(0, 255)

       return color(r,g,b)
    }

    showFood() {
        fill(this.color)
        ellipse(this.xPos,this.yPos,this.r,this.r)
    }


}

module.exports = Food