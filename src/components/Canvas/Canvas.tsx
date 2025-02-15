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

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const selectedTool = useSelector(selectors.getSelectedTool);
  const store = useStore<TState>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (canvasRef.current) {
      const { ctx, cvs } = configureCanvas(canvasRef.current);

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

      return () => {
        inputDisposer();
        cancelAnimationFrame(requestId);
      };
    }
  }, [canvasRef.current, selectedTool]);

  return <canvas ref={canvasRef} className="canvas"></canvas>;
};
