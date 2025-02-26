import { Sprite } from './models';

export const findShapeByPosition = (
  sprites: Sprite[],
  cX: number,
  cY: number,
) => {
  for (let i = sprites.length - 1; i >= 0; i--) {
    const s = sprites[i];
    const {
      position: { x, y },
      width,
      height,
      repeat: { timesX, timesY },
    } = s;

    if (
      cX > x &&
      cX < x + width * timesX &&
      cY > y &&
      cY < y + height * timesY
    ) {
      return s;
    }
  }
};
