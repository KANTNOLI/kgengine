import * as THREE from "three";

interface CircleSegments {
  segments?: number;
}

interface CircleTheta {
  thetaStart?: number;
  thetaLength?: number;
}

export const CircleGeometry = (
  radius: number = 1,
  segments: CircleSegments = {
    segments: 32,
  },
  theta: CircleTheta = {
    thetaStart: 0,
    thetaLength: Math.PI * 2,
  }
): THREE.CircleGeometry => {
  return new THREE.CircleGeometry(
    radius,
    segments.segments ?? 32, // Проверка на значение, если не передано
    theta.thetaStart ?? 0,
    theta.thetaLength ?? Math.PI * 2
  );
};
