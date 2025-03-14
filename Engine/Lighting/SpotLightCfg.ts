import * as THREE from "three";
import { LightingLight, LightingShadows } from "./Lighting.interface.js";
import { LightingTypes, PositionObject3D } from "../Constants.interface.js";

export const SpotLightCfg = (
  scene: THREE.Scene,
  params = {
    color: 0xffffff,
    intensity: 1,
  },
  position: PositionObject3D = {
    x: 1,
    y: 1,
    z: 1,
  },
  lighting: LightingLight = {
    distance: 300,
    angle: Math.PI / 4,
    penumbra: 0.1,
    decay: 2,
  },
  shadows: LightingShadows = {
    cast: true,
    bias: -0.0002,
    mapSize: 8192,
  }
): LightingTypes => {
  const light = new THREE.SpotLight(params.color, params.intensity); // Зеленый свет с интенсивностью 1
  light.position.set(position.x, position.y, position.z);
  scene.add(light);

  // light.color.set(0xffa500); // Изменение цвета света
  // light.intensity = 2; // Изменение интенсивности
  light.distance = lighting.distance || 300; // Изменение максимального расстояния света
  light.angle = lighting.angle || Math.PI / 4; // Изменение угла освещения конус
  light.penumbra = lighting.penumbra || 0.1; // Изменение полутона типо где меньше света
  light.decay = lighting.decay || 2; // Изменение коэффициента затухания света

  light.castShadow = shadows.cast || true; // Включение теней
  light.shadow.bias = shadows.bias || -0.0002; // Пример значения для shadow.bias
  light.shadow.mapSize.width = shadows.mapSize || 8192; // Установка размера карты теней
  light.shadow.mapSize.height = shadows.mapSize || 8192; // Установка размера карты теней

  return light;
};
