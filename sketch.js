
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1,ground,dustBin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new paper(200,500,40)
ground = new Ground(600,600,1200,20)
dustBin1 = new dustbin(520,590,300,10)


	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background(255);

  paper1.display();
  dustBin1.display();
 ground.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 50,y: -50});
		
	} 
}


