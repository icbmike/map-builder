import { createAction } from '@reduxjs/toolkit';
import { Light } from '~models/models';

export const toggleIsLightEnabled = createAction('IS_LIGHTING_ENABLED/TOGGLE');

export const setAmbientBrightness = createAction<number>(
  'AMBIENT_BRIGHTNESS/SET',
);

export const removeLight = createAction<{ index: number }>('LIGHT/REMOVE');
export const addLight = createAction('LIGHT/ADD');
export const updateLight = createAction<{ index: number; light: Light }>(
  'LIGHT/UPDATE',
);
