let rectX = 50;
let rectY = 50;
let dirX = 5;
let dirY = 4;


function setup() {
  createCanvas(600, 400);
}

function changeColor() {
  fill(random(50,255), random(50,255), random(50,255));
}

function draw() {
  background(200);
  noStroke();
  rect(rectX, rectY, 50, 50);
  
  rectX = rectX + dirX;
  rectY = rectY + dirY;
  
   if(rectX >= width-50){
    dirX = -5;
    changeColor();
  }
 
  if(rectX <= 0){
    dirX = 5;
    changeColor();
  }
  
  if(rectY >= height-50){
    dirY= -4;
    changeColor();
  }
    
  if(rectY <= 0){
    dirY= 4;
    changeColor();
  }
}

