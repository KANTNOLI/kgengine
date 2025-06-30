import * as THREE from "three";
import { LightingParams, LightingShadows } from "./Lighting.interface.js";
import { LightingTypes, PositionObject3D } from "../Constants.interface.js";

export const DirectionalLightCfg = (
  scene: THREE.Scene,
  position: PositionObject3D = {
    x: 1,
    y: 1,
    z: 1,
  },
  params: LightingParams = {
    color: 0xffffff,
    intensity: 1,
  },
  shadows: LightingShadows = {
    cast: true,
    bias: -0.000005,
    mapSize: 1024,
  }
): LightingTypes => {
  const light = new THREE.DirectionalLight(params.color, params.intensity); // Белый свет с интенсивностью 1

  light.position.set(position.x, position.y, position.z);
  scene.add(light);

  // light.color.set(0x00ff00); // Изменение цвета света
  // light.intensity = 0.8; // Изменение интенсивности
  light.castShadow = shadows.cast || true; // Включение теней
  light.shadow.bias = shadows.bias || -0.000005; // артефакты фикс
  light.shadow.mapSize.width = shadows.mapSize || 1024; // Установка размера карты теней
  light.shadow.mapSize.height = shadows.mapSize || 1024; // Установка размера карты теней

  light.shadow.camera.left = -100;
  light.shadow.camera.right = 100;
  light.shadow.camera.top = 100;
  light.shadow.camera.bottom = -100;

  return light;
};
