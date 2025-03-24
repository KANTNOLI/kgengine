import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface TorusKnotSegments {
  tubularSegments?: number;
  radialSegments?: number;
}

export const TorusKnotGeometry = (
  radius: number = 1,
  tube: number = 0.4,
  segments: TorusKnotSegments = {
    tubularSegments: 100,
    radialSegments: 16,
  },
  p: number = 2,
  q: number = 3
):GeometryTypes => {
  const { tubularSegments = 100, radialSegments = 16 } = segments;

  return new THREE.TorusKnotGeometry(
    radius,
    tube,
    tubularSegments,
    radialSegments,
    p,
    q
  );
};
