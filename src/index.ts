import { draw } from "./draw";
import { createCanvas } from "./createCanvas";
import { createOptionsControl } from "./createOptionsControl";
import { sprites } from "./data";
import { findShapeByPosition } from "./queries";
import { vec2 } from "gl-matrix";

const { ctx, cvs } = createCanvas();
const options = createOptionsControl();

sprites.sort((a, b) => b.position.z - a.position.z);

// Add events listeners
cvs.addEventListener("mousedown", (mouseDownEvent) => {
  const clickedSprite = findShapeByPosition(sprites, mouseDownEvent.clientX, mouseDownEvent.clientY);

  if (clickedSprite) {
    const startingPositionVector: vec2 = [clickedSprite.position.x, clickedSprite.position.y];
    const mouseDownVector: vec2 = [mouseDownEvent.clientX, mouseDownEvent.clientY];

    const outVec: vec2 = [0, 0];
    vec2.subtract(outVec, startingPositionVector, mouseDownVector);

    const mouseMoveHandler = (mouseMoveEvent: MouseEvent) => {
      clickedSprite.position.x = mouseMoveEvent.clientX + outVec[0];
      clickedSprite.position.y = mouseMoveEvent.clientY + outVec[1];
    };

    const mouseUpHandler = () => {
      cvs.removeEventListener('mousemove', mouseMoveHandler);
      cvs.removeEventListener('mouseup', mouseUpHandler);
    }

    cvs.addEventListener('mouseup', mouseUpHandler);
    cvs.addEventListener('mousemove', mouseMoveHandler);
  }
});

// Define and start render loop
const render = () => {
  requestAnimationFrame(() => {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    draw(ctx, sprites, options);
    render();
  });
};

render();
