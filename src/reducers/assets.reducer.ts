import { createReducer } from '@reduxjs/toolkit';

import * as actions from '~actions';

interface IState {
  assetsLoading: boolean;
}

const initialState: IState = {
  assetsLoading: false,
};

export const assetsReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.loadAllAssets, (state) => ({
      ...state,
      assetsLoading: true,
    }))
    .addCase(actions.loadAllAssetsDone, (state, action) => ({
      ...state,
      assetsLoading: false,
    })),
);
