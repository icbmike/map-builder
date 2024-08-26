import { createAction } from "@reduxjs/toolkit";
import { SelectedTool } from "~models/models";

export const setSelectedTool = createAction<string>('SELECTED_TOOL/SET');