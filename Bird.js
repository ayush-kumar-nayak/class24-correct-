class Bird {
    constructor(x,y) {
        var options = {
        restitution: 1
        }
        this.body = Bodies.rectangle(x,y,50,50, options)
        this.width=50
        this.height=50
        World.add(world, this.body)
        console.log(this.body.position.x)

    }
    display() {
        var pos=this.body.position
        pos.x=mouseX
        pos.y=mouseY
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("red")
        stroke("green")
        strokeWeight(4)
        rectMode(CENTER)
        rect(0,0, this.width,this.height)
        pop()
    }
}