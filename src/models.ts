export interface Point {
    x: number;
    y: number;
    z: number;
}

export interface BaseSprite {
    type: string;
    position: Point;
}

export interface Rectangle extends BaseSprite {
    type: 'rect'
    width: number;
    height: number;
    colour: string;
}

export interface Circle extends BaseSprite {
    type: 'circle',
    colour: string;
    radius: number
}

export interface Texture extends BaseSprite {
    type: 'texture';
    assetName: string;
    width: number;
    height: number;
    repeat?: {
        timesX: number;
        timesY: number
    },
    sourceRect?: {
        x: number,
        y: number,
        width: number,
        height: number
    } 
}

export type Sprite = Circle | Rectangle | Texture;

export interface Options {
    showGrid: boolean;
    tileSize: number;
}