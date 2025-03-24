import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface ConeTheta {
  thetaStart?: number;
  thetaLength?: number;
}

export const ConeGeometry = (
  radius: number = 1,
  height: number = 2,
  radialSegments: number = 32,
  heightSegments: number = 1,
  openEnded: boolean = false,
  theta: ConeTheta = {
    thetaStart: 0,
    thetaLength: Math.PI * 2,
  }
):GeometryTypes  => {
  const { thetaStart = 0, thetaLength = Math.PI * 2 } = theta;

  return new THREE.ConeGeometry(
    radius,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    thetaStart,
    thetaLength
  );
};
