import { createReducer } from '@reduxjs/toolkit';
import * as actions from '~actions';
import { Light } from '~models/models';

interface IState {
  lightsEnabled: boolean;
  lights: Light[];
  ambientBrightness: number;
}

const initialState: IState = {
  lightsEnabled: true,
  lights: [
    {
      centreX: 600,
      centreY: 600,
      radius: 500,
      brightness: 255,
    },
  ],
  ambientBrightness: 128,
};

export const lightToolReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.toggleIsLightEnabled, (state) => ({
      ...state,
      lightsEnabled: !state.lightsEnabled,
    }))
    .addCase(actions.setAmbientBrightness, (state, { payload }) => ({
      ...state,
      ambientBrightness: payload,
    })),
);
