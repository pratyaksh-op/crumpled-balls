var part1, part2, part3, paper;
var ground, groundSprite;
var value;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(width/2, height-20, width, 40);
	groundSprite.shapeColor = color("#7C4700");

	ground = Bodies.rectangle(width/2, 375, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	part1 = new Bin(690,320,20,100);
	part2 = new Bin(800,360,200,20);
	part3 = new Bin(910,320,20,100);
 
	paper = new Ball(200,350,20);

	Engine.run(engine);  
}


function draw() {
	rectMode(CENTER);
	background(0);

	if(paper.body.position.x > 620 && paper.body.position.y > 320){
		value = 1;
	}
	
	if(value==1){
		fill("white");
		textSize(40);
		textStyle(BOLD);
		text("Success!",510,200);
	}
  
  drawSprites();

  part1.display();
  part2.display();
  part3.display();
	paper.display();

	fill("gray");
	for(var x = 265; x<=330; x+=20){
		rect(790, x, 200, 5);
	}

	fill("#4cbb17")
	textSize(18);
	textStyle(BOLD);
	text("Use Me", 760,357);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}
