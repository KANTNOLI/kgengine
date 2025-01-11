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
  const action = new OrbitControls(camera, renderer.domElement);
  action.enableDamping = true;
  action.dampingFactor = 0.25;
  action.enablePan = false;
  action.minPolarAngle = THREE.MathUtils.degToRad(pAngle.min);
  action.maxPolarAngle = THREE.MathUtils.degToRad(pAngle.max);

  return action;
};
