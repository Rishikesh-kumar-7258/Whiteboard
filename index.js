console.log("This is my whiteboard project");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.addEventListener("mousemove", (e) => {});

window.addEventListener("click", (e) => {
  console.log("This is click");
});

function drawRect(x, y, height, width) {
  ctx.rect(x, y, width, height);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#FF0000";
  ctx.fillStyle = "#FFFF00";
  ctx.stroke();
  ctx.fill();
}

drawRect(50, 50, 50, 50);
