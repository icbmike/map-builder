import { StateFromReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { toolsReducer } from '~reducers/tools.reducer';
import { assetsReducer } from '../reducers/assets.reducer';
import { sideEffectMiddleWare } from './sideEffect.middleware';
import { spriteToolReducer } from '~reducers/spriteTool.reducer';
import { lightToolReducer } from '~reducers/lightTool.reducer';

const reducerMap = {
  tools: toolsReducer,
  assets: assetsReducer,
  spriteTool: spriteToolReducer,
  lightTool: lightToolReducer,
};

export type TState = StateFromReducersMapObject<typeof reducerMap>;

export const store = configureStore({
  reducer: reducerMap,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sideEffectMiddleWare),
});
