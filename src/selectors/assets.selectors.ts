import { createSelector } from "@reduxjs/toolkit";
import { TState } from "~redux/store";

export const getAssetsState = (state: TState) => state.assets;

export const getAssets = createSelector(getAssetsState, state => state.assets);