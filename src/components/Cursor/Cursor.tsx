import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '~selectors';
import { assets } from '~data/assets';

import './Cursor.scss';

export const Cursor = () => {
  const selectedTool = useSelector(selectors.getSelectedTool);
  const selectedSprite = useSelector(selectors.getSelectedSprite);

  const selectedAsset = selectedSprite ? assets[selectedSprite] : undefined;
  const shouldRender = selectedTool == 'sprite' && selectedSprite && selectedAsset;

  const [cursorState, setCursorState] = useState<{
    x: number;
    y: number;
    scale: number;
  }>({
    x: 0,
    y: 0,
    scale: 1
  });

  useEffect(() => {
    const moveHandler = (event: MouseEvent) => {
      setCursorState({ ...cursorState, x: event.clientX, y: event.clientY });
    };

    const scrollHandler = (event: WheelEvent) => {
      setCursorState({...cursorState, scale: cursorState.scale + event.deltaY * -0.01})
    };

    if(shouldRender) {
      window.addEventListener('mousemove', moveHandler);
      window.addEventListener('wheel', scrollHandler);
    }

    return () => {
      window.removeEventListener('mousemove', moveHandler);
    };
  }, [shouldRender, cursorState]);

  if (selectedTool == 'sprite' && selectedSprite && selectedAsset) {
    const width = selectedAsset.width * cursorState.scale
    const height = selectedAsset.height * cursorState.scale

    return (
      <img
        className="Cursor"
        src={selectedAsset.src}
        style={{
          width,
          height,
          top: cursorState.y - height,
          left: cursorState.x - width,
        }}
      />
    );
  }

  return null;
};
