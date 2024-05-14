import { Sprite, Texture } from "./models";

const range = (numElements: number, start = 0) => Array(numElements).fill(1).map((x, y) => x + y + start);

const trees = range(5).map((i): Texture => ({
  type: "texture",
  assetName: "tree",
  width: 150,
  height: 200,
  position: {
    x: 400 + i * 50,
    y: 100,
    z: 10
  }
}));

export const sprites: Sprite[] = [
  ...trees,
  {
    type: "texture",
    assetName: "freddie",
    height: 100,
    width: 100,
    position: {
      x: 400,
      y: 100,
      z: 20
    }
  },
  {
    type: "texture",
    assetName: "grass_tile",
    height: 32,
    width: 32,
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    repeat: {
      timesX: 50,
      timesY: 200
    }
  }
];
