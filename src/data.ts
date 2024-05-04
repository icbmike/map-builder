import { Sprite } from "./models";

export const sprites: Sprite[] = [
  {
    type: "rect",
    position: {
      x: 100,
      y: 100,
      z: 20,
    },
    height: 200,
    width: 100,
    colour: "red",
    texture: "asdasd",
  },
  {
    type: "circle",
    radius: 50,
    colour: "green",
    position: {
      x: 200,
      y: 200,
      z: 10,
    },
  },
  {
    type: "circle",
    radius: 50,
    colour: "purple",
    position: {
      x: 1000,
      y: 200,
      z: 10,
    },
  },
  
  {
    type: "circle",
    radius: 50,
    colour: "yellow",
    position: {
      x: 200,
      y: 800,
      z: 10,
    },
  },
];
