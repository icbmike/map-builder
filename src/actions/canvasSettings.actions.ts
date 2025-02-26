import { createAction } from '@reduxjs/toolkit';

export const setCanvasSettings = createAction<{
  aspectRatio: number;
  backgroundAsset?: string;
  backgroundScale: number;
}>('CANVAS_SETTINGS/SET');
