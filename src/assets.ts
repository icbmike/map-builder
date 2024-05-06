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
  assets['tree'] = await loadImage('./tree.jpg')
}