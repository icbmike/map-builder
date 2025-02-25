import { Dispatch, Store } from '@reduxjs/toolkit';
import { vec2 } from 'gl-matrix';
import { Sprite } from '~models/models';
import { findShapeByPosition } from '~models/queries';
import { TState } from '~redux/store';
import { Disposer } from '~util/disposer';
import * as selectors from '~selectors';
import * as actions from '~actions';

const handleMove = (
  cvs: HTMLCanvasElement,
  dispatch: Dispatch,
  clickedSprite: Sprite,
  mouseDownEvent: MouseEvent,
) => {
  const startingPositionVector: vec2 = [
    clickedSprite.position.x,
    clickedSprite.position.y,
  ];
  const mouseDownVector: vec2 = [
    mouseDownEvent.offsetX,
    mouseDownEvent.offsetY,
  ];

  const outVec: vec2 = [0, 0];
  vec2.subtract(outVec, startingPositionVector, mouseDownVector);

  const mouseMoveHandler = (mouseMoveEvent: MouseEvent) => {
    dispatch(
      actions.moveSprite({
        objectId: clickedSprite.objectId!,
        x: mouseMoveEvent.offsetX + outVec[0],
        y: mouseMoveEvent.offsetY + outVec[1],
      }),
    );
  };

  const mouseUpHandler = () => {
    cvs.removeEventListener('mousemove', mouseMoveHandler);
    cvs.removeEventListener('mouseup', mouseUpHandler);

    dispatch(actions.selectSprite({ objectId: clickedSprite.objectId }));
  };

  cvs.addEventListener('mouseup', mouseUpHandler);
  cvs.addEventListener('mousemove', mouseMoveHandler);
};

export const setupSelectToolInputs = (
  cvs: HTMLCanvasElement,
  store: Store<TState>,
  dispatch: Dispatch,
): Disposer => {
  const mouseDownHandler = (mouseDownEvent: MouseEvent) => {
    const sprites = selectors.getSprites(store.getState());

    const clickedSprite = findShapeByPosition(
      sprites,
      mouseDownEvent.offsetX,
      mouseDownEvent.offsetY,
    );

    if (clickedSprite) {
      if (mouseDownEvent.ctrlKey) {
        dispatch(actions.duplicateSprite(clickedSprite));
      } else if (mouseDownEvent.altKey) {
        dispatch(actions.removeSprite(clickedSprite));
      } else {
        handleMove(cvs, dispatch, clickedSprite, mouseDownEvent);
      }
    } else {
      dispatch(actions.selectSprite({ objectId: undefined }));
    }
  };

  const doubleClickHandler = (mouseEvent: MouseEvent) => {
    const sprites = selectors.getSprites(store.getState());

    const clickedSprite = findShapeByPosition(
      sprites,
      mouseEvent.offsetX,
      mouseEvent.offsetY,
    );

    if (clickedSprite) {
      dispatch(actions.bringSpriteToFront(clickedSprite));
    }
  };

  cvs.addEventListener('mousedown', mouseDownHandler);
  cvs.addEventListener('dblclick', doubleClickHandler);

  return () => {
    cvs.removeEventListener('mousedown', mouseDownHandler);
    cvs.removeEventListener('dblclick', doubleClickHandler);
  };
};
