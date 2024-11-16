import React from 'react';
import { listAssetNames, assets } from '~data/assets';

import './SpriteList.scss';
import { useDispatch } from 'react-redux';
import * as actions from '~actions';

export const SpriteList = () => {
  const dispatch = useDispatch();

  const spriteClick = (assetName: string) => {
    dispatch(actions.setSelectedSprite({ assetName }));
  };

  const sprite = (assetName: string) => {
    return (
      <button
        className="SpriteList-sprite"
        key={assetName}
        onClick={() => spriteClick(assetName)}
      >
        <span className="SpriteList-spriteName">{assetName}</span>
        <img src={assets[assetName]!.src} className="SpriteList-spriteImage" />
      </button>
    );
  };

  return (
    <div className="SpriteList">{listAssetNames().map((an) => sprite(an))}</div>
  );
};
