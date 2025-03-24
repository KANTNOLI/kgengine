import * as THREE from "three";
import { GeometryTypes, MaterialTypes } from "../../Constants.interface.js";
import { BoxGeometry } from "../Geometry/BoxGeometry.js";
import { BasicMaterial } from "../Materials/BasicMaterial.js";

export interface BoxSize {
  width?: number;
  height?: number;
  depth?: number;
}

export interface BoxSegments {
  widthSegments?: number;
  heightSegments?: number;
  depthSegments?: number;
}

const CreateBox = (
  Material: MaterialTypes = BasicMaterial({ color: 0x00022 }),
  size: BoxSize = {
    width: 1,
    height: 1,
    depth: 1,
  },
  segments: BoxSegments = {
    widthSegments: 1,
    heightSegments: 1,
    depthSegments: 1,
  }
): THREE.Object3D => {
  return new THREE.Mesh(BoxGeometry(size, segments), Material);
};

export default CreateBox;
