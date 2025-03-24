import * as THREE from "three";
import LoadingTextures from "./LoadingTextures.js";
import SpriteMaterial from "../Objects/Materials/SpriteMaterial.js";
import { PositionObject3D } from "../Constants.interface.js";

export interface SpriteParam {
  path: string;
  color?: number;
  transparent?: boolean;
  opacity?: number;
}

export interface Scale {
  x?: number;
  y?: number;
  z?: number;
}

const CreateSprite = (
  param: SpriteParam = {
    path: "your/path/to/asset",
  },
  position: PositionObject3D = {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: Scale = {
    x: 0,
    y: 0,
    z: 0,
  }
) => {
  let sprite = new THREE.Sprite(
    SpriteMaterial({ texture: LoadingTextures(param.path), ...param })
  );

  sprite.position.x = position.x;
  sprite.position.y = position.y;
  sprite.position.z = position.z;

  if (scale) {
    sprite.scale.x = scale.x ? scale.x : 0;
    sprite.scale.y = scale.y ? scale.y : 0;
    sprite.scale.z = scale.z ? scale.z : 0;
  }

  return sprite;
};

export default CreateSprite;
