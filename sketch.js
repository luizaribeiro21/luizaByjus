var rFixo, rMovel;

function setup() {
  createCanvas(1200,800);

  rFixo = createSprite(600, 400, 50, 80);
  rFixo.shapeColor = "gold";
  rFixo.velocityX = 5;
  rFixo.debug = true;

  rMovel = createSprite(800,400,80,30);
  rMovel.shapeColor = "green";
  rMovel.velocityX = -5;
  rMovel.debug = true; 


  objJogavel1 = createSprite(100,100,50,30);
  objJogavel1.shapeColor = "green";
  objJogavel2 = createSprite(200,100,50,30);
  objJogavel2.shapeColor = "green";
  objJogavel3 = createSprite(300,100,50,30);
  objJogavel3.shapeColor = "green";

}
function draw() {
  background(0,0,0);  
  //rMovel.x = World.mouseX;
  //rMovel.y = World.mouseY;

  //if(isTouching(rMovel,rFixo)){
    //objJogavel1.shapeColor = "blue";
    //objJogavel2.shapeColor = "blue";
  //}
  //else{
    //rMovel.shapeColor = "green";
    //objJogavel3.shapeColor = "gold";
   // objJogavel2.shapeColor = "red";
  //}
  bounceOff(rMovel,rFixo); 
  drawSprites();
}



	
