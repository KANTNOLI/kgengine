export const CylinderGeometry = (
    radius = {
      radiusTop: 1,
      radiusBottom: 1,
    },
    height = 2,
    segments = {
      radialSegments: 32,
      heightSegments: 1,
    },
    openEnded = false,
    theta = {
      thetaStart: 0,
      thetaLength: Math.PI * 2,
    }
  ) => {
    return new THREE.CylinderGeometry(
      radius.radiusTop,
      radius.radiusBottom,
      height,
      segments.radialSegments,
      segments.heightSegments,
      openEnded,
      theta.thetaStart,
      theta.thetaLength
    );
  };
  