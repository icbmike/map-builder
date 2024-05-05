import { Circle, Options, Rectangle, Sprite } from "./models";

type Ctx = CanvasRenderingContext2D;

export const draw = (ctx: Ctx, sprites: Sprite[], options: Options) => {
    if (options.showGrid) {
        drawGrid(ctx, options);
    }

    for (let i = sprites.length - 1; i >= 0; i--) {
        drawSprite(ctx, sprites[i], options);
    }
}

export const drawGrid = (ctx: Ctx, options: Options) => {
    ctx.strokeStyle = 'black';
    for (let i = options.tileSize; i <= ctx.canvas.width; i += options.tileSize) {

        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, ctx.canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(ctx.canvas.width, i);
        ctx.stroke();
    }
}

export const drawSprite = (ctx: Ctx, sprite: Sprite, options: Options) => {
    switch (sprite.type) {
        case 'rect':
            drawRect(ctx, sprite);
            break;
        case 'circle':
            drawCircle(ctx, sprite);
            break;
    }
}

const drawRect = (ctx: Ctx, rect: Rectangle) => {
    const { width, height, colour, position: { x, y } } = rect;

    ctx.fillStyle = colour;

    ctx.fillRect(x, y, width, height);
}

const drawCircle = (ctx: Ctx, circle: Circle) => {
    const { radius, colour, position: { x, y } } = circle;

    ctx.fillStyle = colour;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}