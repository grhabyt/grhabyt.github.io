//global
var xloc1, yloc1;
var xloc2, yloc2;
var xloc3, yloc3;
var firstLetter;
var firstSwear;

function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(width,height);
  var originalString = 'hello';
  firstLetter = originalString.substring(0, 1);
  firstSwear = originalString.substring(0, 4);
  xloc1 = displayWidth/2;
  xloc2 = displayWidth/2;
  xloc3 = displayWidth/2;
  yloc1 = displayHeight/2;
  yloc2 = displayHeight/2;
  yloc3 = displayHeight/2;
}

function draw() {
  ellipse(xloc1, yloc1,50,50);
  text(firstLetter,xloc2, yloc2);
  text(firstSwear, xloc3, yloc3);
}
