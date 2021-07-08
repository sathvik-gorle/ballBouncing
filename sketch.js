const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var b1,b2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);


  let ballOptions = {
    restitution: 1
  }
  ball = Bodies.circle(200, 200, 40, ballOptions)
  World.add(world,ball)

  b1 = createImg("up.png")
  b2 = createImg("right.png")
  b1.position(20,30)
  b2.position(220,30)
  b1.size(50,50)
  b2.size(50,50)
  b1.mouseClicked(verticalForce)
  b2.mouseClicked(horizontalForce)

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 30)

}

function verticalForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1})
}
function horizontalForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.1,y:0})
}