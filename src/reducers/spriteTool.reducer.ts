import { createReducer } from "@reduxjs/toolkit";
import * as actions from '~actions';

interface IState {
    selectedSpriteAssetName?: string;
}

const initialState: IState = {};

export const spriteToolReducer = createReducer(initialState, builder => {
    builder.addCase(actions.setSelectedSprite, (state, { payload }) => ({
        ...state,
        selectedSpriteAssetName: payload.assetName
    }))
});