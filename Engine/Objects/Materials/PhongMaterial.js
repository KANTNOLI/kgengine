import * as THREE from "three";

export const PhongMaterial = (
  basicParams = {
    color: 0x121212,
    emissive: 0x000000,
    emissiveIntensity: 0,
    specular: 0x000000,
    shininess: 0,
    visible: true,
    opacity: 1,
  },
  CustomParams = {
    side: THREE.DoubleSide,
    fog: true,
    map: null,
    envMap: null,
    alphaMap: null,
    normalMap: null,
    normalScale: 1,
    specularMap: null,
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
  return new THREE.MeshPhongMaterial({
    color: basicParams.color,
    emissive: basicParams.emissive,
    emissiveIntensity: basicParams.emissiveIntensity,
    specular: basicParams.specular,
    shininess: basicParams.shininess,
    visible: basicParams.visible,
    transparent: basicParams.opacity < 1,
    opacity: basicParams.opacity,

    fog: CustomParams.fog,
    map: CustomParams.map,
    envMap: CustomParams.envMap,
    alphaMap: CustomParams.alphaMap,
    normalMap: CustomParams.normalMap,
    normalScale: CustomParams.normalScale,
    specularMap: CustomParams.specularMap,
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
