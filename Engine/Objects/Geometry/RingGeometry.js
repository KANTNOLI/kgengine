export const RingGeometry = (
    innerRadius = 0.5,
    outerRadius = 1,
    thetaSegments = 32,
    phiSegments = 1,
    theta = {
      thetaStart: 0,
      thetaLength: Math.PI * 2,
    }
  ) => {
    return new THREE.RingGeometry(
      innerRadius,
      outerRadius,
      thetaSegments,
      phiSegments,
      theta.thetaStart,
      theta.thetaLength
    );
  };
  