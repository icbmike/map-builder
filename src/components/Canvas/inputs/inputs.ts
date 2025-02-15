import { Disposer } from '~util/disposer';
import { SelectedTool } from '../../../models/models';
import { setupSelectToolInputs } from './selectTool.inputs';
import { setupSpriteToolInputs } from './spriteTool.inputs';
import { TState } from '~redux/store';
import { Dispatch, Store } from '@reduxjs/toolkit';

export const setupInputs = (
  cvs: HTMLCanvasElement,
  selectedTool: SelectedTool,
  store: Store<TState>,
  dispatch: Dispatch,
): Disposer => {
  if (selectedTool === 'select') {
    return setupSelectToolInputs(cvs);
  } else {
    return setupSpriteToolInputs(cvs, store, dispatch);
  }
};
