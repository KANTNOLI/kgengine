import * as THREE from "three";

interface DodecahedronParams {
  radius?: number;
  detail?: number;
}

export const DodecahedronGeometry = (
  params: DodecahedronParams = {
    radius: 1,
    detail: 0,
  }
): THREE.DodecahedronGeometry => {
  const { radius = 1, detail = 0 } = params;

  return new THREE.DodecahedronGeometry(radius, detail);
};
