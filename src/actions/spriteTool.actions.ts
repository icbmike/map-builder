import { createAction } from "@reduxjs/toolkit";

export const setSelectedSprite = createAction<{ assetName: string }>('SELECTED_SPRITE/SET');
