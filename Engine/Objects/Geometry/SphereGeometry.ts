import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface SphereSegments {
  widthSegments?: number;
  heightSegments?: number;
}

export interface SpherePhi {
  phiStart?: number;
  phiLength?: number;
}

export interface SphereTheta {
  thetaStart?: number;
  thetaLength?: number;
}

export const SphereGeometry = (
  radius: number = 1,
  segments: SphereSegments = {
    widthSegments: 32,
    heightSegments: 32,
  },
  phi: SpherePhi = {
    phiStart: 0,
    phiLength: Math.PI * 2,
  },
  theta: SphereTheta = {
    thetaStart: 0,
    thetaLength: Math.PI,
  }
):GeometryTypes => {
  const { widthSegments = 32, heightSegments = 32 } = segments;
  const { phiStart = 0, phiLength = Math.PI * 2 } = phi;
  const { thetaStart = 0, thetaLength = Math.PI } = theta;

  return new THREE.SphereGeometry(
    radius,
    widthSegments,
    heightSegments,
    phiStart,
    phiLength,
    thetaStart,
    thetaLength
  );
};
