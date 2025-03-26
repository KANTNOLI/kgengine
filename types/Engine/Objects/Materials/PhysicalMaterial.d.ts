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
export declare const PhysicalMaterial: (basicParams?: MaterialBasicParams, CustomParams?: MaterialOtherParams, admin?: MaterialAdmin) => MaterialTypes;
