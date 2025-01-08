import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const DefaultOrbitControll = (
  renderer,
  camera,
  pAngle = {
    min: 30,
    max: 70,
  }
) => {
  
  if (!(renderer instanceof THREE.WebGLRenderer)) {
    console.error(`DefaultOrbitControll error: renderer is not WebGLRenderer!`);
    alert("Fatal error! Look client console");
    return -1;
  } else if (!(camera instanceof THREE.PerspectiveCamera)) {
    console.error(`DefaultOrbitControll error: scene is not PerspectiveCamera!`);
    alert("Fatal error! Look client console");
    return -1;
  }

  // эта штука позв крутить камеру во круг доски
  const action = new OrbitControls(camera, renderer.domElement);
  action.enableDamping = true;
  action.dampingFactor = 0.25;
  action.enablePan = false;
  action.minPolarAngle = THREE.MathUtils.degToRad(pAngle.min);
  action.maxPolarAngle = THREE.MathUtils.degToRad(pAngle.max);

  return action;
};
