//global
var birdData;

function setup() {
  createCanvas(400, 400);
  var originalString = 'hello';
  var firstLetter = originalString.substring(0, 1);
  var firstSwear = originalString.substring(0, 4);
  text(firstLetter, 100, 100);
  text(firstSwear, 200, 200)
}

function draw() {

}
