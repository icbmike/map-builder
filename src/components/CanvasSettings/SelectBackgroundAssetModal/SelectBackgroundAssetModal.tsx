import React, { useState } from 'react';
import { Modal } from '~components/Modal/Modal';

import "./SelectBackgroundAssetModal.scss";
import { SpriteList } from '~components/SpriteList/SpriteList';

interface IProps {
  isOpen: boolean;
  onAssetSelected: (assetName: string) => void;
}

export const SelectBackgroundAssetModal = ({ isOpen, onAssetSelected }: IProps) => {
  return (
    <Modal isOpen={isOpen} className="selectBackgroundAssetModal">
      <h1>Select Background Asset</h1>
      
      <SpriteList onSpriteSelected={onAssetSelected} displayMode='grid' />
    </Modal>
  );
};
