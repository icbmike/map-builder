import * as actions from '~actions';
import { assetList, assets } from '~data/assets';
import { createSideEffect } from '~redux/createSideEffect';

const loadImage = (src: string) => {
  const image = new Image();

  return new Promise<HTMLImageElement>((resolve, reject) => {
    image.onload = () => {
      resolve(image);
    };

    image.onerror = (error) => {
      reject(error);
    };

    image.src = src;
  });
};

export const loadAssetsSideEffect = createSideEffect(
  actions.loadAllAssets,
  async () => {
    const loadedAssets = await Promise.all(
      assetList.map(([assetName, assetUrl]) =>
        loadImage(assetUrl).then((i) => ({ assetName, image: i })),
      ),
    );

    loadedAssets.forEach(({ assetName, image }) => {
      assets[assetName] = image;
    });

    return actions.loadAllAssetsDone();
  },
);
