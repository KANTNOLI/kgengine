import * as THREE from "three";

interface PolyhedronParams {
  vertices?: number[];
  indices?: number[];
  radius?: number;
  detail?: number;
}

export const PolyhedronGeometry = (
  params: PolyhedronParams = {
    vertices: [0, 0, 0, 1, 1, 1, -1, -1, -1],
    indices: [0, 1, 2, 1, 2, 3],
    radius: 1,
    detail: 0,
  }
): THREE.PolyhedronGeometry => {
  const {
    vertices = [0, 0, 0, 1, 1, 1, -1, -1, -1],
    indices = [0, 1, 2, 1, 2, 3],
    radius = 1,
    detail = 0,
  } = params;

  return new THREE.PolyhedronGeometry(vertices, indices, radius, detail);
};
