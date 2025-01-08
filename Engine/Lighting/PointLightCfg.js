import * as THREE from "three";

export const PointLightCfg = (
  scene,
  position = {
    x: 1,
    y: 1,
    z: 1,
  },
  params = {
    color: 0xff0000,
    intensity: 1,
    length: 100,
  },
  shadows = {
    cast: true,
    bias: -0.000005,
    mapSize: 512,
  }
) => {
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
  light.decay = 2; // Изменение коэффициента затухания света 2
  light.castShadow = shadows.cast; // Включение теней
  light.shadow.bias = shadows.bias; // Пример значения для shadow.bias
  light.shadow.mapSize.width = shadows.mapSize; // Установка размера карты теней
  light.shadow.mapSize.height = shadows.mapSize; // Установка размера карты теней

  return light
};
