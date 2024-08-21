import { StateFromReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { toolsReducer } from '~reducers/tools.reducer';

const reducerMap = {
    tools: toolsReducer
}

export type TState = StateFromReducersMapObject<typeof reducerMap>;

export const store = configureStore({
    reducer: reducerMap
}) 