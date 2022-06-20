console.log("This is my whiteboard project");

const mainBox = document.querySelector("main");
const canvas = document.getElementById("canvas");
canvas.width = mainBox.clientWidth * 0.9;
canvas.height = mainBox.clientHeight * 0.9;

const ctx = canvas.getContext("2d");

/** Function to draw a rectangle
 * @param x starting x-cordinate
 * @param y starting y-cordinate
 * @param width width of rectangle
 * @param height height of rectangle
 * @param lineWidth width of stroke line : default 1
 * @param strokeStyle color of stroke line (hexadecimaal) : default #000000
 * @param fillStyle color of inside of rectangle : default #FFFF00
 */
function drawRect(
  x,
  y,
  width,
  height,
  lineWidth = 1,
  strokeStyle = "#000000",
  fillStyle = "#FFFF00"
) {
  ctx.rect(x, y, width, height);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.stroke();
  ctx.fill();
}

/** Function to draw line between
 * @param x1 x-cordinate of starting point
 * @param y1 y-cordinate of starting point
 * @param x2 x-cordinate of ending point
 * @param y2 y-cordinate of ending point
 * @param lineWidth width of stroke line : default 1
 * @param strokeStyle color of stroke line (hexadecimaal) : default #000000
 */
function drawLine(x1, y1, x2, y2, lineWidth = 1, strokeStyle = "#000000") {
  ctx.moveTo(x2, y2);
  ctx.lineTo(x1, y1);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
}

function main() {
  /** Variables for the starting and ending position of mouse */
  var drawStartX = null,
    drawStartY = null,
    drawEndX = null,
    drawEndY = null;

  /** Captures when mouse button is clicked */
  canvas.addEventListener("mousedown", (e) => {
    if (e.button == 0) {
      drawStartX = e.clientX;
      drawStartY = e.clientY;
    }
  });

  /** captures the mouse button up event */
  canvas.addEventListener("mouseup", (e) => {
    if (e.button == 0) {
      drawEndX = e.clientX;
      drawEndY = e.clientY;

      drawRect(
        drawStartX,
        drawStartY,
        drawEndX - drawStartX,
        drawEndY - drawStartY
      );

      console.log(drawStartX, drawStartY, drawEndX, drawEndY);
      (drawStartX = null),
        (drawStartY = null),
        (drawEndX = null),
        (drawEndY = null);
    }
  });
}
main();
drawLine(50, 50, 100, 100, 10, "#676700");
