import { AssetList } from '~data/assets';
import { Circle, Rectangle, SelectedTool, Sprite, Texture } from '../../models/models';
import { TState } from '~redux/store';
import { Store } from '@reduxjs/toolkit';
import * as selectors from '~selectors';
import { initLightMap } from './lightMap';

type Ctx = CanvasRenderingContext2D;

export const draw = (
  ctx: Ctx,
  sprites: Sprite[],
  assets: AssetList,
  store: Store<TState>,
) => {
  for (let i = sprites.length - 1; i >= 0; i--) {
    drawSprite(ctx, sprites[i], assets);
  }
  const state = store.getState();
  const isLightingEnabled = selectors.getIsLightingEnabled(state);

  if (isLightingEnabled) {
    drawLighting(ctx, state);
  }

  const selectedTool = selectors.getSelectedTool(state);

  if (selectedTool === SelectedTool.Sprite) {
    drawSpriteTool(ctx, assets, state);
  }
};

export const drawLighting = (ctx: Ctx, state: TState) => {
  const lights = selectors.getLights(state);
  const ambientBrightness = selectors.getAmbientBrightness(state);
  const lightMap = initLightMap(
    ctx.canvas.width,
    ctx.canvas.height,
    lights,
    ambientBrightness,
  );

  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const { data } = imageData;

  for (let i = 0; i < data.length; i += 4) {
    const lightMapIndex = Math.floor(i / 4);
    const lightMapModifier = lightMap[lightMapIndex] / 255;
    data[i] = data[i] * lightMapModifier; //red
    data[i + 1] = data[i + 1] * lightMapModifier; //green
    data[i + 2] = data[i + 2] * lightMapModifier; // blue
    //data[i + 3] = data[i + 3]; // alpha
  }

  ctx.putImageData(imageData, 0, 0);
};

export const drawSpriteTool = (ctx: Ctx, assets: AssetList, state: TState) => {
  const { cursorState, selectedSpriteAssetName } =
    selectors.getSpriteToolState(state);

  if (selectedSpriteAssetName) {
    const img = assets[selectedSpriteAssetName];
    if (img) {
      const { x, y, zoom } = cursorState;

      const previewWidth = img.width * zoom;
      const previewHeight = img.height * zoom;

      ctx.drawImage(
        img,
        x - previewWidth / 2,
        y - previewHeight / 2,
        previewWidth,
        previewHeight,
      );
    }
  }
};

export const drawSprite = (ctx: Ctx, sprite: Sprite, assets: AssetList) => {
  switch (sprite.type) {
    case 'rect':
      drawRect(ctx, sprite);
      break;
    case 'circle':
      drawCircle(ctx, sprite);
      break;
    case 'texture':
      drawTexture(ctx, sprite, assets);
      break;
  }
};

const drawRect = (ctx: Ctx, rect: Rectangle) => {
  const {
    width,
    height,
    colour,
    position: { x, y },
  } = rect;

  ctx.fillStyle = colour;

  ctx.fillRect(x, y, width, height);
};

const drawCircle = (ctx: Ctx, circle: Circle) => {
  const {
    radius,
    colour,
    position: { x, y },
  } = circle;

  ctx.fillStyle = colour;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
};

const drawTexture = (ctx: Ctx, texture: Texture, assets: AssetList) => {
  const {
    assetName,
    width,
    height,
    position: { x, y },
    repeat,
    sourceRect,
  } = texture;

  const img = assets[assetName];
  if (img) {
    if (repeat) {
      const pattern = ctx.createPattern(img, 'repeat')!;
      pattern.setTransform(new DOMMatrix().translate(x, y));
      ctx.fillStyle = pattern;
      ctx.fillRect(x, y, repeat.timesX * width, repeat.timesY * height);
    } else if (sourceRect) {
      ctx.drawImage(
        img,
        sourceRect.x,
        sourceRect.y,
        sourceRect.width,
        sourceRect.height,
        x,
        y,
        width,
        height,
      );
    } else {
      ctx.drawImage(img, x, y, width, height);
    }
  }
};
