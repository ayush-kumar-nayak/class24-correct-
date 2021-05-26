class Ground {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(width/2, 390, width, 20, options)
        World.add(world, this.body)
        console.log(this.body.position.x)

    }
    display() {
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, width, 20)
    }
}