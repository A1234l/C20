var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(800,200,50,100);
}

function draw() {
  background('lightblue');  
  drawSprites();

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(abs(movingRect.x-fixedRect.x) <= movingRect.width/2 + fixedRect.width/2 && 
  abs(movingRect.y-fixedRect.y) <= movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = 'red';
    fixedRect.shapeColor = 'red';
  }
  else{
    movingRect.shapeColor = 'black';
    fixedRect.shapeColor = 'yellow';
  }


}