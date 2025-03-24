import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface ExtrudeOptions {
  depth?: number;
  bevelEnabled?: boolean;
  bevelThickness?: number;
  bevelSize?: number;
  bevelOffset?: number;
  bevelSegments?: number;
}

export const ExtrudeGeometry = (
  shape: THREE.Shape = new THREE.Shape(),
  options: ExtrudeOptions = {
    depth: 1,
    bevelEnabled: false,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 3,
  }
):GeometryTypes  => {
  return new THREE.ExtrudeGeometry(shape, options);
};
