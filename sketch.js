var wall, thickness

var dullet,speed,weight



function setup() {
  createCanvas(1600,400);

   speed=random(223,321)
   weight=random(30,52)
   thickness=random(22,83)

 dullet=createSprite(50, 200, 50, 10);
  dullet.velocityX=speed
  wall=createSprite(1200, 200,thickness, 200)
}

function draw() {
  background(0);
  if (wall.x-dullet.x <dullet.width/2+wall.width/2){

  wall.velocityX=0

  var Damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(Damage>10){
  wall.shapeColor="red"
  }
 if(Damage<10){
  wall.shapeColor="green"
 }
  }
  drawSprites();
}


