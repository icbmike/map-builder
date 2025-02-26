import { AssetList } from '~data/assets';
import { SelectedTool, Sprite } from '../../models/models';
import { TState } from '~redux/store';
import { Store } from '@reduxjs/toolkit';
import * as selectors from '~selectors';
import { initLightMap } from './lightMap';

type Ctx = CanvasRenderingContext2D;

export const draw = (ctx: Ctx, assets: AssetList, store: Store<TState>) => {
  const state = store.getState();

  drawBackground(ctx, assets, state);

  const sprites = selectors.getSprites(state);

  for (let i = 0; i < sprites.length; i++) {
    drawSprite(ctx, sprites[i], assets);
  }
  const isLightingEnabled = selectors.getIsLightingEnabled(state);

  if (isLightingEnabled) {
    drawLighting(ctx, state);
  }

  const selectedTool = selectors.getSelectedTool(state);

  if (selectedTool === SelectedTool.Sprite) {
    drawSpriteTool(ctx, assets, state);
  } else if (selectedTool === SelectedTool.Select) {
    drawSelectTool(ctx, state);
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
  const {
    assetName,
    width,
    height,
    position: { x, y },
    repeat,
    sourceRect,
  } = sprite;

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

const drawBackground = (ctx: Ctx, assets: AssetList, state: TState) => {
  const backgroundAssetName = selectors.getBackgroundAsset(state);
  const backgroundScale = selectors.getBackgroundScale(state);

  if (!backgroundAssetName) return;

  const backgroundAsset = assets[backgroundAssetName];

  if (!backgroundAsset) return;

  const pattern = ctx.createPattern(backgroundAsset, 'repeat')!;
  const transform = new DOMMatrix().scale(backgroundScale);
  pattern.setTransform(transform);

  ctx.fillStyle = pattern;

  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

let selectBorderOffset = 0;

const drawSelectTool = (ctx: Ctx, state: TState) => {
  const selectedSprite = selectors.getSelectedSprite(state);

  if (selectedSprite) {
    const {
      position: { x, y },
      width,
      height,
    } = selectedSprite;

    ctx.strokeStyle = 'white';
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = selectBorderOffset;
    ctx.strokeRect(x, y, width, height);

    selectBorderOffset = (selectBorderOffset + 1) % 5;
  }
};
