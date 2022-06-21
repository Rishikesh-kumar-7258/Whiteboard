const main = document.querySelector("main");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const shapeSelector = document.getElementById("shape");
const strokeWidthSelector = document.getElementById("strokeWidth");
const colorSelector = document.getElementById("color");
const closeLine = document.getElementById("closeLine");
const navbar = document.querySelector("nav ul");

var isDrawing = false;
var shape = 0;
var thickness = 1;
var color = "#000000";
var isNavbarVisible = true;

function startDrawing(e) {
  if (shape === 0) {
    isDrawing = true;
  }
  ctx.beginPath();
  ctx.lineWidth = thickness;
  ctx.strokeStyle = color;
  ctx.moveTo(e.offsetX, e.offsetY);
}

function stopDrawing(e) {
  isDrawing = false;
  if (shape === 2) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
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

function changeShape(e) {
  shape = parseInt(e.target.value);
}

function changeThickness(e) {
  thickness = parseInt(e.target.value);
}

function changeColor(e) {
  color = e.target.value;
}

function toggleNavbar() {
  isNavbarVisible = !isNavbarVisible;

  if (isNavbarVisible) {
    navbar.classList.remove("hide");
    closeLine.innerHTML = "&triangleleft;";
  } else {
    navbar.classList.add("hide");
    closeLine.innerHTML = "&triangleright;";
  }

  resizeCanvas();
}

window.onload = function () {
  canvas.onmousedown = startDrawing;
  canvas.onmousemove = draw;
  canvas.onmouseup = stopDrawing;
  window.onresize = resizeCanvas;

  shapeSelector.onchange = changeShape;
  strokeWidthSelector.onchange = changeThickness;
  colorSelector.onchange = changeColor;
  closeLine.onclick = toggleNavbar;
};
resizeCanvas();
