import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface LathePhi {
  phiStart?: number;
  phiLength?: number;
}

export const LatheGeometry = (
  points: THREE.Vector2[] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 1)],
  segments: number = 12,
  phi: LathePhi = {
    phiStart: 0,
    phiLength: Math.PI * 2,
  }
):GeometryTypes  => {
  const { phiStart = 0, phiLength = Math.PI * 2 } = phi;

  return new THREE.LatheGeometry(points, segments, phiStart, phiLength);
};
