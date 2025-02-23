import { createReducer } from '@reduxjs/toolkit';
import * as actions from '~actions';

interface IState {
  aspectRatio: number;
  backgroundAsset?: string;
}

const initialState: IState = {
  aspectRatio: 1,
  backgroundAsset: 'grass_tile',
};

export const canvasSettingsReducer = createReducer(initialState, (builder) =>
  builder.addCase(actions.setCanvasSettings, (state, { payload }) => ({
    ...state,
    aspectRatio: payload.aspectRatio,
    backgroundAsset: payload.backgroundAsset,
  })),
);
