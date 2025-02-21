import React from 'react';
import { Light } from '~models/models';

import './LightForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  light: Light;
  onDelete: () => void;
  onLightChange: (light: Light) => void;
}

export const LightForm = ({ light, onDelete, onLightChange }: IProps) => {
  const { centreX, centreY, radius, brightness } = light;

  const onXChange = (value: number) => {
    onLightChange({ ...light, centreX: value });
  };
  const onYChange = (value: number) => {
    onLightChange({ ...light, centreY: value });
  };
  const onRadiusChange = (value: number) => {
    onLightChange({ ...light, radius: value });
  };
  const onBrightnessChange = (value: number) => {
    onLightChange({ ...light, brightness: value });
  };

  return (
    <div className="lightForm">
      <label>
        Centre X:{' '}
        <input
          type="number"
          value={centreX}
          onChange={(e) => onXChange(parseInt(e.target.value))}
        />
      </label>
      <label>
        Centre Y:{' '}
        <input
          type="number"
          value={centreY}
          onChange={(e) => onYChange(parseInt(e.target.value))}
        />
      </label>
      <label>
        Radius:{' '}
        <input
          type="number"
          value={radius}
          onChange={(e) => onRadiusChange(parseInt(e.target.value))}
        />
      </label>
      <label>
        Brightness:{' '}
        <input
          type="range"
          min={0}
          max={255}
          value={brightness}
          onChange={(e) => onBrightnessChange(parseInt(e.target.value))}
        />
      </label>
      <button onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
