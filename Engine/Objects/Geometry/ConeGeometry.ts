import * as THREE from "three";

interface ConeTheta {
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
): THREE.ConeGeometry => {
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
