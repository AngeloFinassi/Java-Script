let canva_width = 800;
let canva_height = 600;
let sand_size = 5;

let falling_sand = [];
let stopped_sand = [];

function setup() {
  createCanvas(canva_width, canva_height);
  background(0);
}

function draw() {
  background(0);
  fill(255);

  // Atualiza e desenha os grãos de areia que estão caindo
  for (let i = falling_sand.length - 1; i >= 0; i--) {
    let sand = falling_sand[i];
    sand.y += sand_size;

    // Verifica se a areia atinge o fundo da tela ou outra areia
    if (sand.y >= canva_height - sand_size || isSandBelow(sand)) {
      sand.y -= sand_size; // Move a areia de volta para a posição anterior
      stopped_sand.push({ x: sand.x, y: sand.y });
      falling_sand.splice(i, 1); // Remove a areia de falling_sand
    } else {
      rect(sand.x, sand.y, sand_size, sand_size);
    }
  }

  // Desenha os grãos de areia que pararam
  for (let i = 0; i < stopped_sand.length; i++) {
    let sand = stopped_sand[i];
    rect(sand.x, sand.y, sand_size, sand_size);
  }
}

function mouseClicked() {
  let x_coordinate = int(mouseX / sand_size) * sand_size;
  let y_coordinate = int(mouseY / sand_size) * sand_size;

  falling_sand.push({ x: x_coordinate, y: y_coordinate });
}

// Função para verificar se há areia abaixo da posição atual
function isSandBelow(sand) {
  for (let i = 0; i < stopped_sand.length; i++) {
    let stopped = stopped_sand[i];
    if (stopped.x === sand.x && stopped.y === sand.y + sand_size) {
      return true;
    }
  }
  return false;
}
