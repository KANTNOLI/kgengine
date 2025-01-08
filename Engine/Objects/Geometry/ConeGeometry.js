export const ConeGeometry = (
    radius = 1,
    height = 2,
    radialSegments = 32,
    heightSegments = 1,
    openEnded = false,
    theta = {
      thetaStart: 0,
      thetaLength: Math.PI * 2,
    }
  ) => {
    return new THREE.ConeGeometry(
      radius,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      theta.thetaStart,
      theta.thetaLength
    );
  };
  