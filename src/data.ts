import { Sprite, Texture } from "./models";

import { data } from "./data.json";

export const sprites: Sprite[] = [
  ...(data as Sprite[]),
  {
    type: 'texture',
    assetName: 'rose',
    width: 26,
    height: 28,
    position: {
      x: 0,
      y: 0,
      z: 30
    },
  }
];
