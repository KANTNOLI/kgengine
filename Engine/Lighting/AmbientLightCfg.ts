import * as THREE from "three";
import { LightingParams } from "./Lighting.interface.js";
import { LightingTypes } from "../Constants.interface.js";

export const AmbientLightCfg = (
  scene: THREE.Scene,
  params: LightingParams = {
    color: 0xffffff,
    intensity: 1,
  }
): LightingTypes => {
  const light = new THREE.AmbientLight(params.color, params.intensity);
  scene.add(light);

  // light.color.set(0xff0000);
  // light.intensity = 0.7;

  return light;
};
