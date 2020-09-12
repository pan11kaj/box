
var player,player2;
function preload(){
  backimg = loadImage("ring.jpg");
  playerimg = loadImage("plaimg/man1.png");
  playerimg2 = loadImage("plaimg/man2.png");
  playerimg3 = loadImage("plaimg/man3.png");
  playerimg4 = loadImage("plaimg/man4.png");
 
}


function setup() {
  createCanvas(1200,600);
  player = createSprite(200,400,10,10);
  player.addImage(playerimg4);
  player.scale = 0.5;
 
}

function draw() {
  background(backimg); 
  if(keyDown(UP_ARROW)){
    player.addImage(playerimg2);
  }
  else{
    player.addImage(playerimg4);
  }
  if(keyDown(RIGHT_ARROW)){
player.x+=10
  }
  else{
 player.x+=0
  }

  drawSprites();
}