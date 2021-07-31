var background,background;
var bow,bowImage;
var arrow,arrowImage;
var blue,blueimage;
var green,greenimage;
var pink,pinkimage;
var red,redimage;



function preload(){
  
  arrowImage = loadImage("arrow0.png");
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  //balloons
    blueimage = loadImage("blue_balloon0.png");
    greenimage = loadImage("green_balloon0.png");
    pinkimage = loadImage("pink_balloon0.png");
    redimage = loadImage("red_balloon0.png");

  
 }
function setup() {
  createCanvas(600, 600);
 
  //creating background
  background = createSprite(0,200,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  
  
  // creating bow to shoot arrow
  bow = createSprite(450,200,20,10);
  bow.addImage(bowImage);
  bow.scale = 1.4;
  

  
  }
  



function draw() {
  // moving ground
    background.velocityX = -3
     if (background.x < 0){
      background.x = background.width/2;
     }
for(var i=50;i<550;i=i+90){
  blue= createSprite (50,i,50,50);
  blue.addImage(blueimage);
  blue.scale = 0.1; 
}
  for(var b=100;b<520;b=b+90){
  green= createSprite (120,b,50,50);
  green.addImage(greenimage);
  green.scale = 0.09; 
}
   for(var c=150;c<490;c=c+90){
  red = createSprite (190,c,50,50);
  red .addImage(redimage);
  red.scale = 0.09; 
}
  
   for(var d=200;d<470;d=d+90){
  pink = createSprite (260,d,50,50);
  pink.addImage(pinkimage);
  pink.scale = 1.2;
   
}

    //moving bow
  bow.y = World.mouseY
  
  drawSprites();
}

  

