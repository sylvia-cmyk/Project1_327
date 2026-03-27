let greenA;
let redA;
let bittenGA;
let bittenRA;
let blanket;
let daisy;
let sakura;
let sun;

let currentFrame = 1;

let clouds = [];

function preload(){
  greenA = loadImage('img/greenapple.png');
  redA = loadImage('img/redapple.png');
  bittenGA = loadImage('img/gabitten.png');
  bittenRA = loadImage('img/rabitten.png');
  blanket = loadImage('img/blanket.jpg');
  daisy = loadImage('img/daisy.png');
  sakura = loadImage('img/sakura.png');
  sun = loadImage('img/sun.png');
}

function setup() {
  createCanvas(800, 500);
  background(220);
  background("rgb(149, 203, 240)");

  for (let i = 0; i < 8; i++){
    clouds.push({
      x: random(-200, width),
      y: random(100, 500),
      speed: random(0.5, 2)
    });
  }
}

function draw() {
  if(currentFrame === 1){
  strokeWeight(0);

  // RECT FRAME

  rect(100, 100, 600, 320);
  tint(255, 80);
  image(blanket, 120, 120, 560, 280);

  // FLOWERS

  tint(255);
  image(daisy, 40, 40, 120, 120); 
  image(daisy, 660, 380, 70, 70);
  image(daisy, 730, 180, 50, 50);  

  image(sakura, 680, 250, 120, 130); 
  image(sakura, 20, 160, 70, 80);
  image(sakura, 170, 20, 50, 60); 
  
  // INVITE TEXT

  fill("black");
  textFont("Indie Flower");
  textSize(38);
  text("You're invited to a picnic hangout!", 145, 160);
  
  textFont("Reenie Beanie");
  textSize(30);
  text("Saturday, March 21 2026", 285, 190);
  text("@ Dolores Park", 325, 215);

  textFont("Indie Flower");
  textSize(32);
  text("Will I see you there?", 285, 270);

  // USER INTERACTION

  tint(255);
  strokeWeight(2);
  stroke('#EB60CC');

  let hover = mouseX >= 270 && mouseX <= 270 + 90 &&
              mouseY >= 290 && mouseY <= 290 + 100;

  let hover2 = mouseX >= 440 && mouseX <= 440 + 120 &&
              mouseY >= 290 && mouseY <= 290 + 110;

  if (hover){
    image(bittenGA, 215, 290, 200, 120);
  } else {
    image(greenA, 270, 290, 90, 100);
  }

 if (hover2){
    image(bittenRA, 425, 285, 150, 120);
  } else {
    image(redA, 440, 290, 120, 110);
  }

  textFont("Reenie Beanie");
  textSize(30);
  fill("white");
  text("YES", 295, 360);
  text("NO", 488, 360);
  }

  if (currentFrame === 2) {
  background("#3994E5");

  // CLOUDS
  for (let c of clouds) {

  c.x += c.speed;

  if (c.x > width + 100) {
    c.x = -150;
    c.y = random(50, 500);
  }

  noStroke();
  fill(255);
  ellipse(c.x, c.y, 80, 40);
  ellipse(c.x + 40, c.y - 15, 80, 40);
  ellipse(c.x + 80, c.y, 90, 50);
}

  // SUN
  image(sun, 200, 50, 400, 400);

  fill("#FDBC03");
  circle(400, 250, 280);
  fill("#FFCD01");
  circle(400, 250, 250);
  fill("#FFE200");
  circle(400, 250, 230);
  fill("#FFEF00");
  circle(400, 250, 210);

  // EYES

  fill('#FFFFFF');
  circle(340, 250, 70);
  circle(460, 250, 70);

  fill('#000000');
  circle(340, 250, 50);
  circle(460, 250, 50);

  // MOUTH

  fill('#DB3C2D');
  ellipse(400, 320, 100, 40);

  fill('#FFEF00');
  rect(350, 300, 100, 15);

  fill("white");
  textSize(50);
  stroke("#EB60CC");
  text("can't wait to see you!", 220, 50);
}

if (currentFrame === 3){
  background("gray");

  fill("white");
  textSize(50);
  stroke("#EB60CC");
  text("maybe next time!", 250, 50)

  // SUN
  noStroke(0);
  image(sun, 200, 300, 400, 400);

  fill("#FDBC03");
  circle(400, 500, 280);
  fill("#FFCD01");
  circle(400, 500, 250);
  fill("#FFE200");
  circle(400, 500, 230);
  fill("#FFEF00");
  circle(400, 500, 210);

  // EYES

  fill('#000000');
  circle(340, 460, 50);
  circle(460, 460, 50);

  fill('#FFEF00');
  circle(340, 450, 50);
  circle(460, 450, 50);

  // CLOUDS

  for (let c of clouds) {

    c.x += c.speed;

    if (c.x > width + 100) {
      c.x = -150;
      c.y = random(50, 500);
    }

    noStroke();
    fill(255);
    ellipse(c.x, c.y, 80, 40);
    ellipse(c.x + 40, c.y - 15, 80, 40);
    ellipse(c.x + 80, c.y, 90, 50);
    }
  } 
}

function mousePressed(){

  // VARIABLES

  let hover = mouseX >= 270 && mouseX <= 270 + 90 &&
                mouseY >= 290 && mouseY <= 290 + 100;

  let hover2 = mouseX >= 440 && mouseX <= 440 + 120 &&
                mouseY >= 290 && mouseY <= 290 + 110;

  // USER OUTPUT

  if(hover) {
    currentFrame = 2;
  }

  if(hover2){
    currentFrame = 3;
  }
}
