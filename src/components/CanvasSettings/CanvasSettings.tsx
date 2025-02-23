import React, { useState } from 'react';
import './CanvasSettings.scss';

import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '~selectors';
import * as actions from '~actions';
import { assets } from '~data/assets';
import { SelectBackgroundAssetModal } from './SelectBackgroundAssetModal/SelectBackgroundAssetModal';

export const CanvasSettings = () => {
  const dispatch = useDispatch();
  const aspectRatio = useSelector(selectors.getAspectRatio);
  const backgroundAsset = useSelector(selectors.getBackgroundAsset);
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
      }));
  }


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
            max={3}
            onChange={(e) =>
              dispatch(
                actions.setCanvasSettings({
                  aspectRatio: parseFloat(e.target.value),
                  backgroundAsset,
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
        </div>
      </div>
      <SelectBackgroundAssetModal
        isOpen={isSelectBackgroundAssetModalOpen}
        onAssetSelected={onBackgroundAssetSelected}
      />
    </>
  );
};
