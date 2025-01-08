import * as THREE from "three";

export const AmbientLightCfg = (
  scene,
  params = {
    color: 0xffffff,
    intensity: 1,
  }
) => {
  const light = new THREE.AmbientLight(params.color, params.intensity);
  scene.add(light);

  // light.color.set(0xff0000);
  // light.intensity = 0.7;

  return light
};
