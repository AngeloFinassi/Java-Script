let canva_width = 800;
let canva_height = 600;
let sand_size = 5;

let grid = [];
let grid_x = canva_width / sand_size;
let grid_y = canva_height / sand_size;

let falling_sand = [];
let stopped_sand = [];

function setup() {
  createCanvas(canva_width, canva_height);
  background(0);

  // Create a grid
  for (let c = 0; c < grid_x; c++) {
    grid[c] = [];
    for (let i = 0; i < grid_y; i++) {
      grid[c][i] = 0;
    }
  }
}

function draw() {
  background(0);
  fill(255);

  // Atualiza e desenha os retângulos que estão caindo
  for (let i = falling_sand.length - 1; i >= 0; i--) {
    let sand = falling_sand[i];
    sand.y += sand_size;

    //Se a sand passar do máximo, adiciona no array stopede e remove do arr falling
    if (sand.y >= canva_height) {
      stopped_sand.push({ x: sand.x, y: canva_height - sand_size });
      falling_sand.splice(i, 1);
    } else {
      rect(sand.x, sand.y, sand_size, sand_size);
    }
  }

  //Desenha a sand que ultrapassou a tela
  for (let k = 0; k < stopped_sand.length; k++) {
    let stopped = stopped_sand[k];
    rect(stopped.x, stopped.y, sand_size, sand_size);
  }
}

function mouseClicked() {
  let x_coordinate = int(mouseX / sand_size);
  let y_coordinate = int(mouseY / sand_size);

  if (x_coordinate >= 0 && x_coordinate < grid_x && y_coordinate >= 0 && y_coordinate < grid_y) {
    grid[x_coordinate][y_coordinate] = 1;
    falling_sand.push({ x: x_coordinate * sand_size, y: y_coordinate * sand_size });
  }
}

console.log(stopped_sand)
