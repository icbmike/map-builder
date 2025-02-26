import React, { useState } from 'react';
import './CanvasSettings.scss';

import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '~selectors';
import * as actions from '~actions';
import { SelectBackgroundAssetModal } from './SelectBackgroundAssetModal/SelectBackgroundAssetModal';
import { assets } from '~data/assets';

export const CanvasSettings = () => {
  const dispatch = useDispatch();
  const aspectRatio = useSelector(selectors.getAspectRatio);
  const backgroundAsset = useSelector(selectors.getBackgroundAsset);
  const backgroundScale = useSelector(selectors.getBackgroundScale);

  const [
    isSelectBackgroundAssetModalOpen,
    setIsSelectBackgroundAssetModalOpen,
  ] = useState(false);

  const onBackgroundAssetSelected = (assetName: string) => {
    setIsSelectBackgroundAssetModalOpen(false);

    dispatch(
      actions.setCanvasSettings({
        aspectRatio,
        backgroundAsset: assetName,
        backgroundScale,
      }),
    );
  };

  return (
    <>
      <div className="canvasSettings">
        <label>
          Aspect Ratio:{' '}
          <input
            type="number"
            value={aspectRatio}
            min={1}
            step={0.01}
            max={10}
            onChange={(e) =>
              dispatch(
                actions.setCanvasSettings({
                  aspectRatio: parseFloat(e.target.value),
                  backgroundAsset,
                  backgroundScale,
                }),
              )
            }
          />
        </label>
        <div>
          <label>Background asset:</label>{' '}
          <button
            onClick={() => setIsSelectBackgroundAssetModalOpen(true)}
            className="selectSpriteButton"
          >
            Select Sprite
          </button>
          {backgroundAsset ? (
            <img
              className="backgroundAssetPreview"
              src={assets[backgroundAsset]!.src}
            />
          ) : null}
          <label>
            Background Asset Size:{' '}
            <input
              type="number"
              min={0.1}
              max={3}
              step={0.1}
              value={backgroundScale}
              onChange={(e) =>
                dispatch(
                  actions.setCanvasSettings({
                    aspectRatio,
                    backgroundAsset,
                    backgroundScale: parseFloat(e.target.value),
                  }),
                )
              }
            />
          </label>
        </div>
      </div>
      <SelectBackgroundAssetModal
        isOpen={isSelectBackgroundAssetModalOpen}
        onAssetSelected={onBackgroundAssetSelected}
      />
    </>
  );
};
