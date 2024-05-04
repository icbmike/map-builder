import {Circle, Rectangle, Sprite} from "./models";

type Ctx = CanvasRenderingContext2D;

export const draw = (ctx: Ctx, sprite: Sprite) => {
    switch(sprite.type) {
        case 'rect':
            drawRect(ctx, sprite);
            break;
        case 'circle':
            drawCircle(ctx, sprite);
            break;
    }
}

const drawRect = (ctx: Ctx, rect: Rectangle) => {
    const {width, height, colour, position: {x, y}} = rect;

    ctx.fillStyle = colour;
    
    ctx.fillRect(x, y, width, height);
}

const drawCircle = (ctx: Ctx, circle: Circle) => {
    const { radius, colour, position: { x, y}} = circle;

    ctx.fillStyle = colour;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}