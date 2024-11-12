import { createAction } from "@reduxjs/toolkit";
import { AssetList } from '../data/assets';

const actionType = 'LOAD_ASSETS';

export const loadAllAssets = createAction(actionType);
export const loadAllAssetsDone = createAction(`${actionType}/DONE`);

export const loadAllAssetsFailed = createAction(`${actionType}/FAILED`);