
function setup() {
  createCanvas(600,600);
  
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW))
{
background("red");
}
if(keyIsDown(LEFT_ARROW))
{
background("green");
}
if(keyIsDown(DOWN_ARROW))
{
background("blue");
}
if(keyIsDown(UP_ARROW))
{
background("yellow");
}
drawSprites();
}




