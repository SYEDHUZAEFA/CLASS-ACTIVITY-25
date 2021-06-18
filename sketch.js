
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var object2;
var object3

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  object=Bodies.rectangle(100,100,50,50);
World.add(world,object);

console.log(object);

object2=Bodies.circle(200,200,100);
World.add(world,object2);

object3=Bodies.circle(600,200,300);
World.add(world,object3);

}
function draw()
{
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
  fill("blue")
  rect(object.position.x,object.position.y,50,50)
  fill("green")
   circle(object2.position.x,object2.position.y,100)

   fill("yellow")
   circle(object3.position.x,object3.position.y,300)
}
