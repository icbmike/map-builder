import { createSelector } from "@reduxjs/toolkit";
import { TState } from "~redux/store";

const getCanvasSettingsState = (state:TState) => state.canvasSettings;

export const getAspectRatio = createSelector(getCanvasSettingsState, s => s.aspectRatio);