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
    } = s;

    if (cX > x && cX < x + width && cY > y && cY < y + height) {
      return s;
    }
  }
};
