import { createSelector } from '@reduxjs/toolkit';
import { TState } from '~redux/store';

export const getSpriteToolState = (state: TState) => state.spriteTool;

export const getSelectedSprite = createSelector(
  getSpriteToolState,
  (s) => s.selectedSpriteAssetName,
);

export const getCursorState = createSelector(
  getSpriteToolState,
  (s) => s.cursorState,
);
