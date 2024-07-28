function setup() {
  createCanvas(800, 800);
  console.log("hello word")
}

function draw() {
  background(120, 121, 546);

  rectMode(CENTER)

  // the important part is the order of we call the functions
  fill(0, 0, 255)
  stroke(255,255,255)
  rect(400, 400, 220, 220)
  
  strokeWeight(5)

  fill(255, 0, 255)
  noFill()
  ellipse(50,50,100,75)
}
