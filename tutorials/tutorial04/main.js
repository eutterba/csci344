let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
  // sets up canvas
  createCanvas(canvasWidth, canvasHeight);

  // invoke any drawing functions inside of setup.
  // functions should all go between "createCanvas()" and "drawGrid()"
  // draw5Circles();
  // draw5RedSquares();
  // draw5CirclesWhile();
  // draw5CirclesFor();
  // drawNCircles(10);
  // drawNCirclesFlexible(30, 25, 400, 0);
  // drawNCirclesFlexible(4, 100, 100, 200);
  // drawNCirclesFlexible(8, 50, 700, 100);
  // drawNShapesFlexible(30, 30, 335, 0, "square");
  // drawNShapesFlexible(4, 100, 120, 200, "circle");
  // drawNShapesFlexible(8, 50, 725, 25, "square");
  // drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
  // drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
  // drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");
  drawRandomCircle();
  // draws grid
  drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5Circles() {
  noFill();
  // fill('red');
  circle(100, 200, 50); // centerX, centerY, radius
  circle(100, 250, 50);
  circle(100, 300, 50);
  circle(100, 350, 50);
  circle(100, 400, 50);
}

function draw5RedSquares() {
  fill("red");
  square(320, 200, 50); // topLeftX, topLeftY, width
  square(320, 250, 50);
  square(320, 300, 50);
  square(320, 350, 50);
  square(320, 400, 50);
}

function draw5CirclesWhile() {
  noFill();
  let circles = 0;
  let lastCirccleY = 200;
  while (circles < 5) {
    circle(200, lastCirccleY, 50);
    circles++;
    lastCirccleY += 50;
  }
}

function draw5CirclesFor() {
  for (let i = 0; i < 5; i++) {
    let y = 200 + i * 50;
    circle(400, y, 50);
  }
}

function drawNCircles(n) {
  for (let i = 0; i < n; i++) {
    let y = 200 + i * 50;
    circle(500, y, 50);
  }
}

function drawNCirclesFlexible(n, size, x, y) {
  for (let i = 0; i < n; i++) {
    let currentY = y + i * size;
    circle(x, currentY, size);
  }
}

function drawNShapesFlexible(n, size, x, y, shape) {
  for (let i = 0; i < n; i++) {
    let currentY = y + i * size;
    if (shape === "square") {
      square(x, currentY, size);
    } else {
      circle(x, currentY, size);
    }
  }
}

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
  for (let i = 0; i < n; i++) {
    let currentdir;
    if (shape === "square") {
      if (direction === "row") {
        currentdir = x + i * size;
        square(currentdir, y, size);
      } else {
        currentdir = y + i * size;
        square(x, currentdir, size);
      }
    } else {
      if (direction === "row") {
        currentdir = x + i * size;
        circle(currentdir, y, size);
      } else {
        currentdir = y + i * size;
        circle(x, currentdir, size);
      }
    }
  }
}

function drawRandomCircle() {
  let min = 10;
  let max = 1000;
  let n = Math.floor(Math.random() * (max - min + 1)) + min;
  for (let i = 0; i < n; i++) {
    min = 0;
    max = 2000;
    let y = Math.floor(Math.random() * (max - min + 1)) + min;
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    max = 100;
    let size = Math.floor(Math.random() * (max - min + 1)) + min;
    circle(x, y, size);
  }
}
