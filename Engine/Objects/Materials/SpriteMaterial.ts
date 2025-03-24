import * as THREE from "three";

export interface SpriteParam {
  texture: THREE.Texture;
  color?: number;
  transparent?: boolean;
  opacity?: number;
}

const SpriteMaterial = (param: SpriteParam): THREE.SpriteMaterial => {
  return new THREE.SpriteMaterial({
    map: param.texture,
    color: param.color,
    transparent: param.transparent,
    opacity: param.opacity,
  });
};

export default SpriteMaterial;
