import { draw } from "./draw";
import { createCanvas } from "./createCanvas";
import { sprites } from "./data";
import { findShapeByPosition } from "./queries";

const { ctx, cvs } = createCanvas();

sprites.sort((a, b) => b.position.z - a.position.z);

// Add events listeners
cvs.addEventListener("mousedown", (event) => {
  const cX = event.clientX;
  const cY = event.clientY;

  const clickedSprite = findShapeByPosition(sprites, cX, cY);

  console.log(`x: ${cX}, y: ${cY}, ${JSON.stringify(clickedSprite)}`);
  if(clickedSprite) {

    const mouseMoveHandler = (event: MouseEvent) => {
      const cX = event.clientX;
      const cY = event.clientY;

      clickedSprite.position.x = cX;
      clickedSprite.position.y = cY;
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

    for(let i = sprites.length - 1; i >= 0; i--){
      draw(ctx, sprites[i]);
    }
    render();
  });
};

render();
