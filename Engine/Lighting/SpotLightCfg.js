import * as THREE from "three";

export const SpotLightCfg = (
  scene,
  params = {
    color: 0xffffff,
    intensity: 1,
  },
  position = {
    x: 1,
    y: 1,
    z: 1,
  },
  lighting = {
    distance: 300,
    angle: Math.PI / 4,
    penumbra: 0.1,
    decay: 2,
  },
  shadows = {
    cast: true,
    bias: -0.0002,
    mapSize: 8192,
  }
) => {
  const light = new THREE.SpotLight(params.color, params.intensity); // Зеленый свет с интенсивностью 1
  light.position.set(position.x, position.y, position.z);
  scene.add(light);

  // light.color.set(0xffa500); // Изменение цвета света
  // light.intensity = 2; // Изменение интенсивности
  light.distance = lighting.distance; // Изменение максимального расстояния света
  light.angle = lighting.angle; // Изменение угла освещения конус
  light.penumbra = lighting.penumbra; // Изменение полутона типо где меньше света
  light.decay = lighting.decay; // Изменение коэффициента затухания света

  light.castShadow = shadows.cast; // Включение теней
  light.shadow.bias = shadows.bias; // Пример значения для shadow.bias
  light.shadow.mapSize.width = shadows.mapSize; // Установка размера карты теней
  light.shadow.mapSize.height = shadows.mapSize; // Установка размера карты теней

  return light;
};
