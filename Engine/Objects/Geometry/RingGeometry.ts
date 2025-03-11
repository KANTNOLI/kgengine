import * as THREE from "three";

interface RingTheta {
  thetaStart?: number;
  thetaLength?: number;
}

export const RingGeometry = (
  innerRadius: number = 0.5,
  outerRadius: number = 1,
  thetaSegments: number = 32,
  phiSegments: number = 1,
  theta: RingTheta = {
    thetaStart: 0,
    thetaLength: Math.PI * 2,
  }
): THREE.RingGeometry => {
  const { thetaStart = 0, thetaLength = Math.PI * 2 } = theta;

  return new THREE.RingGeometry(
    innerRadius,
    outerRadius,
    thetaSegments,
    phiSegments,
    thetaStart,
    thetaLength
  );
};
