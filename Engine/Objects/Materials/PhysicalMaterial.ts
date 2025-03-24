import * as THREE from "three";
import { MaterialTypes } from "../../Constants.interface.js";

export interface MaterialBasicParams {
  color?: number;
  emissive?: number;
  emissiveIntensity?: number;
  sheenColor?: number;
  sheen?: number;
  sheenRoughness?: number;
  specularColor?: number;
  specularIntensity?: number;
  roughness?: number;
  roughnessMap?: THREE.Texture | undefined;
  metalness?: number;
  metalnessMap?: THREE.Texture | undefined;
  ior?: number;
  reflectivity?: number;
  iridescence?: number;
  iridescenceIOR?: number;
  iridescenceMap?: THREE.Texture | undefined;
  clearcoat?: number;
  clearcoatRoughness?: number;
  opacity?: number;
  visible?: boolean;
}

export interface MaterialOtherParams {
  side?: THREE.Side;
  fog?: boolean;
  map?: THREE.Texture | undefined;
  envMap?: THREE.Texture | undefined;
  alphaMap?: THREE.Texture | undefined;
  normalMap?: THREE.Texture | undefined;
  normalScale?: THREE.Vector2 | undefined;
  displacementMap?: THREE.Texture | undefined;
  displacementScale?: number;
  combine?: THREE.Combine;
  reflectivity?: number;
  refractionRatio?: number;
  wireframe?: boolean;
  flatShading?: boolean;
  vertexColors?: boolean;
}

export interface MaterialAdmin {
  alphaTest: number;
  alphaHash: boolean;
  depthTest: boolean;
  depthWrite: boolean;
}

export const PhysicalMaterial = (
  basicParams: MaterialBasicParams = {
    color: 0x121212,
    emissive: 0x000000,
    emissiveIntensity: 0.2,
    sheenColor: 0x000000,
    sheen: 0,
    sheenRoughness: 0,
    specularColor: 0x000000,
    specularIntensity: 0,
    roughness: 1,
    roughnessMap: undefined,
    metalness: 0,
    metalnessMap: undefined,
    ior: 0,
    reflectivity: 0,
    iridescence: 0,
    iridescenceIOR: 0,
    iridescenceMap: undefined,
    clearcoat: 0,
    clearcoatRoughness: 0,
    opacity: 1,
    visible: true,
  },
  CustomParams: MaterialOtherParams = {
    side: THREE.FrontSide,
    fog: true,
    map: undefined,
    envMap: undefined,
    alphaMap: undefined,
    normalMap: undefined,
    normalScale: new THREE.Vector2(1, 1),
    displacementMap: undefined,
    displacementScale: 0.1,
    refractionRatio: 0.5,
    wireframe: false,
    flatShading: false,
    vertexColors: false,
  },
  admin: MaterialAdmin = {
    alphaTest: 0,
    alphaHash: false,
    depthTest: true,
    depthWrite: true,
  }
): MaterialTypes => {
  return new THREE.MeshPhysicalMaterial({
    color: basicParams.color,
    emissive: basicParams.emissive,
    emissiveIntensity: basicParams.emissiveIntensity,
    sheenColor: basicParams.sheenColor,
    sheen: basicParams.sheen,
    sheenRoughness: basicParams.sheenRoughness,
    specularColor: basicParams.specularColor,
    specularIntensity: basicParams.specularIntensity,
    roughness: basicParams.roughness,
    roughnessMap: basicParams.roughnessMap,
    metalness: basicParams.metalness,
    metalnessMap: basicParams.metalnessMap,
    ior: basicParams.ior,
    reflectivity: basicParams.reflectivity,
    iridescence: basicParams.iridescence,
    iridescenceIOR: basicParams.iridescenceIOR,
    iridescenceMap: basicParams.iridescenceMap,
    clearcoat: basicParams.clearcoat,
    clearcoatRoughness: basicParams.clearcoatRoughness,
    visible: basicParams.visible,
    transparent:
      basicParams.opacity !== undefined ? basicParams.opacity < 1 : true,
    opacity: basicParams.opacity,

    side: CustomParams.side,
    fog: CustomParams.fog,
    map: CustomParams.map,
    envMap: CustomParams.envMap,
    alphaMap: CustomParams.alphaMap,
    normalMap: CustomParams.normalMap,
    normalScale: CustomParams.normalScale,
    displacementMap: CustomParams.displacementMap,
    displacementScale: CustomParams.displacementScale,
    wireframe: CustomParams.wireframe,
    flatShading: CustomParams.flatShading,
    vertexColors: CustomParams.vertexColors,

    alphaTest: admin.alphaTest,
    depthTest: admin.depthTest,
    depthWrite: admin.depthWrite,
  });
};
