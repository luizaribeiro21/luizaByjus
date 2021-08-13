var rFixo, rMovel;

function setup() {
  createCanvas(1200,800);

  rFixo = createSprite(400, 100, 50, 80);
  rFixo.shapeColor = "gold";
  rFixo.debug =true

  rMovel = createSprite(400,800,80,30);
  rMovel.shapeColor = "green";
  rMovel.debug =true


  objJogavel1 = createSprite(100,100,50,30);
  objJogavel1.shapeColor = "green";
  objJogavel2 = createSprite(200,100,50,30);
  objJogavel2.shapeColor = "green";
  objJogavel3 = createSprite(300,100,50,30);
  objJogavel3.shapeColor = "green";

}
function draw() {
  background(0,0,0);  
  rMovel.x = World.mouseX;
  rMovel.y = World.mouseY;

  if(isTouching(rMovel,rFixo)){
    objJogavel1.shapeColor = "blue";
    objJogavel2.shapeColor = "blue";
  }
  else{
    rMovel.shapeColor = "green";
    objJogavel3.shapeColor = "gold";
    objJogavel2.shapeColor = "red";
  }
  drawSprites();
}



	
function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) 
    {
      return true;

  }
  else {
    return false;
  }
}