function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(120, 121, 546);
  // x, y, wi, hi
  rectMode(CENTER)
  rect(400, 400, 40, 40)

  line(0, 0, 800, 800)

  arc(120, 120, 100, 100, 0, 800)

  ellipse(600, 600, 100, 100)

  torus(50, 60, 700, 700)
  
}
