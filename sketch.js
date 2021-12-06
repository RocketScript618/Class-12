var trex, trex_running, trex_collided, trex_down, trex2;
var ground, invisibleGround, groundImage;
var tero, tero_fly;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  trex_down = loadAnimation("trex_down1.png","trex_down2.png");

  groundImage = loadImage("ground2.png")
  tero_fly = loadAnimation("tero1.png","tero1.png","tero2.png","tero2.png");
}

function setup() {
createCanvas(600, 200);

//crear sprite de Trex
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.addAnimation("down",trex_down);
trex.scale = 0.5;

tero = createSprite(550,125);
tero.addAnimation("flying", tero_fly);
//crear sprite de suelo
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible=false;
}

function draw() {
background(220);

//hacer que el Trex salte al presionar la barra espaciadora
if (keyDown("space")&&trex.y>=153) {
  trex.velocityY = -10;
}
if(keyDown("down")){
  trex.changeAnimation("down",trex_down);
  trex.scale = 0.35;
}
if(keyWentUp("down")){
  trex.changeAnimation("running",trex_running);
  trex.scale = 0.5;
}
trex.velocityY = trex.velocityY + 0.8
tero.velocityX = -4;

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);
drawSprites();
}
