import { createReducer } from '@reduxjs/toolkit';

import * as actions from '~actions';
import { SelectedTool } from '~models/models';

interface IState {
  selectedTool: SelectedTool;
}

const initialState: IState = {
  selectedTool: 'select',
};

export const toolsReducer = createReducer(initialState, (builder) =>
  builder.addCase(actions.setSelectedTool, (state, { payload }) => ({
    ...state,
    selectedTool: payload,
  })),
);
