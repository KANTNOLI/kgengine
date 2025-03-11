import * as THREE from "three";
import { ShadowsSize } from "./Lighting.interface.js";
import { LightingTypes } from "../Constants.interface.js";

export const ShadowCfg = (
  scene: THREE.Scene,
  size: ShadowsSize = {
    width: 10,
    height: 10,
  }
): LightingTypes => {
  const shadowGeometry = new THREE.PlaneGeometry(size.width, size.height); // По сути тень это типо пласт
  const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.5 }); // Интенс тени
  const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial); //Линкуем
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.2;

  scene.add(shadow);

  return shadow;
};
