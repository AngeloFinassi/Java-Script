let color_c = 0
let increment = 5

function setup() {
  createCanvas(800, 800);
  background(120, 121, 546);
}

function draw() {
  let x  = mouseX
  let y = mouseY

  color_c += increment
  if(color_c >= 255 || color_c <= 0){
    increment *= -1
  }
  fill(0, 125, color_c)

  circle(x, y, 50)
}

function mousePressed() {
  background(120, 121, 546);
}