class Ball{
    constructor(x,y,r){
        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0.005,
            density : 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this. y,this.r/2 ,options);
        World.add(world, this.body);
    }

    display(){
        var paper_pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(paper_pos.x, paper_pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill('white');
        ellipse(0,0,this.r,this.r);
        pop();
    }
}