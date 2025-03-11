import * as THREE from "three";
import { LightingHemisphereParams } from "./Lighting.interface.js";
import { LightingTypes } from "../Constants.interface.js";

export const HemisphereLightCfg = (
  scene: THREE.Scene,
  params: LightingHemisphereParams = {
    skyColor: 0x4040ff,
    landColor: 0x80ff80,
    intensity: 1,
  }
): LightingTypes => {
  const light = new THREE.HemisphereLight(
    params.skyColor,
    params.landColor,
    params.intensity
  ); // Свет неба и земли с интенсивностью 0.5
  scene.add(light);

  //   light.skyColor.set(0xff0000); // Изменение цвета неба
  //   light.groundColor.set(0x00ff00); // Изменение цвета земли
  //   light.intensity = 0.7; // Изменение интенсивности

  return light;
};
