var sword,swordImage
//game states
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
 swordImage = loadImage ("sword.png") 
 
}

function draw(){
background(180)
  //creating sword
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7
  sword.x=mouseX
  sword.y=mouseY
  
  
  drawSprites();
}
