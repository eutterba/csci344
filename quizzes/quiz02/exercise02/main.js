const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // function invocations goes here:
  drawMonster(100, 100, 150, "#0bc9cd", false);
  drawMonster(300, 200, 75, "#8093f1", true);
  drawMonster(100, 325, 100, "#8093f1", false);
  drawMonster(250, 375, 125, "#7fb285", true);
  drawMonster(550, 200, 250, "#7fb285", false);

  drawGrid(canvasWidth, canvasHeight);
}

// function definition goes here:

function drawMonster(x, y, size, color, isSurprised) {
  //body
  rectMode(CENTER);
  fill(color);
  rect(x, y, size, size);
  const whiteSize = size * 0.3;
  const eyeheight = size / 4 - y;
  const lefteye = x + size / 3;
  const righteye = size / 3 - x;
  const pupilheight = eyeheight - whiteSize / 4;
  const pupilSize = whiteSize * 0.33;
  const mouthPosition = y + size / 6;
  const mouthHeight = size * 0.2;
  const suprisedWidth = mouthHeight * 1.1;
  const mouthWidth = mouthHeight * 3;
  //left eye
  fill("white");
  rect(lefteye, eyeheight, whiteSize, whiteSize);
  //right eye
  rect(righteye, eyeheight, whiteSize, whiteSize);
  //left pupil
  fill("black");
  rect(lefteye, pupilheight, pupilSize, pupilSize);
  //mouth
  if (isSurprised) {
    rect(x, mouthPosition, suprisedWidth, mouthHeight);
  } else {
    rect(x, mouthPosition, mouthWidth, mouthHeight);
  }
}
