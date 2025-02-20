import { Light } from '~models/models';

export const initLightMap = (
  width: number,
  height: number,
  lights: Light[],
  ambientBrightness: number,
) => {
  const lightMap = new Uint8ClampedArray(width * height);

  // Set ambient brightness
  for (let i = 0; i < lightMap.length; i++) {
    lightMap[i] = ambientBrightness;
  }

  for (const light of lights) {
    const { centreX, centreY, radius, brightness } = light;
    for (let a = 0; a <= Math.PI * 2; a += 0.001) {
      // increment in radians by ~1 deg
      for (let r = 0; r < radius; r++) {
        const x = Math.floor(centreX + r * Math.cos(a));
        const y = Math.floor(centreY + r * Math.sin(a));
        const index = y * width + x;
        lightMap[index] = Math.max(
          ((radius - r) / radius) * brightness,
          lightMap[index],
        );
      }
    }
  }

  return lightMap;
};
