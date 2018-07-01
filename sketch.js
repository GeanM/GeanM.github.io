function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
//var result = confirm("Tu nombre");
//if (result == true) {
//  alert("Welcome");
//} else {
//  alert("Goo bye");
//}

function draw() {
  background(175);
  cursor(HAND);
  rotateY(mouseX * 0.01);
  rotateX(mouseY * 0.01);
  //fill()
  rect(-100, -100, 100, 100);
  ellipse(50, -50, 100, 100);
  rect(0, 0, 100, 100);
  ellipse(-50, 50, 100, 100);
  rect(-100, 100, 100, 100);
  ellipse(-50, -150, 100, 100);
  rect(100, -100, 100, 100);
  stroke(255);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  box(25);
}

//for(box = 1; x < 5; x++) {
 //System.out,println(x);
//} Lo quiero para poner mas circulos y cuadrado

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
