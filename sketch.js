var car,wall
var carImage;
var speed,weight
function preload(){

}
function setup() {
  createCanvas(1300,400);

  car = createSprite(50, 210, 50, 30);
  
  
  car.velocityX = 0;  
  
  wall = createSprite(1000, 200, 60, height/2);
   wall.shapeColor="white";
  
   
  speed=random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

}

  function draw() {
  background("black");  

  if(wall.x - car.x < car.width/2 + wall.width/2){

     car.velocityX = 0;
     console.log("distance"+(wall.x-car.x)+"car x "+car.x+"wall x"+wall.x);

     var deformation = 0.5*weight*speed*speed/22500

     if(deformation > 180){
       car.shapeColor = "red";

     }

     if(deformation < 100){
      car.shapeColor = "green";

    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";

    }
      console.log(deformation);
 }

  drawSprites();
}