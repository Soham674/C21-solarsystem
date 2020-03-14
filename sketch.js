var mercury,mercuryimg;
var venus,venusimg;
var earth,earthimg;
var mars,marsimg;

function preload() {
earthimg = loadImage("solarimage/Earth.jpg");
}

function setup() {
  createCanvas(1200,800);
  earth = createSprite(400, 200, 50, 50);
  earth.addImage(earthimg);
  earth.scale = 0.2;
}

function draw() {
  background(0);  
  drawSprites();
  text(mouseX + ',' + mouseY, 10, 15);
}