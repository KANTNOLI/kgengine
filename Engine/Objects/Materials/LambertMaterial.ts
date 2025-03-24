import * as THREE from "three";
import { MaterialTypes } from "../../Constants.interface.js";

export interface MaterialBasicParams {
  color?: number;
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
  specularMap?: THREE.Texture | undefined;
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

export const LambertMaterial = (
  basicParams: MaterialBasicParams = {
    color: 0x121212,
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
    specularMap: undefined,
    displacementMap: undefined,
    displacementScale: 0.1,
    combine: THREE.AddOperation,
    reflectivity: 0.5,
    refractionRatio: 0.5,
    wireframe: false,
    vertexColors: false,
  },
  admin: MaterialAdmin = {
    alphaTest: 0,
    alphaHash: false,
    depthTest: true,
    depthWrite: true,
  }
): MaterialTypes =>
  new THREE.MeshLambertMaterial({
    color: basicParams.color,
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
    specularMap: CustomParams.specularMap,
    displacementMap: CustomParams.displacementMap,
    displacementScale: CustomParams.displacementScale,
    combine: CustomParams.combine,
    reflectivity: CustomParams.reflectivity,
    refractionRatio: CustomParams.refractionRatio,
    wireframe: CustomParams.wireframe,
    vertexColors: CustomParams.vertexColors,
  

    alphaTest: admin.alphaTest,
    depthTest: admin.depthTest,
    depthWrite: admin.depthWrite,
  });
