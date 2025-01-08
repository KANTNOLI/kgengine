export const LatheGeometry = (
    points = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 1)],
    segments = 12,
    phi = {
      phiStart: 0,
      phiLength: Math.PI * 2,
    }
  ) => {
    return new THREE.LatheGeometry(
      points,
      segments,
      phi.phiStart,
      phi.phiLength
    );
  };
  