import { StateFromReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { toolsReducer } from '~reducers/tools.reducer';
import { assetsReducer } from '../reducers/assets.reducer';
import { sideEffectMiddleWare } from './sideEffect.middleware';
import { spriteToolReducer } from "~reducers/spriteTool.reducer";

const reducerMap = {
    tools: toolsReducer,
    assets: assetsReducer,
    spriteTool: spriteToolReducer
}

export type TState = StateFromReducersMapObject<typeof reducerMap>;

export const store = configureStore({
    reducer: reducerMap,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sideEffectMiddleWare)
}) 