class Particles{
    constructor(x, y, options) {
        var options = {

            isStatic: true
        }

        this.body = Bodies.circle(x,y,this.r,options)
        this.color=this.color(random(0, 225), random(0, 225), random(0, 225))    
        World,add(world, this.body);

}
