import { createReducer } from "@reduxjs/toolkit";

import * as actions from "~actions";

interface IState {
    selectedTool?: string
}

const initialState: IState = {

};

export const toolsReducer = createReducer(initialState, builder => 
    builder.addCase(actions.setSelectedTool, (state, { payload }) => ({
        ...state,
        selectedTool: payload
    }))
);