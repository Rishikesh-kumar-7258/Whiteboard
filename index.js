const main = document.querySelector("main");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var isDrawing = false;

function startDrawing(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function stopDrawing(e) {
  isDrawing = false;
  ctx.closePath();
}

function draw(e) {
  if (isDrawing === true) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
}

function resizeCanvas() {
  ctx.canvas.width = main.clientWidth * 0.9;
  ctx.canvas.height = main.clientHeight * 0.9;
}

resizeCanvas();

window.onload = function () {
  canvas.onmousedown = startDrawing;
  canvas.onmouseup = stopDrawing;
  canvas.onmousemove = draw;
  window.onresize = resizeCanvas;
};
