import { createAction } from "@reduxjs/toolkit";

export const setCanvasSettings = createAction<{aspectRatio: number, backgroundAsset?: string}>('CANVAS_SETTINGS/SET');
