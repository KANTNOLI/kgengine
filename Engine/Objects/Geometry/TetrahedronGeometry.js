export const TetrahedronGeometry = (
    radius = 1,
    detail = 0
  ) => {
    return new THREE.TetrahedronGeometry(
      radius,
      detail
    );
  };
  