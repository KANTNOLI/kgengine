import * as THREE from "three";

export const DodecahedronGeometry = (
    radius = 1,
    detail = 0
  ) => {
    return new THREE.DodecahedronGeometry(
      radius,
      detail
    );
  };
  