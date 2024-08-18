import { vec2 } from "gl-matrix";
import { findShapeByPosition } from "./queries";
import { sprites } from "./data";
import { Sprite } from "./models";

const handleMove = (cvs: HTMLCanvasElement, clickedSprite: Sprite, mouseDownEvent: MouseEvent) => {
  const startingPositionVector: vec2 = [clickedSprite.position.x, clickedSprite.position.y];
  const mouseDownVector: vec2 = [mouseDownEvent.offsetX, mouseDownEvent.offsetY];

  const outVec: vec2 = [0, 0];
  vec2.subtract(outVec, startingPositionVector, mouseDownVector);

  const mouseMoveHandler = (mouseMoveEvent: MouseEvent) => {
    clickedSprite.position.x = mouseMoveEvent.offsetX + outVec[0];
    clickedSprite.position.y = mouseMoveEvent.offsetY + outVec[1];
  };

  const mouseUpHandler = () => {
    cvs.removeEventListener("mousemove", mouseMoveHandler);
    cvs.removeEventListener("mouseup", mouseUpHandler);
  };

  cvs.addEventListener("mouseup", mouseUpHandler);
  cvs.addEventListener("mousemove", mouseMoveHandler);
};

const handleDuplicate = (clickedSprite: Sprite) => {
  sprites.push({
    ...clickedSprite,
    position: {
      x: clickedSprite.position.x + 10,
      y: clickedSprite.position.y + 10,
      z: clickedSprite.position.z + 1
    }
  })

  sprites.sort((a, b) => b.position.z - a.position.z);
};

const handleBringToFront = (clickedSprite: Sprite) => {
  clickedSprite.position.z = Math.max(...sprites.map((s) => s.position.z)) + 1;

  sprites.sort((a, b) => b.position.z - a.position.z);
};

const handleRemove = (clickedSprite: Sprite) => {

  const index = sprites.indexOf(clickedSprite);

  sprites.splice(index, 1);
}

export const setupInputs = (cvs: HTMLCanvasElement) => {
  cvs.addEventListener("mousedown", (mouseDownEvent) => {
    const clickedSprite = findShapeByPosition(
      sprites,
      mouseDownEvent.offsetX,
      mouseDownEvent.offsetY
    );
    mouseDownEvent.x

    if (clickedSprite) {
      if (mouseDownEvent.ctrlKey) {
        handleDuplicate(clickedSprite);
      } else if(mouseDownEvent.altKey){
        handleRemove(clickedSprite);
      } else {
        handleMove(cvs, clickedSprite, mouseDownEvent);
      }
    }
  });

  cvs.addEventListener("dblclick", (mouseEvent) => {
    const clickedSprite = findShapeByPosition(sprites, mouseEvent.offsetX, mouseEvent.offsetY);

    if (clickedSprite) {
      handleBringToFront(clickedSprite);
    }
  });
};
