import * as THREE from "three";

export const SphereGeometry = (
    radius = 1,
    segments = {
      widthSegments: 32,
      heightSegments: 32,
    },
    phi = {
      phiStart: 0,
      phiLength: Math.PI * 2,
    },
    theta = {
      thetaStart: 0,
      thetaLength: Math.PI,
    }
  ) => {
    return new THREE.SphereGeometry(
      radius,
      segments.widthSegments,
      segments.heightSegments,
      phi.phiStart,
      phi.phiLength,
      theta.thetaStart,
      theta.thetaLength
    );
  };
  