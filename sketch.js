
var car , wall;
var speed,weight ,thickness;


function setup() {
  createCanvas(1600,400);
 car =  createSprite(100, 200, 50, 50);
 wall =  createSprite(1200, 200, thickness, height/2);
 
 speed = random(223,321);
 weight = random(30,52);

 thickness = random(22,83)
 
car.velocityX = speed;


}

function draw() {
  background(255,255,255);  

if(collided(car,wall))
{

car.velocityX = 30;
var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);


if(damage>10)
{

  wall.shapeColor = ("red");
  car.shapeColor = ("green")
}
  

if(damage<10)
{

wall.shapeColor = color("green");
car.shapeColor = ("red")




}



}

collided();




  drawSprites();

}


function collided(Lwall,Lcar)
{
carRightEdge = car.x = car.width;
wallLeftEdge = wall.x;
if(carRightEdge>=wallLeftEdge)
car .velocityX = 40;
{

return true;
}

return false;


}




