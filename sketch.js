
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);

if(keyIsDown(DOWN_ARROW))
{
  background("red");
}
if(keyIsDown(UP_ARROW))
{
  background("YELLOW");
}
  if(keyIsDown(RIGHT_ARROW))
{
  background("DARKBLUE");
}
  
if(keyIsDown(LEFT_ARROW))
{
  background("ORANGE");

drawsprites();



}
}
