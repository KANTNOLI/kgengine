import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface TorusSegments {
  radialSegments?: number;
  tubularSegments?: number;
}

export const TorusGeometry = (
  radius: number = 1,
  tube: number = 0.4,
  segments: TorusSegments = {
    radialSegments: 16,
    tubularSegments: 100,
  },
  arc: number = Math.PI * 2
):GeometryTypes => {
  const { radialSegments = 16, tubularSegments = 100 } = segments;

  return new THREE.TorusGeometry(
    radius,
    tube,
    radialSegments,
    tubularSegments,
    arc
  );
};
