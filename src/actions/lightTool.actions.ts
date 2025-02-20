import { createAction } from '@reduxjs/toolkit';

export const toggleIsLightEnabled = createAction('IS_LIGHTING_ENABLED/TOGGLE');

export const setAmbientBrightness = createAction<number>(
  'AMBIENT_BRIGHTNESS/SET',
);
