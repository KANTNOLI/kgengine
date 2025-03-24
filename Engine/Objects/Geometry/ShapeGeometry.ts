import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface ShapeParams {
  shape?: THREE.Shape;
  curveSegments?: number;
}

export const ShapeGeometry = (
  params: ShapeParams = {
    shape: new THREE.Shape(),
    curveSegments: 12,
  }
):GeometryTypes => {
  const { shape = new THREE.Shape(), curveSegments = 12 } = params;

  return new THREE.ShapeGeometry(shape, curveSegments);
};
