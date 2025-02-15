import { createSelector } from '@reduxjs/toolkit';
import { TState } from '~redux/store';

export const getToolsState = (state: TState) => state.tools;

export const getSelectedTool = createSelector(
  getToolsState,
  (state) => state.selectedTool,
);
