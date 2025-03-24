import * as THREE from "three";
import { MaterialTypes } from "../../Constants.interface.js";

// добавть куб окружения и дефолт текстуры по типу дерева envMap + map
// alphaMap - места прозрч черные проз белые норм png
// combine THREE.AddOperation .MultiplyOperation .MixOperation

export interface MaterialBasicParams {
  color?: number;
  visible?: boolean;
  opacity?: number;
}

export interface MaterialOtherParams {
  fog?: boolean;
  map?: THREE.Texture | undefined;
  envMap?: THREE.Texture | undefined;
  alphaMap?: THREE.Texture | undefined;
  normalMap?: THREE.Texture | undefined;
  displacementMap?: THREE.Texture | undefined;
  displacementScale?: number;
  combine?: THREE.Combine;
  reflectivity?: number;
  refractionRatio?: number;
  wireframe?: boolean;
  vertexColors?: boolean;
}

export interface MaterialAdmin {
  alphaTest: number;
  alphaHash: boolean;
  depthTest: boolean;
  depthWrite: boolean;
}

export interface ShadersParams {
  size: THREE.Side;
}

export const BasicMaterial = (
  basicParams: MaterialBasicParams = {
    color: 0x121212,
    visible: true,
    opacity: 1,
  },
  CustomParams: MaterialOtherParams = {
    fog: true,
    map: undefined,
    envMap: undefined,
    alphaMap: undefined,
    combine: THREE.AddOperation,
    reflectivity: 0.5,
    refractionRatio: 0.5,
    wireframe: false,
    vertexColors: false,
  },
  Shaders: ShadersParams = {
    size: THREE.DoubleSide,
  },
  admin: MaterialAdmin = {
    alphaTest: 0,
    alphaHash: false,
    depthTest: true,
    depthWrite: true,
  }
): MaterialTypes =>
  new THREE.MeshBasicMaterial({
    color: basicParams.color,
    visible: basicParams.visible,
    transparent:
      basicParams.opacity != undefined ? basicParams.opacity < 1 : true,
    opacity: basicParams.opacity,

    fog: CustomParams.fog,
    map: CustomParams.map,
    envMap: CustomParams.envMap,
    alphaMap: CustomParams.alphaMap,
    combine: CustomParams.combine,
    reflectivity: CustomParams.reflectivity,
    refractionRatio: CustomParams.refractionRatio,
    wireframe: CustomParams.wireframe,
    vertexColors: CustomParams.vertexColors,

    side: Shaders.size,

    alphaTest: admin.alphaTest,
    alphaHash: admin.alphaHash,
    depthTest: admin.depthTest,
    depthWrite: admin.depthWrite,
  });
