export const TorusGeometry = (
    radius = 1,
    tube = 0.4,
    segments = {
      radialSegments: 16,
      tubularSegments: 100,
    },
    arc = Math.PI * 2
  ) => {
    return new THREE.TorusGeometry(
      radius,
      tube,
      segments.radialSegments,
      segments.tubularSegments,
      arc
    );
  };
  