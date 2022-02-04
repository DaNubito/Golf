const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var leftSide;
var rightSide
var radius = 30
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	var ground_options={
		isStatic:true
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(30, 10, 15, ball_options);
	World.add(world,ball);
	Engine.run(engine);
    groundObj = new Ground(400,690,800,10,ground_options);
	leftSide = new Ground(600,660,10,50,ground_options);
	rightSide = new Ground(720,660,10,50,ground_options);
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,radius,radius);
  drawSprites();
  Engine.update(engine);
 
}

function keyPressed() {
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:58,y:-58})
	}
}


