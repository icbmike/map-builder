import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '~selectors';

import './SelectTool.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import * as actions from '~actions';
import { Sprite } from '~models/models';

export const SelectTool = () => {
  const dispatch = useDispatch();
  const selectedSprite = useSelector(selectors.getSelectedSprite);

  if (!selectedSprite) {
    return null;
  }

  const {
    assetName,
    position: { x, y, z },
    height,
    width,
    scale,
    objectId,
    repeat: { timesX, timesY },
  } = selectedSprite;

  type Updater = (s: Sprite, newValue: number) => Sprite;

  const onPropertyChange = (newValue: number, updater: Updater) => {
    const newSprite = updater(selectedSprite, newValue);

    dispatch(actions.updateSprite(newSprite));
  };

  const onIntPropertyChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    updater: Updater,
  ) => onPropertyChange(parseInt(event.target.value), updater);

  const onFloatPropertyChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    updater: Updater,
  ) => onPropertyChange(parseFloat(event.target.value), updater);

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
              onChange={(e) =>
                onIntPropertyChange(e, (s, v) => ({
                  ...s,
                  width: v,
                }))
              }
              className="selectTool-propertyInput"
            />
          </label>
          <label>
            Height:{' '}
            <input
              type="number"
              value={height}
              className="selectTool-propertyInput"
              onChange={(e) =>
                onIntPropertyChange(e, (s, v) => ({
                  ...s,
                  height: v,
                }))
              }
            />
          </label>
        </span>
        <span>
          <label>
            Scale:{' '}
            <input
              type="number"
              min={0.01}
              step={0.01}
              value={scale}
              className="selectTool-propertyInput"
              onChange={(e) =>
                onFloatPropertyChange(e, (s, v) => ({
                  ...s,
                  scale: v,
                }))
              }
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
              onChange={(e) =>
                onIntPropertyChange(e, (s, v) => ({
                  ...s,
                  position: { ...s.position, x: v },
                }))
              }
            />
          </label>
          <label>
            Y:{' '}
            <input
              type="number"
              value={y}
              className="selectTool-propertyInput"
              onChange={(e) =>
                onIntPropertyChange(e, (s, v) => ({
                  ...s,
                  position: { ...s.position, y: v },
                }))
              }
            />
          </label>
          <label>
            Z:{' '}
            <input
              type="number"
              value={z}
              className="selectTool-propertyInput"
              onChange={(e) =>
                onIntPropertyChange(e, (s, v) => ({
                  ...s,
                  position: { ...s.position, z: v },
                }))
              }
            />
          </label>
        </span>
      </div>

      <div className="selectTool-propertySection">
        <div className="selectTool-propertySection-title">Repeat</div>
        <span>
          <label>
            X:{' '}
            <input
              type="number"
              value={timesX}
              min={1}
              className="selectTool-propertyInput"
              onChange={(e) =>
                onIntPropertyChange(e, (s, v) => ({
                  ...s,
                  repeat: {
                    ...s.repeat,
                    timesX: v,
                  },
                }))
              }
            />
          </label>
          <label>
            Y:{' '}
            <input
              type="number"
              value={timesY}
              min={1}
              className="selectTool-propertyInput"
              onChange={(e) =>
                onIntPropertyChange(e, (s, v) => ({
                  ...s,
                  repeat: {
                    ...s.repeat,
                    timesY: v,
                  },
                }))
              }
            />
          </label>
        </span>
      </div>

      <button onClick={() => dispatch(actions.removeSprite(selectedSprite))}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
