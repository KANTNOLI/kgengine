import * as THREE from "three";

export const ShapeGeometry = (
  shape = new THREE.Shape(),
  curveSegments = 12
) => {
  return new THREE.ShapeGeometry(
    shape,
    curveSegments
  );
};
