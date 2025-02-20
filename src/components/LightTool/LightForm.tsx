import React from 'react';
import { Light } from '~models/models';

import './LightForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  light: Light;
}

export const LightForm = ({ light }: IProps) => {
  const { centreX, centreY, radius, brightness } = light;
  return (
    <div className="lightForm">
      <label>
        Centre X: <input type="number" value={centreX} />
      </label>
      <label>
        Centre Y: <input type="number" value={centreY} />
      </label>
      <label>
        Radius: <input type="number" value={radius} />
      </label>
      <label>
        Brightness: <input type="range" min={0} max={255} value={brightness} />
      </label>
      <button>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
