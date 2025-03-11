import * as THREE from "three";

interface TetrahedronParams {
  radius?: number;
  detail?: number;
}

export const TetrahedronGeometry = (
  params: TetrahedronParams = {
    radius: 1,
    detail: 0,
  }
): THREE.TetrahedronGeometry => {
  const { radius = 1, detail = 0 } = params;

  return new THREE.TetrahedronGeometry(radius, detail);
};
