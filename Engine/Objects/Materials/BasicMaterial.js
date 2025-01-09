import * as THREE from "three";

// добавть куб окружения и дефолт текстуры по типу дерева envMap + map
// alphaMap - места прозрч черные проз белые норм png
// combine THREE.AddOperation .MultiplyOperation .MixOperation

export const BasicMaterial = (
  basicParams = {
    color: 0x121212,
    visible: true,
    transparent: {
      opacity: 0.5,
    },
    admin: {
      alphaTest: 0,
      alphaHash: false,
      depthTest: true,
      depthWrite: true,
    },
  },
  CustomParams = {
    fog: true,
    map: null,
    envMap: null,
    alphaMap: null,
    combine: THREE.AddOperation,
    reflectivity: 0.5,
    refractionRatio: 0.5,
    wireframe: false,
    vertexColors: false,
  }
) =>
  new THREE.MeshBasicMaterial({
    color: basicParams.color,
    visible: basicParams.visible,
    transparent: typeof basicParams.transparent === "object",
    opacity: basicParams.transparent.opacity,

    fog: CustomParams.fog,
    map: CustomParams.map,
    envMap: CustomParams.envMap,
    alphaMap: CustomParams.alphaMap,
    combine: CustomParams.combine,
    reflectivity: CustomParams.reflectivity,
    refractionRatio: CustomParams.refractionRatio,
    wireframe: CustomParams.wireframe,
    vertexColors: CustomParams.vertexColors,
  });
