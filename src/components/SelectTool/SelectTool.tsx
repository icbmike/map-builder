import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '~selectors';

import './SelectTool.scss';

export const SelectTool = () => {
  const selectedSprite = useSelector(selectors.getSelectedSprite);

  if (!selectedSprite) {
    return null;
  }

  const {
    assetName,
    position: { x, y, z },
    height,
    width,
    objectId,
    repeat,
  } = selectedSprite;

  return (
    <div className="selectTool">
      <div className="selectTool-property">
        Asset:{' '}
        <span className="selectTool-property-readOnlyValue">{assetName}</span>
      </div>
      <div className="selectTool-property">
        ObjectId:{' '}
        <span className="selectTool-property-readOnlyValue">{objectId}</span>
      </div>
      <div className="selectTool-propertySection">
        <div className="selectTool-propertySection-title">Dimensions</div>
        <span>
          <label>
            Width:{' '}
            <input
              type="number"
              value={width}
              className="selectTool-propertyInput"
            />
          </label>
          <label>
            Height:{' '}
            <input
              type="number"
              value={height}
              className="selectTool-propertyInput"
            />
          </label>
        </span>
      </div>

      <div className="selectTool-propertySection">
        <div className="selectTool-propertySection-title">Position</div>
        <span>
          <label>
            X:{' '}
            <input
              type="number"
              value={x}
              className="selectTool-propertyInput"
            />
          </label>
          <label>
            Y:{' '}
            <input
              type="number"
              value={y}
              className="selectTool-propertyInput"
            />
          </label>
          <label>
            Z:{' '}
            <input
              type="number"
              value={z}
              className="selectTool-propertyInput"
            />
          </label>
        </span>
      </div>
    </div>
  );
};
