var pinkballoon,pinkballoonimage;
var greenballoon,greenballoonimage;
var redballoon,redballoonimage;
var blueballoon,blueballoonimage;
var arrow ,arrowimage
var bow,bowImage
var ground,backgroundimage

function preload(){
 //load your images here 
 
  arrowImage = loadImage("arrow0.png");
  backgroundimage=
  loadImage("background0.png")
  pinkballoonimage=
 loadImage ("pink_balloon0.png")
greenballoonimage=
loadImage ("green_balloon0.png")
redballoonimage=
loadImage("red_balloon0.png")
  blueballoonimage=
 loadImage("blue_balloon0.png")
  bowimage=
   loadImage("bow0.png")
 
  
}

function setup() {
  createCanvas(400, 400);
  
  //ground
 ground=createSprite(0,0,400,400);
  ground.addImage("ground",backgroundimage);
ground.x=ground.width/2;
  ground.scale=2.3;
 
  //bow
bow=createSprite(380,200,50,50);
  bow.addImage("bow",bowimage)
  
  //balloons
  for(var i =60;i<390;i=i+60){
redballoon=createSprite(50,i,1,1)  
redballoon.addImage("redballoon",redballoonimage)
    redballoon.scale=0.1;
  }

 for(var h =110;h<390;h=h+60){
greenballoon=createSprite(100,h,1,1)  
greenballoon.addImage("greenballoon",greenballoonimage)
    greenballoon.scale=0.1;
  
  }


 for(var j =180;j<250;j=j+60){
pinkballoon=createSprite(180,j,1,1)  
pinkballoon.addImage("pinkballoon",pinkballoonimage)
    pinkballoon.scale=1;
  
  }
 for(var k =130;k<350;k=k+60){
blueballoon=createSprite(140,k,1,1)  
blueballoon.addImage("blueballoon",blueballoonimage)
    blueballoon.scale=0.1;
  
  }

}

function draw() {
//background
  background("background20.png");
  ground.veloctiyX= -3;

    if (background.x < 0){
      background.x = background.width/2;
    }

  bow.y=World.mouseY
  
  
  if (keyDown("space")) {
    var temp_arrow = createArrow();
 
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  
  
  
  }
function preload(){
 //load your images here 
 
  backgroundimage=
  loadImage("background0.png")
  pinkballoonimage=
 loadImage ("pink_balloon0.png")
greenballoonimage=
loadImage ("green_balloon0.png")
redballoonimage=
loadImage("red_balloon0.png")
  blueballoonimage=
 loadImage("blue_balloon0.png")
  bowimage=
   loadImage("bow0.png")
 
  
}

function setup() {
  createCanvas(600, 600);
 
  //ground
 ground=createSprite(0,0,400,400);
  ground.addImage("bow",bowimage);

  //bow
bow=createSprite(380,200,50,50);
  bow.addImage("bow",bowimage)
  
  //balloons
   for(var i =60;i<390;i=i+60){
redballoon=createSprite(20,i,1,1)  
redballoon.addImage("redballoon",redballoonimage)
    redballoon.scale=0.1;
  }

 for(var k =60;k<390;k=k+60){
greenballoon=createSprite(20,i,1,1)  
greenballoon.addImage("greenballoon",greenballoonimage)
    greenballoon.scale=0.1;
  
  }


 for(var j =60;j<390;j=j+60){
pinkballoon=createSprite(20,i,1,1)  
pinkballoon.addImage("pinkballoon",pinkballoonimage)
    pinkballoon.scale=0.1;
  
  }
 for(var l =60;l<390;l=l+60){
blueballoon=createSprite(20,i,1,1)  
blueballoon.addImage("blueballoon",blueballoonimage)
    blueballoon.scale=0.1;
  
  }

}

function draw() {

  
  
  //background
  background(220);
 
  
  //movement of bow
  bow.y=mouseY

  
}


  drawSprites()

}

function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.2;
  return arrow;
}




