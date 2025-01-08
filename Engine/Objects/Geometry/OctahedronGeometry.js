import * as THREE from "three";

export const OctahedronGeometry = (
    radius = 1,
    detail = 0
  ) => {
    return new THREE.OctahedronGeometry(
      radius,
      detail
    );
  };
  