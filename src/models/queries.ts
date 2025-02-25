import { Sprite } from './models';

export const findShapeByPosition = (
  sprites: Sprite[],
  cX: number,
  cY: number,
) =>
  sprites.find((s) => {
    const {
      position: { x, y },
      width,
      height,
    } = s;

    return cX > x && cX < x + width && cY > y && cY < y + height;
  });
