export const ExtrudeGeometry = (
    shape = new THREE.Shape(),
    options = {
      depth: 1,
      bevelEnabled: false,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 3,
    }
  ) => {
    return new THREE.ExtrudeGeometry(
      shape,
      options
    );
  };
  