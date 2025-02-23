import React from 'react';
import './CanvasSettings.scss';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '~selectors';
import * as actions from '~actions';

export const CanvasSettings = () => {
  const dispatch = useDispatch();
  const aspectRatio = useSelector(selectors.getAspectRatio);

  return (
    <div className="canvasSettings">
      <label>
        Aspect Ratio:{' '}
        <input
          type="number"
          value={aspectRatio}
          min={1}
          step={0.01}
          max={3}
          onChange={(e) =>
            dispatch(actions.setCanvasSettings({ aspectRatio: parseFloat(e.target.value) }))
          }
        />
      </label>
    </div>
  );
};
