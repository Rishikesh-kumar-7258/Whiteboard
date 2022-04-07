// HTML DOM elements
const main = document.querySelector("main");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const shapeSelector = document.getElementById("shape");
const strokeWidthSelector = document.getElementById("strokeWidth");
const colorSelector = document.getElementById("color");
const closeLine = document.getElementById("closeLine");
const navbar = document.querySelector("nav ul");
const modeToggler = document.getElementById("modeToggler");
const custom_color = document.getElementById("custom_color");

// Variables
var isDrawing = false;
var shape = 0;
var thickness = 1;
var color = "#000000";
var isNavbarVisible = true;
var startX, startY, endX, endY;
var darkMode = false;

// Function to start drawing
function startDrawing(e) {
  if (shape === 0) {
    isDrawing = true;
  }
  ctx.beginPath();
  ctx.lineWidth = thickness;
  ctx.strokeStyle = color;
  ctx.moveTo(e.offsetX, e.offsetY);
  startX = e.offsetX;
  startY = e.offsetY;
}

// Function to Stop Drawing
function stopDrawing(e) {
  endX = e.offsetX;
  endY = e.offsetY;

  isDrawing = false;

  // Drawing Rectangle
  if (shape === 1) {
    ctx.rect(startX, startY, endX - startX, endY - startY);
  }
  // Drawing Line
  else if (shape === 2) {
    ctx.lineTo(endX, endY);
  }
  // Drawing circle
  else if (shape === 3) {
    ctx.arc(
      (startX + endX) / 2,
      (startY + endY) / 2,
      Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)) / 2,
      0,
      2 * Math.PI
    );
  }
  ctx.stroke();
  ctx.closePath();
}

// Function to draw
function draw(e) {
  if (isDrawing === true) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
}

// Function to resize Canvas
function resizeCanvas() {
  ctx.canvas.width = main.clientWidth * 0.9;
  ctx.canvas.height = main.clientHeight * 0.9;
}

// Function to change shape type to draw
function changeShape(e) {
  shape = parseInt(e.target.value);
}

// Function to change the thickness of line to draw
function changeThickness(e) {
  thickness = parseInt(e.target.value);
}

// Function to change the color of line to draw
function changeColor(e) {
  color = e.target.value;
}

// Function to show and hide navbar
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

// Function to draw toggle between dark mode and light mode
function toggleMode() {
  document.querySelector("body").classList.toggle("dark-mode");
  darkMode = !darkMode;

  if (darkMode === false) {
    modeToggler.innerText = "Dark Mode";
  } else {
    modeToggler.innerText = "Light Mode";
  }
}

// function to select the custom color
function changeCustomColor() {
  color = custom_color.value;
}

// Main function
window.onload = function () {
  canvas.onmousedown = startDrawing;
  canvas.onmousemove = draw;
  canvas.onmouseup = stopDrawing;
  window.onresize = resizeCanvas;

  shapeSelector.onchange = changeShape;
  strokeWidthSelector.onchange = changeThickness;
  colorSelector.onchange = changeColor;
  custom_color.onchange = changeCustomColor;
  closeLine.onclick = toggleNavbar;
  modeToggler.onclick = toggleMode;
};
resizeCanvas();
