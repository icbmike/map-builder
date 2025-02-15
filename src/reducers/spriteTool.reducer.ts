import { createReducer } from '@reduxjs/toolkit';
import * as actions from '~actions';

interface IState {
  selectedSpriteAssetName?: string;
  cursorState: {
    x: number;
    y: number;
    zoom: number;
  };
}

const initialState: IState = {
  cursorState: {
    x: 0,
    y: 0,
    zoom: 1,
  },
};

export const spriteToolReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setSelectedSprite, (state, { payload }) => ({
      ...state,
      selectedSpriteAssetName: payload.assetName,
    }))
    .addCase(actions.setCursorState, (state, { payload }) => ({
      ...state,
      cursorState: {
        ...payload,
      },
    }));
});
