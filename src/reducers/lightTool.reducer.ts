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
    }))
    .addCase(actions.removeLight, (state, { payload }) => ({
      ...state,
      lights: state.lights.filter((_, i) => i !== payload.index),
    }))
    .addCase(actions.updateLight, (state, { payload }) => {
      const { index, light } = payload;
      const lights = [...state.lights];
      lights[index] = light;

      return {
        ...state,
        lights,
      };
    })
    .addCase(actions.addLight, (state) => ({
      ...state,
      lights: [
        ...state.lights,
        { brightness: 255, centreX: 0, centreY: 0, radius: 10 },
      ],
    })),
);
