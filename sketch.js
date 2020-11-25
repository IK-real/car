var car,wall;
var speed,weight;
var destruction;

function setup() {
 createCanvas(800,400);

  speed = random(5.5,9);
  weight = random(40,150);

  car = createSprite(100, 200, 80, 30);
  car.shapeColor = 255;
  car.velocityX = speed;

  wall = createSprite(700, 200, 50, 80);
  wall.shapeColor = 50;
  
}
function draw() {
  background(0);  
  
  if(wall.x - car.x <= car.width/2 + wall.width/2){
    car.velocityX = 0;
    destruction =  0.5 * weight * speed * speed/225.9
    if(destruction < 10){
      car.shapeColor = color(0,255,0);
    }
    else if(destruction < 15 && destruction > 10){
      car.shapeColor = color(230,230,0);
    } 
    else if(destruction > 15){
      car.shapeColor = "red";
    }
  }
  drawSprites();

}