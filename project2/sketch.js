//global
var xloc1, yloc1;
var xloc2, yloc2;
var xloc3, yloc3;
var firstLetter;
var firstSwear;

function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(400,400);
  var originalString = 'hello';
  firstLetter = originalString.substring(0, 1);
  firstSwear = originalString.substring(0, 4);
  xloc1 = width/2;
  xloc2 = width/2;
  xloc3 = width/2;
  yloc1 = height/2;
  yloc2 = height/2;
  yloc3 = height/2;
}

function draw() {
  background(255);
  fill(255,255,0);
  ellipse(xloc1, yloc1,50,50);
  text(firstLetter,xloc2, yloc2);
  text(firstSwear, xloc3, yloc3);
  xloc1 += random(-3,3);
  xloc2 += random(-3,3);
  xloc3 += random(-3,3);
  yloc1 += random(-3,3);
  yloc2 += random(-3,3);
  yloc3 += random(-3,3);
}
