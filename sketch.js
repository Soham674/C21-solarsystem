var mercury,mercuryimg;
var venus,venusimg;
var earth,earthimg;
var mars,marsimg;
var jupiter,jupiterimg;
var saturn,saturnimg;

function preload() {
earthimg = loadImage("solarimage/Earth.jpg");
mercuryimg = loadImage("solarimage/Mercury.jpg");
venusimg = loadImage("solarimage/Venus.jpg");
marsimg = loadImage("solarimage/Mars.jpg");
jupiterimg = loadImage("solarimage/Jupiter.jpg");
}

function setup() {
  createCanvas(1200,800);
  earth = createSprite(437, 286, 50, 50);
  earth.addImage(earthimg);
  earth.scale = 0.2;

  mercury = createSprite(77,120,52,52);
  mercury.addImage(mercuryimg);
  mercury.scale = 0.3;

  venus = createSprite(348,96,49,49);
  venus.addImage(venusimg);
  venus.scale = 0.1;

  mars = createSprite(651,291,50,50);
  mars.addImage(marsimg);
  mars.scale = 0.2;

  jupiter = createSprite(855,417,60,60);
  jupiter.addImage(jupiterimg);
  jupiter.scale = 0.1;
}

function draw() {
  background(0);  
  drawSprites();
  text(mouseX + ',' + mouseY, 10, 15);
}