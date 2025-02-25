export type AssetList = Record<string, HTMLImageElement | undefined>;

export const assets: AssetList = {};

export const listAssetNames = () => {
  return Object.entries(assets)
    .filter(([_, image]) => !!image)
    .map(([assetName, _]) => assetName);
};
