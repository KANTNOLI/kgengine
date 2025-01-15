import * as THREE from "three";

export const StandardMaterial = (
  basicParams = {
    color: 0x121212,
    emissive: 0xc45151,
    emissiveIntensity: 0,
    roughness: 0,
    roughnessMap: null,
    metalness: 0,
    metalnessMap: null,
    visible: true,
    opacity: 1,
  },
  CustomParams = {
    side: THREE.FrontSide,
    fog: true,
    map: null,
    envMap: null,
    alphaMap: null,
    normalMap: null,
    normalScale: { x: 1, y: 1 },
    displacementMap: null,
    displacementScale: 0.1,
    combine: THREE.AddOperation,
    reflectivity: 0.5,
    refractionRatio: 0.5,
    wireframe: false,
    flatShading: false,
    vertexColors: false,
  },
  admin = {
    alphaTest: 0,
    alphaHash: false,
    depthTest: true,
    depthWrite: true,
  }
) => {
  return new THREE.MeshStandardMaterial({
    color: basicParams.color,
    emissive: basicParams.emissive,
    emissiveIntensity: basicParams.emissiveIntensity,
    roughness: basicParams.roughness,
    roughnessMap: basicParams.metalnessMap,
    metalness: basicParams.metalness,
    metalnessMap: basicParams.metalnessMap,

    visible: basicParams.visible,
    transparent: basicParams.opacity < 1,
    opacity: basicParams.opacity,

    fog: CustomParams.fog,
    map: CustomParams.map,
    envMap: CustomParams.envMap,
    alphaMap: CustomParams.alphaMap,
    normalMap: CustomParams.normalMap,
    normalScale: CustomParams.normalScale,
    displacementMap: CustomParams.displacementMap,
    displacementScale: CustomParams.displacementScale,
    combine: CustomParams.combine,
    reflectivity: CustomParams.reflectivity,
    refractionRatio: CustomParams.refractionRatio,
    wireframe: CustomParams.wireframe,
    flatShading: CustomParams.flatShading,
    vertexColors: CustomParams.vertexColors,

    alphaTest: admin.alphaTest,
    alphaHash: admin.alphaHash,
    depthTest: admin.depthTest,
    depthWrite: admin.depthWrite,
  });
};
