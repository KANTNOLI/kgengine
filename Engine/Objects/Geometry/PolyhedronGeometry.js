export const PolyhedronGeometry = (
    vertices = [0,0,0, 1,1,1, -1,-1,-1],
    indices = [0,1,2, 1,2,3],
    radius = 1,
    detail = 0
  ) => {
    return new THREE.PolyhedronGeometry(
      vertices,
      indices,
      radius,
      detail
    );
  };
  