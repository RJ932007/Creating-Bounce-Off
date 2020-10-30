//Global Variables

var rec1,rec2,rec3,rec4,rec5,rec6;

function setup() {

  createCanvas(800,400);

  rec1 = createSprite(400, 200, 50, 50);
  rec1.shapeColor="yellow";

  rec2 = createSprite(500,200,50,50);
  rec2.shapeColor="green";

  rec3 = createSprite(600, 200, 50, 50);
  rec3.shapeColor="cyan";

  rec4 = createSprite(700, 200, 50, 50);
  rec4.shapeColor="red";

  rec5=createSprite(760,200,50,50);
  rec5.shapeColor="brown";
  rec5.velocityY=-4;

  rec6=createSprite(760,50,50,50);
  rec6.shapeColor="white"
  rec6.velocityY=4;

}

function draw() {
  background("black");
  
  rec2.x=mouseX;
  rec2.y=mouseY;

  if(isTouching(rec1,rec2)){

    rec1.shapeColor="blue";
    rec2.shapeColor="white";

  }
  else{

    rec1.shapeColor="yellow";
    rec2.shapeColor="green";

  }

  if(isTouching(rec2,rec3)){

    rec2.shapeColor="blue";
    rec3.shapeColor="white";

  }
  else{

    rec3.shapeColor="yellow";
    rec2.shapeColor="green";

  }

 //Calling Functions
  
  bounceOff(rec5,rec6);

  drawSprites();

}

function isTouching(rec1,rec2){

if(rec1.x-rec2.x<rec1.width/2+rec2.width/2 && 
  rec2.x-rec1.x<rec1.width/2+rec2.width/2 && 
  rec1.y-rec2.y<rec1.height/2+rec2.height/2 &&
  rec2.y-rec1.y<rec1.height/2+rec2.height/2){

    return true;
    

  }

  else return false;


}

function bounceOff(r1,r2){

if(r1.x-r2.x<r1.width/2+r2.width/2 &&
   r2.x-r1.x<r1.width/2+r2.width/2){

    r1.velocityX=r1.velocityX*(-1);
    r2.velocityX=r2.velocityX*(-1);

   }

  if(r1.y - r2.y<r1.height / 2 +r2.height/2 &&
     r2.y - r1.y < r1.height / 2 + r2.height/2){

      r1.velocityY = r1.velocityY * (-1);
      r2.velocityY = r2.velocityY * (-1);

     }
}