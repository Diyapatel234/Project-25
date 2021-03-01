var ground;
var dustbin,dustbin4;
var paper,paper2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){
dustbin = loadImage("dustbin.png")
paper = loadImage("paper.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	
	 

	//Create the Bodies Here.
	
	
	
	
	
	dustbin4 = createSprite(665,585,10,150)
	dustbin4.addImage(dustbin)
	dustbin4.scale=0.45;

	
	
	dustbin1 = new Dustbin(620,600,10,110);
	dustbin2 = new Dustbin(665,655,100,10);
	dustbin3 = new Dustbin(710,600,10,110);
	ground = new Ground(0,670,1600,20);
	
	paper1 = new Paper(50,620,17);
	
	

	
	
}


function draw() {
	
	
	background(225);
  Engine.update(engine);
  paper1.display();
  ground.display();
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
  
  
  
  
  
  
 
  
 
  
  
  

  drawSprites();

  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:49,y:-49});
	}

}



