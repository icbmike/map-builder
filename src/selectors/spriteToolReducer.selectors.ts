import { createSelector } from '@reduxjs/toolkit';
import { TState } from '~redux/store';

export const getSpriteToolState = (state: TState) => state.spriteTool;

export const getSelectedSpriteAssetName = createSelector(
  getSpriteToolState,
  (s) => s.selectedSpriteAssetName,
);

export const getCursorState = createSelector(
  getSpriteToolState,
  (s) => s.cursorState,
);

export const getSprites = createSelector(getSpriteToolState, (s) => s.sprites);

export const getSelectedSprite = createSelector(getSpriteToolState, (state) =>
  state.sprites.find((s) => s.objectId === state.selectedSprite),
);
