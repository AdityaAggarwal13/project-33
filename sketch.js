var bg;
var snow=[];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
bg=loadImage("snow1.jpg");


  
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(bg);
  Engine.update(engine);
 
  if(frameCount%60===0)
  {
    snow.push(new Snow (random(30,750),random(20,250)));
    
  }
  for(var k=0; k<snow.length;k++)
{
  snow[k].display();
}
}