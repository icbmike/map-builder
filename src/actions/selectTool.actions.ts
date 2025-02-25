import { createAction } from '@reduxjs/toolkit';

export const selectSprite = createAction<{ objectId?: string }>(
  'SPRITE/SELECT',
);
