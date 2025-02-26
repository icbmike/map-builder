import { TState } from '~redux/store';
import { Disposer } from '~util/disposer';
import * as selectors from '~selectors';
import { Dispatch, Store } from '@reduxjs/toolkit';
import * as actions from '~actions';
import { assets } from '~data/assets';
import { Sprite } from '~models/models';

export const setupSpriteToolInputs = (
  cvs: HTMLCanvasElement,
  store: Store<TState>,
  dispatch: Dispatch,
): Disposer => {
  const handleMouseMove = (mouseEvent: MouseEvent) => {
    const { zoom } = selectors.getCursorState(store.getState());

    dispatch(
      actions.setCursorState({
        x: mouseEvent.offsetX,
        y: mouseEvent.offsetY,
        zoom,
      }),
    );
  };

  const handleWheel = (wheelEvent: WheelEvent) => {
    const { zoom, x, y } = selectors.getCursorState(store.getState());

    const newZoom = zoom + wheelEvent.deltaY * -0.001;

    dispatch(
      actions.setCursorState({
        x,
        y,
        zoom: newZoom,
      }),
    );
  };

  const handleClick = (mouseEvent: MouseEvent) => {
    const selectedSprite = selectors.getSelectedSpriteAssetName(
      store.getState(),
    );

    const sprites = selectors.getSprites(store.getState());

    const { x, y, zoom } = selectors.getCursorState(store.getState());

    if (selectedSprite) {
      const img = assets[selectedSprite]!;
      const width = Math.abs(img.width * zoom);
      const height = Math.abs(img.height * zoom);

      const newSprite: Sprite = {
        assetName: selectedSprite,
        position: {
          x: x - width / 2,
          y: y - height / 2,
          z:
            sprites.length === 0
              ? 1
              : Math.max(...sprites.map((s) => s.position.z)) + 1,
        },
        width,
        height,
      };

      dispatch(actions.addSprite(newSprite));
    }
  };

  cvs.addEventListener('click', handleClick);
  cvs.addEventListener('mousemove', handleMouseMove);
  cvs.addEventListener('wheel', handleWheel);

  return () => {
    cvs.removeEventListener('click', handleClick);
    cvs.removeEventListener('mousemove', handleMouseMove);
    cvs.removeEventListener('wheel', handleWheel);
  };
};
