import { createAction } from "@reduxjs/toolkit";
import { SelectedTool } from "~models/models";

export const setSelectedTool = createAction<SelectedTool>('SELECTED_TOOL/SET');
