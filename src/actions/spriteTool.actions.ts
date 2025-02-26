import { createAction, nanoid } from '@reduxjs/toolkit';
import { Sprite } from '~models/models';

export const setSelectedSprite = createAction<{ assetName: string }>(
  'SELECTED_SPRITE/SET',
);

export const setCursorState = createAction<{
  x: number;
  y: number;
  zoom: number;
}>('CURSOR_STATE/SET');

export const removeSprite = createAction<Sprite>('SPRITE/REMOVE');
export const bringSpriteToFront = createAction<Sprite>('SPRITE/BRING_TO_FRONT');

export const duplicateSprite = createAction('SPRITE/DUPLICATE', (s: Sprite) => {
  return {
    payload: {
      ...s,
      objectId: nanoid(),
    },
  };
});

export const addSprite = createAction('SPRITE/ADD', (s: Sprite) => {
  return {
    payload: {
      ...s,
      objectId: nanoid(),
    },
  };
});

export const moveSprite = createAction<{
  x: number;
  y: number;
  objectId: string;
}>('SPRITE/MOVE');

export const updateSprite = createAction<Sprite>('SPRITE/UPDATE');
