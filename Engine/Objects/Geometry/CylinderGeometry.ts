import * as THREE from "three";
import { GeometryTypes } from "../../Constants.interface.js";

export interface CylinderRadius {
  radiusTop?: number;
  radiusBottom?: number;
}

export interface CylinderSegments {
  radialSegments?: number;
  heightSegments?: number;
}

export interface CylinderTheta {
  thetaStart?: number;
  thetaLength?: number;
}

export const CylinderGeometry = (
  radius: CylinderRadius = {
    radiusTop: 1,
    radiusBottom: 1,
  },
  height: number = 2,
  segments: CylinderSegments = {
    radialSegments: 32,
    heightSegments: 1,
  },
  openEnded: boolean = false,
  theta: CylinderTheta = {
    thetaStart: 0,
    thetaLength: Math.PI * 2,
  }
):GeometryTypes  => {
  const { radiusTop = 1, radiusBottom = 1 } = radius;
  const { radialSegments = 32, heightSegments = 1 } = segments;
  const { thetaStart = 0, thetaLength = Math.PI * 2 } = theta;

  return new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    thetaStart,
    thetaLength
  );
};
