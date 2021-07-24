var hero,heroImage;
var bg,bg1;
var aliens,aliens1;
var bullte1,bullet;


function preload(){
  heroImage= loadImage("./images/swayam.png");
 // gun1= loadImage("gun.png");
  //badboy1= loadImage("badboy.png");
  //bullate1= loadImage("bullet.png");
bg1= loadImage("./images/bg3.jpg");
aliens1= loadImage("./images/aliens.png");
bullte1= loadImage("./images/bullet.png");
}

function setup() {
  createCanvas(800,400);
  

  bg = createSprite(400,200,800,400);
  bg.addImage(bg1);
  bg.scale = 0.5;

 bullet = createSprite(200,230);
 bullet.addImage(bullte1);
 bullet.scale = 0.05;

  hero = createSprite(80,270);
  hero.addImage(heroImage);
  hero.scale = 0.9;

  aliens = createSprite(730,270);
  aliens.addImage(aliens1);
  aliens.scale = 0.9;

 
}

function draw() {
  background("skyblue");  
  drawSprites();
}