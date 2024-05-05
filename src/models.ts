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
    texture?: string;
    colour: string;
}

export interface Circle extends BaseSprite {
    type: 'circle',
    colour: string;
    radius: number
}

export type Sprite = Circle | Rectangle;

export interface Options {
    showGrid: boolean;
    tileSize: number;
}