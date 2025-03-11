import * as THREE from "three";

interface OctahedronParams {
  radius?: number;
  detail?: number;
}

export const OctahedronGeometry = (
  params: OctahedronParams = {
    radius: 1,
    detail: 0,
  }
): THREE.OctahedronGeometry => {
  const { radius = 1, detail = 0 } = params;

  return new THREE.OctahedronGeometry(radius, detail);
};
