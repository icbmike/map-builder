import { createAction } from "@reduxjs/toolkit";

export const setCanvasSettings = createAction<{aspectRatio: number}>('CANVAS_SETTINGS/SET');