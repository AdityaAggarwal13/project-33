class Snow{
constructor(x,y){
var options={
    'restitution':0.8,
    'friction':1.0,
    'density':1.0,
    isStatic:false
}
this.width = 50;
this.height = 50;
this.body = Bodies.rectangle(x, y, 50, 50, options);
World.add(world,this.body);
this.image = loadImage("snow4.webp");

}
display(){
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);

pop();
}

}