import * as THREE from "three";

export const DirectionalLightCfg = (
  scene,
  position = {
    x: 1,
    y: 1,
    z: 1,
  },
  params = {
    color: 0xffffff,
    intensity: 1,
  },
  shadows = {
    cast: true,
    bias: -0.000005,
    mapSize: 8192,
  }
) => {
  const light = new THREE.DirectionalLight(params.color, params.intensity); // Белый свет с интенсивностью 1
  light.position.set(position.x, position.y, position.z);
  scene.add(light);

  // light.color.set(0x00ff00); // Изменение цвета света
  // light.intensity = 0.8; // Изменение интенсивности
  light.castShadow = shadows.cast; // Включение теней
  light.shadow.bias = shadows.bias; // артефакты фикс
  light.shadow.mapSize.width = shadows.mapSize; // Установка размера карты теней
  light.shadow.mapSize.height = shadows.mapSize; // Установка размера карты теней

  return light;
};
