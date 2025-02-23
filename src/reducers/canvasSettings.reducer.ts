import { createReducer } from "@reduxjs/toolkit";
import * as actions from '~actions';

interface IState {
    aspectRatio: number;
}

const initialState: IState = {
    aspectRatio: 1
}

export const canvasSettingsReducer = createReducer(initialState, builder => builder.addCase(actions.setCanvasSettings, (state, {payload}) => ({
    ...state,
    aspectRatio: payload.aspectRatio
})))