import * as THREE from "three";
import { MaterialTypes } from "../../Constants.interface.js";

export interface MaterialBasicParams {
  color?: number;
  emissive?: number;
  emissiveIntensity?: number;
  roughness?: number;
  roughnessMap?: THREE.Texture | undefined;
  metalness?: number;
  metalnessMap?: THREE.Texture | undefined;
  visible?: boolean;
  opacity?: number;
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

export const StandardMaterial = (
  basicParams: MaterialBasicParams = {
    color: 0x121212,
    emissive: 0xc45151,
    emissiveIntensity: 0,
    roughness: 0,
    roughnessMap: undefined,
    metalness: 0,
    metalnessMap: undefined,
    visible: true,
    opacity: 1,
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
    combine: THREE.AddOperation,
    reflectivity: 0.5,
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
  return new THREE.MeshStandardMaterial({
    color: basicParams.color,
    emissive: basicParams.emissive,
    emissiveIntensity: basicParams.emissiveIntensity,
    roughness: basicParams.roughness,
    roughnessMap: basicParams.roughnessMap,
    metalness: basicParams.metalness,
    metalnessMap: basicParams.metalnessMap,

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
