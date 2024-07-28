let color_c = 0
let increment = 5
let clicks = 1

let x  = 0
let y = 375

function setup() {
  createCanvas(800, 800);
  background(120, 121, 546);
}

function draw() {
  x += 10
  //Alternate the color
  color_c += increment
  if(color_c >= 255 || color_c <= 0){
    increment *= -1
  }
  fill(0, 125, color_c)
  circle(x, y, 50)

  if (clicks >= 1){
    y += 5
  }
  else{
    y -= 5
  }

  if(x >= 800 || y >= 800){
    x = 0
    y = 375
  }
}

function mousePressed() {
  clicks *= -1
}