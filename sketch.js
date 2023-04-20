var oceano
var oceano
var barcoImg
var oImg
function preload(){
 barcoImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 oImg=loadImage("sea.png");
 
}

function setup(){
  createCanvas(400,400);
  oceano=createSprite(200,200)
  oceano.addImage(oImg)
  barco=createSprite(200,200)
  barco.addAnimation("barco",barcoImg)
  barco.scale=0.5
  
}

function draw() {
  background("blue");
    drawSprites();

 
}
