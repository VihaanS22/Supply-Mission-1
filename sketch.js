var helicopterIMG, helicopterIMG2, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground
var back , backIMG

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
backIMG = loadImage("back.png")
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	helicopterIMG2=loadImage("helicopter1.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
back=createSprite(400, 200, 10,10);
back.addImage(backIMG)
back.scale = 2



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible  =false

	helicopterSprite=createSprite(10, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.velocityX = 4

	helicopterSprite.scale=0.8
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
 
 





 
	


 
 reset();
 keyPressed();

 
  drawSprites();
  fill("black")
  textSize(20)
text("PRESS THE DOWN ARROW WHEN HELICOPTER IS IN CENTER!!", 100, 50)



  if (helicopterSprite.x<0) {
  fill("white")
  textSize(20)
  text("YOU DID IT SERGEANT!!", 300, 500)

}

function keyPressed() {
 if (keyDown("down")) {
  packageSprite.visible = true;
  Matter.Body.setStatic(packageBody, false);
helicopterSprite.velocityX = -4
fill("white")
text("YOU DID IT SERGEANT!!", 400, 500)

 }





if(ground.topEdge-packageSprite.bottomEdge<(packageSprite.width+ground.width)/5){
	Matter.Body.setStatic(packageBody, true);

}


 }

}

function reset() {

	if(helicopterSprite.x>700){
	
		helicopterSprite.velocityX = -4
		packageBody.position.x = 80
if(helicopterSprite.x=5){

	helicopterSprite.velocityX = 4
	
}
}	

}
