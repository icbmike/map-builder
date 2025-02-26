export interface Point {
  x: number;
  y: number;
  z: number;
}

export interface Sprite {
  objectId?: string;
  position: Point;
  assetName: string;
  width: number;
  height: number;
  repeat: {
    timesX: number;
    timesY: number;
  };
  sourceRect?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export enum SelectedTool {
  Select = 'select',
  Sprite = 'sprite',
  Light = 'light',
  CanvasSettings = 'canvasSettings',
}

export interface Light {
  centreX: number;
  centreY: number;
  radius: number;
  brightness: number;
}
