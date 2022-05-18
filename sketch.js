var b;
var enemyImage;
var ballImage;
var scene;
var ball;
var alien1;
var alien2;
var alien3;
var score=0;
var opscore=0;
var speed=5;

function preload(){
  // Add images 
  b = loadImage("b.png");
  alienImage = loadImage("alien.png");
  ballImage = loadImage("ball.png");
  
}



function setup() {
  createCanvas(400, 400);
  // creating sprites
  scene = createSprite(200,200);
  scene.addImage(b)
  ball = createSprite(200,345,200,345)
  ball.addImage(ballImage)
  ball.scale=0.1

  alien1 = createSprite(200,280,10,10)
  alien2 = createSprite(200,170,10,10)
  alien3 = createSprite(200,50,10,10)
  alien1.addImage(alienImage)
  alien2.addImage(alienImage)
  alien3.addImage(alienImage)
// scaleing images
  alien1.scale=0.4
  alien2.scale=0.4
  alien3.scale=0.4


  
   score = 0    
}

function draw() {
 background(0);
 createEdgeSprites()

 alien1.x=alien1.x+speed
 alien2.x=alien2.x-speed
 alien3.x=alien3.x+speed

 if(alien1.x<0 || alien1.x>width)
 {
   speed=speed*-1
 }

// adding velocity

if(keyDown(UP_ARROW)){
  ball.y=ball.y-2
}

if(keyDown(DOWN_ARROW)){
  ball.y=ball.y+2
}

if(keyDown(LEFT_ARROW)){
  ball.x=ball.x-2
}

if(keyDown(RIGHT_ARROW)){
  ball.x=ball.x+2
}
// add score
if(ball.isTouching(alien1)|| ball.isTouching(alien2)|| ball.isTouching(alien3)){
    ball.x=200
  ball.y=350
  opscore = opscore+1
}
if(ball.y<0){
  ball.x=200
  ball.y=345
  score=score+1
}


drawSprites();
textSize(15)
  fill("Yellow")
  text("Humans:"+score,328,30);
  

textSize(15)
  fill("Yellow")
  text("Aliens:"+opscore,5,30);
  

    

}



