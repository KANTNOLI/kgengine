import * as THREE from "three";

interface ShapeParams {
  shape?: THREE.Shape;
  curveSegments?: number;
}

export const ShapeGeometry = (
  params: ShapeParams = {
    shape: new THREE.Shape(),
    curveSegments: 12,
  }
): THREE.ShapeGeometry => {
  const { shape = new THREE.Shape(), curveSegments = 12 } = params;

  return new THREE.ShapeGeometry(shape, curveSegments);
};
