import * as THREE from "three";

// добавть куб окружения и дефолт текстуры по типу дерева envMap + map
// alphaMap - места прозрч черные проз белые норм png
// combine THREE.AddOperation .MultiplyOperation .MixOperation

export const BasicMaterial = (
  basicParams = {
    color: 0x121212,
    visible: true,
    opacity: 1,
  },
  CustomParams = {
    fog: true,
    map: null,
    envMap: null,
    alphaMap: null,
    normalMap: null,
    displacementMap: null,
    displacementScale: 0.1,
    combine: THREE.AddOperation,
    reflectivity: 0.5,
    refractionRatio: 0.5,
    wireframe: false,
    vertexColors: false,
  },
  admin = {
    alphaTest: 0,
    alphaHash: false,
    depthTest: true,
    depthWrite: true,
  }
) =>
  new THREE.MeshBasicMaterial({
    color: basicParams.color,
    visible: basicParams.visible,
    transparent: basicParams.opacity < 1,
    opacity: basicParams.opacity,

    fog: CustomParams.fog,
    map: CustomParams.map,
    envMap: CustomParams.envMap,
    alphaMap: CustomParams.alphaMap,
    normalMap: CustomParams.normalMap,
    displacementMap: CustomParams.displacementMap,
    displacementScale: CustomParams.displacementScale,
    combine: CustomParams.combine,
    reflectivity: CustomParams.reflectivity,
    refractionRatio: CustomParams.refractionRatio,
    wireframe: CustomParams.wireframe,
    vertexColors: CustomParams.vertexColors,

    alphaTest: admin.alphaTest,
    alphaHash: admin.alphaHash,
    depthTest: admin.depthTest,
    depthWrite: admin.depthWrite,
  });
