import { Sprite } from "./models";

export const findShapeByPosition = (sprites: Sprite[], cX: number, cY: number) =>
  sprites.find((s) => {
    if (s.type === "rect" || s.type === "texture") {
      const {
        position: { x, y },
        width,
        height,
      } = s;

      return cX > x && cX < x + width && cY > y && cY < y + height;
    } else if (s.type === "circle") {
      const {
        position: { x, y },
        radius,
      } = s;

      const dist = Math.sqrt(Math.pow(x - cX, 2) + Math.pow(y - cY, 2));

      return dist < radius;
    }
  });
