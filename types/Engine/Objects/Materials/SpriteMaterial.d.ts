import * as THREE from "three";
export interface SpriteParam {
    texture: THREE.Texture;
    color?: number;
    transparent?: boolean;
    opacity?: number;
}
declare const SpriteMaterial: (param: SpriteParam) => THREE.SpriteMaterial;
export default SpriteMaterial;
