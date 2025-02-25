import { createAction } from '@reduxjs/toolkit';

const actionType = 'LOAD_ASSETS';

export const loadAllAssets = createAction(actionType);
export const loadAllAssetsDone = createAction(`${actionType}/DONE`);

export const loadAllAssetsFailed = createAction(`${actionType}/FAILED`);
