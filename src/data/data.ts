import { Sprite } from '../models/models';
import { data } from './data.json';

export const sprites: Sprite[] = [
  ...(data as Sprite[]),
  {
    type: 'texture',
    assetName: 'path_horizontal_sides',
    width: 32,
    height: 32,
    repeat: {
      timesY: 1,
      timesX: 20,
    },
    position: {
      x: 0,
      y: 0,
      z: 30,
    },
  },
];
