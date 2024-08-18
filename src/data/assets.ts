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
    ['grass_tile', './grass_tile.png'],
    ['log', './log.png'],
    ['long_grass_patch', './long_grass_patch.png'],
    ['long_grass_tile', './long_grass_tile.png'],
    ['pink_flowers', './pink_flowers.png'],
    ['white_flowers', './white_flowers.png'],
    ['blue_flowers', './blue_flowers.png'],
    ['yellow_flowers', './yellow_flowers.png'],
    ['signpost', './signpost.png'],
    ['round_tree', './round_tree.png'],
    ['round_tree_dark_green', './round_tree_dark_green.png'],
    ['rose', './rose.png'],
    ['water_tile', './water_tile.png'],
    ['water_inverse_corners', './water_inverse_corners.png'],
    ['water_corners', './water_corners.png'],
    ['water_vertical_sides', './water_vertical_sides.png'],
    ['water_horizontal_sides', './water_horizontal_sides.png'],

    ['path_horizontal_sides', './path_horizontal_sides.png'],
    ['path_vertical_sides', './path_vertical_sides.png'],
    ['path_tile', './path_tile.png'],
    ['path_corners', './path_corners.png'],
    ['path_inverse_corners', './path_inverse_corners.png'],
  ];
  
  const loadedAssets = await Promise.all(
    assetList.map(([assetName, assetUrl]): Promise<[string, HTMLImageElement]> => loadImage(assetUrl).then(i => [assetName, i]))
  );

  loadedAssets.forEach(([assetName, image]) => {
    assets[assetName] = image
  });
}