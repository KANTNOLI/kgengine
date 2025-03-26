import * as THREE from "three";
import { MaterialTypes } from "../../Constants.interface.js";
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
export declare const BasicMaterial: (basicParams?: MaterialBasicParams, CustomParams?: MaterialOtherParams, Shaders?: ShadersParams, admin?: MaterialAdmin) => MaterialTypes;
