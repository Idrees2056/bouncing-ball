const Engine=Matter.Engine;//namespace
const World=Matter.World//where all the objects are kept
const Bodies=Matter.Bodies//objects

var engine,world;
var ball,ground;

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;


var options={
  isStatic:true
}



ground=Bodies.rectangle(200,390,200,20,options);
World.add(world,ground);
// console.log(object)
// console.log(object.position.x);
// console.log(object.position.y);

var ball_options={
  restitution:1.5
}
ball=Bodies.circle(200,150,20,ball_options);
World.add(world,ball);




}

function draw() {
  background(0);  
  Engine.update(engine)// physics engine prop
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
