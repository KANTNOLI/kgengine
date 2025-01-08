export const TextGeometry = (
    text = 'Hello',
    parameters = {
      font: new THREE.Font(),
      size: 1,
      height: 0.1,
      curveSegments: 12,
      bevelEnabled: false,
      bevelThickness: 0.01,
      bevelSize: 0.05,
      bevelOffset: 0,
      bevelSegments: 3
    }
  ) => {
    return new THREE.TextGeometry(
      text,
      parameters
    );
  };
  