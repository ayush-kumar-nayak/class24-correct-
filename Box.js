class Box {
    constructor(x,y,width,height) {
        var options = {
        restitution: 1
        }
        this.body = Bodies.rectangle(x,y,width,height, options)
        this.width=width
        this.height=height
        World.add(world, this.body)
        console.log(this.body.position.x)

    }
    display() {
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(255)
        stroke("green")
        strokeWeight(4)
        rectMode(CENTER)
        rect(0,0, this.width,this.height)
        pop()
    }
}