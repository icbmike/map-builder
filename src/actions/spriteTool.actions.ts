import { createAction } from '@reduxjs/toolkit';

export const setSelectedSprite = createAction<{ assetName: string }>(
  'SELECTED_SPRITE/SET',
);

export const setCursorState = createAction<{
  x: number;
  y: number;
  zoom: number;
}>('CURSOR_STATE/SET');
