const loadImage = (src: string) => {
  const image = new Image();

  return new Promise<HTMLImageElement>((resolve, reject) => {
    image.onload = () => {
      resolve(image);
    }

    image.onerror = (error) => {
      reject(error);
    }

    image.src = src;
  });
}

export const assets: Record<string, HTMLImageElement | undefined> = {};

export const loadAllAssets = async () => {

  const assetList: [string, string][] = [
    ['tree', './tree.png'],
    ['freddie', './freddie.png'],
    ['grass_tile', './grass_tile.png']
  ];
  
  const loadedAssets = await Promise.all(
    assetList.map(([assetName, assetUrl]): Promise<[string, HTMLImageElement]> => loadImage(assetUrl).then(i => [assetName, i]))
  );

  loadedAssets.forEach(([assetName, image]) => {
    assets[assetName] = image
  });
}