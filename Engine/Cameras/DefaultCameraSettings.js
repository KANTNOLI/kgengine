import * as THREE from "three";

export const DefaultCameraSettings = (
  position = { x: 0, y: 0.25, z: 1 },
  perspective = {
    fov: 75,
    aspect: window.innerWidth / window.innerHeight,
    near: 0.01,
    far: 25,
  }
) => {
  // { x: 0.10, y: 1.25, z: 1.50 }  - WHITE
  // { x: 0.12, y: 1.25, z: -1.15}) - BLACK
  // { x: 1.25, y: 1.25, z: 0.12 }  - VIEW

  if (typeof perspective === "object") {
    const camera = new THREE.PerspectiveCamera(
      perspective.fov,
      perspective.aspect,
      perspective.near,
      perspective.far
    );

    if (typeof position === "object") {
      camera.position.x = position.x;
      camera.position.y = position.y;
      camera.position.z = position.z;

      return camera;
    } else {
      console.log(
        `DefaultCameraSettings error: position is not object! example - { x: 0, y: 0, z: 0 }`
      );
      return "DefaultCameraSettings ERROR! Look terminal!";
    }
  } else {
    console.log(
      `DefaultCameraSettings error: perspective is not object! example - { fov: 0, aspect: 0, near: 0, far: 0}`
    );
      return "DefaultCameraSettings ERROR! Look terminal!";
  }
};
