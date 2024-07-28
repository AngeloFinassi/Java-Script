function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // variable x range: 0, 800 to range:0, 255
  r = map(mouseX, 0, width, 0, 255)
  b = map(mouseY, 0, height, 0, 255)
  background(r, 0, b)
}
