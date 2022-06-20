console.log("This is my whiteboard project");

/**Main box where the canvas is located */
const mainBox = document.querySelector("main");

/** canvas DOM element */
const canvas = document.getElementById("canvas");
canvas.width = mainBox.clientWidth * 0.9;
canvas.height = mainBox.clientHeight * 0.9;
const ctx = canvas.getContext("2d");

/**Shape selector */
const shapeSelector = document.getElementById("shape");

/** Line Width selector */
const lineWidthSelector = document.getElementById("strokeWidth");

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

/** Main function */
function main() {
  /** Variables for the starting and ending position of mouse */
  var drawStartX = null,
    drawStartY = null,
    drawEndX = null,
    drawEndY = null;

  /** varible that shows which shape should be drawn : default Rectangle, changes when shapeSelector is changed */
  var shapeType = 1;

  /** variable that captures the width of line : default 1, changed the lineWidthSelector is changed*/
  var lineWidth = 1;

  /** Captures when shape Selectors value is changed */
  shapeSelector.addEventListener("change", (e) => {
    shapeType = parseInt(e.target.value);
  });

  /** Captures when line width value is changed */
  lineWidthSelector.addEventListener("change", (e) => {
    lineWidth = parseInt(e.target.value);
  });

  /** Captures when mouse button is clicked */
  canvas.addEventListener("mousedown", (e) => {
    if (e.button == 0) {
      drawStartX = e.offsetX;
      drawStartY = e.offsetY;
    }
  });

  /** captures the mouse button up event */
  canvas.addEventListener("mouseup", (e) => {
    if (e.button == 0) {
      drawEndX = e.offsetX;
      drawEndY = e.offsetY;

      switch (shapeType) {
        case 1:
          drawRect(
            drawStartX,
            drawStartY,
            drawEndX - drawStartX,
            drawEndY - drawStartY,
            lineWidth
          );
          break;
        case 2:
          drawLine(drawStartX, drawStartY, drawEndX, drawEndY, lineWidth);
          break;
        default:
          break;
      }

      // console.log(e);
      (drawStartX = null),
        (drawStartY = null),
        (drawEndX = null),
        (drawEndY = null);
    }
  });
}
main();
