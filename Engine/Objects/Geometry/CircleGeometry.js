export const CircleGeometry = (
    radius = 1,
    segments = {
      segments: 32,
    },
    theta = {
      thetaStart: 0,
      thetaLength: Math.PI * 2,
    }
  ) => {
    return new THREE.CircleGeometry(
      radius,
      segments.segments,
      theta.thetaStart,
      theta.thetaLength
    );
  };
  