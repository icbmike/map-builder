import { createSelector } from '@reduxjs/toolkit';
import { TState } from '~redux/store';

export const getLightToolState = (state: TState) => state.lightTool;

export const getIsLightingEnabled = createSelector(
  getLightToolState,
  (s) => s.lightsEnabled,
);

export const getLights = createSelector(getLightToolState, (s) => s.lights);

export const getAmbientBrightness = createSelector(
  getLightToolState,
  (s) => s.ambientBrightness,
);
