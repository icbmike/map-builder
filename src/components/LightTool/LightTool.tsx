import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '~selectors';

import './LightTool.scss';
import * as actions from '~actions';
import { LightForm } from './LightForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

export const LightTool = () => {
  const dispatch = useDispatch();
  const isLightingEnabled = useSelector(selectors.getIsLightingEnabled);
  const ambientBrightness = useSelector(selectors.getAmbientBrightness);
  const lights = useSelector(selectors.getLights);

  return (
    <div className="lightTool">
      <label>
        Lights on:{' '}
        <input
          type="checkbox"
          checked={isLightingEnabled}
          onChange={() => dispatch(actions.toggleIsLightEnabled())}
        />
      </label>
      <label>
        Ambient brightness:
        <input
          type="range"
          min={0}
          max={255}
          value={ambientBrightness}
          onChange={(e) =>
            dispatch(actions.setAmbientBrightness(parseInt(e.target.value)))
          }
        />
      </label>
      Lights
      <button>
        <FontAwesomeIcon icon={faAdd} />
      </button>
      {lights.map((l, i) => (
        <LightForm key={i} light={l} />
      ))}
    </div>
  );
};
