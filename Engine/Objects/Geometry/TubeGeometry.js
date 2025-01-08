export const TubeGeometry = (
    path = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 1, 1)]),
    tubularSegments = 64,
    radius = 1,
    radialSegments = 8,
    closed = false
  ) => {
    return new THREE.TubeGeometry(
      path,
      tubularSegments,
      radius,
      radialSegments,
      closed
    );
  };
  