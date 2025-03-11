import * as THREE from "three";
import { LightingTypes, PositionObject3D } from "../Constants.interface.js";
import { LightingParams, LightingShadows } from "./Lighting.interface.js";

export const PointLightCfg = (
  scene: THREE.Scene,
  position: PositionObject3D = {
    x: 1,
    y: 1,
    z: 1,
  },
  params: LightingParams = {
    color: 0xff0000,
    intensity: 1,
    length: 100,
  },
  shadows: LightingShadows = {
    cast: true,
    bias: -0.000005,
    mapSize: 512,
  },
  decay: number = 2
): LightingTypes => {
  const light = new THREE.PointLight(
    params.color,
    params.intensity,
    params.length
  ); // Красный свет с интенс 1 и расстоянием 100
  light.position.set(position.x, position.y, position.z);
  scene.add(light);

  //   light.color.set(0x0000ff); // Изменение цвета света
  //   light.intensity = 1.5; // Изменение интенсивности
  //   light.distance = 200; // Изменение максимального расстояния света

  light.decay = decay; // Изменение коэффициента затухания света 2

  light.castShadow = shadows.cast != undefined ? shadows.cast : true; // Включение теней
  light.shadow.bias = shadows.bias != undefined ? shadows.bias : -0.000005; // артефакты фикс
  light.shadow.mapSize.width =
    shadows.mapSize != undefined ? shadows.mapSize : 8192; // Установка размера карты теней
  light.shadow.mapSize.height =
    shadows.mapSize != undefined ? shadows.mapSize : 8192; // Установка размера карты теней

  return light;
};
