import { createReducer, nanoid } from '@reduxjs/toolkit';
import * as actions from '~actions';
import { Sprite } from '~models/models';

interface IState {
  selectedSpriteAssetName?: string;
  cursorState: {
    x: number;
    y: number;
    zoom: number;
  };
  sprites: Sprite[];
  selectedSprite?: string;
}

const initialState: IState = {
  cursorState: {
    x: 0,
    y: 0,
    zoom: 1,
  },
  sprites: [
    {
      assetName: 'path_horizontal_sides',
      objectId: nanoid(),
      width: 32,
      height: 32,
      repeat: {
        timesY: 1,
        timesX: 20,
      },
      position: {
        x: 0,
        y: 0,
        z: 30,
      },
    },
  ],
};

export const spriteToolReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setSelectedSprite, (state, { payload }) => ({
      ...state,
      selectedSpriteAssetName: payload.assetName,
    }))
    .addCase(actions.setCursorState, (state, { payload }) => ({
      ...state,
      cursorState: {
        ...payload,
      },
    }))
    .addCase(actions.duplicateSprite, (state, { payload }) => {
      state.sprites.push({
        ...payload,
        position: {
          x: payload.position.x + 10,
          y: payload.position.y + 10,
          z: payload.position.z + 1,
        },
      });
    })
    .addCase(actions.removeSprite, (state, { payload }) => {
      const indexToRemove = state.sprites.findIndex(
        (s) => s.objectId === payload.objectId,
      )!;

      state.sprites.splice(indexToRemove, 1);
      state.selectedSprite = undefined;
    })
    .addCase(actions.bringSpriteToFront, (state, { payload }) => {
      const spriteToBringToFround = state.sprites.find(
        (s) => s.objectId === payload.objectId,
      )!;

      spriteToBringToFround.position.z =
        Math.max(...state.sprites.map((s) => s.position.z)) + 1;

      state.sprites.sort((a, b) => a.position.z - b.position.z);
    })
    .addCase(actions.addSprite, (state, { payload }) => {
      state.sprites.push(payload);
    })
    .addCase(actions.moveSprite, (state, { payload }) => {
      const spriteToMove = state.sprites.find(
        (s) => s.objectId === payload.objectId,
      )!;

      spriteToMove.position.x = payload.x;
      spriteToMove.position.y = payload.y;
    })
    .addCase(actions.selectSprite, (state, { payload }) => ({
      ...state,
      selectedSprite: payload.objectId,
    }))
    .addCase(actions.updateSprite, (state, { payload }) => {
      const indexToUpdate = state.sprites.findIndex(
        (s) => s.objectId === payload.objectId,
      );

      state.sprites.splice(indexToUpdate, 1, payload);
    });
});
