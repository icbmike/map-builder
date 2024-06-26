import { Circle, Options, Rectangle, Sprite, Texture } from "./models";
import { assets } from "./assets";

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
        case 'texture':
            drawTexture(ctx, sprite);
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

const drawTexture = (ctx: Ctx, texture: Texture) => {
    const { assetName, width, height, position: { x, y }, repeat, sourceRect } = texture;

    const img = assets[assetName]
    if (img) {
        if(repeat){
            ctx.fillStyle = ctx.createPattern(img, 'repeat')!;
            ctx.fillRect(x, y, repeat.timesX * width, repeat.timesY * height);
        } else if(sourceRect){
            ctx.drawImage(img, sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height, x, y, width, height);
        } else {
            ctx.drawImage(img, x, y, width, height);
        }
    }
}