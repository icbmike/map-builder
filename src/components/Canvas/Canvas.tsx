import React, { useEffect, useRef } from 'react';
import { sprites } from '../../data/data';
import { draw } from './draw';
import { setupInputs } from './inputs/inputs';

import './Canvas.scss';
import { assets } from '~data/assets';
import { configureCanvas } from './configureCanvas';
import { useDispatch, useSelector, useStore } from 'react-redux';
import * as selectors from '~selectors';
import { TState } from '~redux/store';
import { download } from '~util/download';

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const selectedTool = useSelector(selectors.getSelectedTool);
  const aspectRatio = useSelector(selectors.getAspectRatio);
  const store = useStore<TState>();
  const dispatch = useDispatch();

  const messageHandler = (messageEvent: MessageEvent) => {
    if (
      messageEvent.data.event === 'downloadImageClicked' &&
      canvasRef.current
    ) {
      canvasRef.current.toBlob((b) => {
        if (b) {
          download(b);
        }
      }, 'image/png');
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const { ctx, cvs } = configureCanvas(canvasRef.current, aspectRatio);

      sprites.sort((a, b) => b.position.z - a.position.z);

      const inputDisposer = setupInputs(cvs, selectedTool, store, dispatch);

      let requestId = 0;
      // Define and start render loop
      const render = () => {
        requestId = requestAnimationFrame(() => {
          ctx.clearRect(0, 0, cvs.width, cvs.height);
          draw(ctx, sprites, assets, store);

          render();
        });
      };

      render();

      window.addEventListener('message', messageHandler);

      return () => {
        inputDisposer();
        cancelAnimationFrame(requestId);
        window.removeEventListener('message', messageHandler);
      };
    }
  }, [canvasRef.current, selectedTool, aspectRatio]);

  return <canvas ref={canvasRef} className="canvas"></canvas>;
};
