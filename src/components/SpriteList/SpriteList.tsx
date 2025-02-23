import React from 'react';
import { listAssetNames, assets } from '~data/assets';

import './SpriteList.scss';

interface IProps {
  selectedAsset?: string;
  onSpriteSelected: (assetName: string) => void;
  displayMode: 'list' | 'grid',
  className?: string
}

export const SpriteList = ({ onSpriteSelected, selectedAsset, displayMode, className }: IProps) => {
  const sprite = (assetName: string) => {
    return (
      <button
        className={`SpriteList-sprite ${selectedAsset === assetName ? 'selected' : ''}`}
        key={assetName}
        onClick={() => onSpriteSelected(assetName)}
      >
        <span className="SpriteList-spriteName">{assetName}</span>
        <img src={assets[assetName]!.src} className="SpriteList-spriteImage" />
      </button>
    );
  };

  return (
    <div className={`SpriteList ${displayMode} ${className}`}>{listAssetNames().map((an) => sprite(an))}</div>
  );
};
