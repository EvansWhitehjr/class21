var fixedRect , movingRect, sprite1, sprite2, sprite3, sprite4


function setup() {
  createCanvas(1200,800)
  fixedRect = createSprite(600,400,80,30)
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30)
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  sprite1 = createSprite(600,450,80,35)
  sprite1.shapeColor = "yellow"
  
  sprite2 = createSprite(500,400,90,40)
  sprite2.shapeColor = "blue"

  sprite3 = createSprite(600,300,30,80)
  sprite3.shapeColor = "pink"

  sprite4 = createSprite(500,300,50,60)
  sprite4.shapeColor = "red"

}


function draw() {
  background(0,0,0)
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, sprite3)){
   movingRect.shapeColor = "white"
   sprite3.shapeColor = "white"
  
 }
 else{
   movingRect.shapeColor = "green"
   fixedRect.shapeColor = "green"
 }
  
  drawSprites();

}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
   return true; 
  }
  else{
   return false;
  }
}