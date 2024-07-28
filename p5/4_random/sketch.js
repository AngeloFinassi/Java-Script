let x, y, r, g, b

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw() {
  x = random(width)
  y = random(height)
  r = random(255)
  g = 0
  b = random(255)
  
  noStroke()
  fill(r, g, b)
  circle(x, y, 30)
}
