export const TorusKnotGeometry = (
    radius = 1,
    tube = 0.4,
    segments = {
      tubularSegments: 100,
      radialSegments: 16,
    },
    p = 2,
    q = 3
  ) => {
    return new THREE.TorusKnotGeometry(
      radius,
      tube,
      segments.tubularSegments,
      segments.radialSegments,
      p,
      q
    );
  };
  