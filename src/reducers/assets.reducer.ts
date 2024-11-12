import { createReducer } from "@reduxjs/toolkit";

import * as actions from "~actions";
import { AssetList } from "~data/assets";

interface IState {
    assetsLoading: boolean;
    assets: AssetList
}

const initialState: IState = {
    assets: {},
    assetsLoading: false
};

export const assetsReducer = createReducer(initialState, builder => 
    builder.addCase(actions.loadAllAssets, (state) => ({
        ...state,
        assetsLoading: true
    }))
    .addCase(actions.loadAllAssetsDone, (state, action) => ({
        ...state,
        assetsLoading: false,
        assets: action.payload
    }))
);